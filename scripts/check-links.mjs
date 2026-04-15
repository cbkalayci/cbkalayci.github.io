#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const checkExternal = process.argv.includes("--check-external");
const externalTimeoutMs = readExternalTimeoutMs(process.argv, 8000);
const htmlFiles = collectHtmlFiles(rootDir);
const idMap = new Map();
const errors = [];
const externalRefs = new Set();

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  const ids = new Set();
  for (const match of content.matchAll(/\sid="([^"]+)"/g)) {
    ids.add(match[1]);
  }
  idMap.set(file, ids);
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const attr = match[1];
    const ref = match[2].trim();
    const refType = classifyRef(ref);
    if (refType === "ignore") {
      continue;
    }
    if (refType === "external") {
      externalRefs.add(normalizeExternalRef(ref));
      continue;
    }

    const { rawPath, fragment } = splitRef(ref);
    const resolvedTarget = resolveTarget(file, rawPath);
    if (!resolvedTarget || !fs.existsSync(resolvedTarget)) {
      errors.push(`${toRel(file)} -> ${attr}="${ref}" (target not found)`);
      continue;
    }

    if (attr === "href" && fragment && resolvedTarget.endsWith(".html")) {
      const targetIds = idMap.get(resolvedTarget);
      if (!targetIds || !targetIds.has(fragment)) {
        errors.push(`${toRel(file)} -> ${attr}="${ref}" (missing #${fragment})`);
      }
    }
  }
}

if (checkExternal && externalRefs.size > 0) {
  const externalErrors = await checkExternalReferences(
    Array.from(externalRefs.values()),
    externalTimeoutMs
  );
  errors.push(...externalErrors);
}

if (errors.length) {
  console.error("Link check failed:");
  errors.forEach((err) => console.error(`- ${err}`));
  process.exit(1);
}

const externalSummary = checkExternal
  ? `, external checked: ${externalRefs.size}`
  : "";
console.log(`Link check passed (${htmlFiles.length} HTML files${externalSummary}).`);

function collectHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

function classifyRef(ref) {
  if (
    !ref ||
    ref.startsWith("mailto:") ||
    ref.startsWith("tel:") ||
    ref.startsWith("javascript:") ||
    ref.startsWith("data:") ||
    ref.startsWith("blob:")
  ) {
    return "ignore";
  }
  if (ref.startsWith("http://") || ref.startsWith("https://") || ref.startsWith("//")) {
    return "external";
  }
  return "local";
}

function splitRef(ref) {
  const hashIndex = ref.indexOf("#");
  const rawPathWithQuery = hashIndex === -1 ? ref : ref.slice(0, hashIndex);
  const fragment = hashIndex === -1 ? "" : ref.slice(hashIndex + 1);
  const queryIndex = rawPathWithQuery.indexOf("?");
  const rawPath =
    queryIndex === -1 ? rawPathWithQuery : rawPathWithQuery.slice(0, queryIndex);

  return { rawPath, fragment };
}

function resolveTarget(fromFile, rawPath) {
  if (!rawPath) {
    return fromFile;
  }

  let absolute;
  if (rawPath.startsWith("/")) {
    absolute = path.join(rootDir, rawPath);
  } else {
    absolute = path.resolve(path.dirname(fromFile), rawPath);
  }

  if (fs.existsSync(absolute) && fs.statSync(absolute).isDirectory()) {
    return path.join(absolute, "index.html");
  }

  if (fs.existsSync(absolute)) {
    return absolute;
  }

  if (!path.extname(absolute)) {
    const htmlCandidate = `${absolute}.html`;
    if (fs.existsSync(htmlCandidate)) {
      return htmlCandidate;
    }

    const indexCandidate = path.join(absolute, "index.html");
    if (fs.existsSync(indexCandidate)) {
      return indexCandidate;
    }
  }

  return null;
}

async function checkExternalReferences(refs, timeoutMs) {
  const failures = [];

  for (const ref of refs) {
    const result = await probeExternalRef(ref, timeoutMs);
    if (!result.ok) {
      failures.push(`external ${ref} (${result.reason})`);
    }
  }

  return failures;
}

async function probeExternalRef(ref, timeoutMs) {
  const headResponse = await fetchWithTimeout(ref, "HEAD", timeoutMs);
  if (isReachableStatus(headResponse.status)) {
    return { ok: true };
  }

  if (
    headResponse.status === 405 ||
    headResponse.status === 501 ||
    headResponse.status === 0
  ) {
    const getResponse = await fetchWithTimeout(ref, "GET", timeoutMs);
    if (isReachableStatus(getResponse.status)) {
      return { ok: true };
    }
    return {
      ok: false,
      reason: getResponse.error || `HTTP ${getResponse.status}`
    };
  }

  return {
    ok: false,
    reason: headResponse.error || `HTTP ${headResponse.status}`
  };
}

function isReachableStatus(status) {
  return (
    (status > 0 && status < 500) ||
    status === 999
  );
}

async function fetchWithTimeout(url, method, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal
    });
    return { status: response.status };
  } catch (error) {
    const message =
      error?.name === "AbortError" ? `timeout after ${timeoutMs}ms` : String(error);
    return { status: 0, error: message };
  } finally {
    clearTimeout(timeout);
  }
}

function normalizeExternalRef(ref) {
  if (ref.startsWith("//")) {
    return `https:${ref}`;
  }
  return ref;
}

function readExternalTimeoutMs(argv, defaultValue) {
  const arg = argv.find((item) => item.startsWith("--external-timeout="));
  if (!arg) {
    return defaultValue;
  }
  const value = Number(arg.split("=")[1]);
  if (!Number.isFinite(value) || value <= 0) {
    return defaultValue;
  }
  return value;
}

function toRel(file) {
  return path.relative(rootDir, file);
}
