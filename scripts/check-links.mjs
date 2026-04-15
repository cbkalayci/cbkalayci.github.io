#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const htmlFiles = collectHtmlFiles(rootDir);
const idMap = new Map();
const errors = [];

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
  for (const match of content.matchAll(/href="([^"]+)"/g)) {
    const href = match[1].trim();
    if (shouldSkip(href)) {
      continue;
    }

    const [rawPath, fragment] = href.split("#");
    const resolvedTarget = resolveTarget(file, rawPath || "");
    if (!resolvedTarget || !fs.existsSync(resolvedTarget)) {
      errors.push(`${toRel(file)} -> ${href} (target not found)`);
      continue;
    }

    if (fragment) {
      const targetIds = idMap.get(resolvedTarget);
      if (!targetIds || !targetIds.has(fragment)) {
        errors.push(`${toRel(file)} -> ${href} (missing #${fragment})`);
      }
    }
  }
}

if (errors.length) {
  console.error("Internal link check failed:");
  errors.forEach((err) => console.error(`- ${err}`));
  process.exit(1);
}

console.log(`Internal link check passed (${htmlFiles.length} HTML files).`);

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

function shouldSkip(href) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function resolveTarget(fromFile, hrefPath) {
  if (!hrefPath || hrefPath === "") {
    return fromFile;
  }

  let absolute;
  if (hrefPath.startsWith("/")) {
    absolute = path.join(rootDir, hrefPath);
  } else {
    absolute = path.resolve(path.dirname(fromFile), hrefPath);
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

function toRel(file) {
  return path.relative(rootDir, file);
}
