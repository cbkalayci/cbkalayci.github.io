#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const checkMode = process.argv.includes("--check");

const pages = [
  { file: "index.html", activeNav: "home" },
  { file: "cv/index.html", activeNav: "cv" },
  { file: "research/index.html", activeNav: "research" },
  { file: "publications/index.html", activeNav: "publications" },
  { file: "teaching/index.html", activeNav: "teaching" },
  { file: "projects/index.html", activeNav: "projects" },
  { file: "experience/index.html", activeNav: "experience" },
  { file: "service/index.html", activeNav: "service" }
];

const siteDataPath = path.join(rootDir, "data", "site-data.json");
const papersPath = path.join(rootDir, "data", "papers.bib");

if (!fs.existsSync(siteDataPath)) {
  throw new Error(`Missing data file: ${siteDataPath}`);
}
if (!fs.existsSync(papersPath)) {
  throw new Error(`Missing bibliography file: ${papersPath}`);
}

const siteData = JSON.parse(fs.readFileSync(siteDataPath, "utf8"));
const publications = parseBibTex(fs.readFileSync(papersPath, "utf8"));

const sortedPublications = publications.sort((a, b) => {
  if (b.year !== a.year) {
    return b.year - a.year;
  }
  return a.title.localeCompare(b.title, "en");
});

const publicationListHtml = renderPublicationList(sortedPublications);
const researchSelectedHtml = renderResearchSelected(sortedPublications.slice(0, 6));

const changedFiles = [];

for (const page of pages) {
  const absPath = path.join(rootDir, page.file);
  if (!fs.existsSync(absPath)) {
    throw new Error(`Missing page file: ${absPath}`);
  }

  const original = fs.readFileSync(absPath, "utf8");
  let updated = original;

  updated = replaceOrThrow(
    updated,
    /<nav class="top-nav" aria-label="Main navigation">[\s\S]*?<\/nav>/,
    renderNav(page.activeNav),
    page.file,
    "top navigation"
  );

  updated = replaceOrThrow(
    updated,
    /<ul class="contact-list">[\s\S]*?<\/ul>/,
    renderSidebar(),
    page.file,
    "sidebar links"
  );

  if (page.file === "publications/index.html") {
    updated = replaceOrThrow(
      updated,
      /<ol class="pub-list">[\s\S]*?<\/ol>/,
      publicationListHtml,
      page.file,
      "publication list"
    );
  }

  if (page.file === "research/index.html") {
    updated = replaceOrThrow(
      updated,
      /<h2>Selected Journal Publications<\/h2>[\s\S]*?<p>/,
      `<h2>Selected Journal Publications</h2>\n${researchSelectedHtml}\n\n        <p>`,
      page.file,
      "selected publications block"
    );
  }

  if (updated !== original) {
    changedFiles.push(page.file);
    if (!checkMode) {
      fs.writeFileSync(absPath, updated, "utf8");
    }
  }
}

if (checkMode) {
  if (changedFiles.length) {
    console.error("Generated files are out of date:");
    changedFiles.forEach((file) => console.error(`- ${file}`));
    process.exit(1);
  }
  console.log("Build check passed: all generated files are up to date.");
} else {
  if (changedFiles.length) {
    console.log("Updated files:");
    changedFiles.forEach((file) => console.log(`- ${file}`));
  } else {
    console.log("No changes required.");
  }
}

function renderNav(activeNavKey) {
  const links = siteData.nav
    .map((item) => {
      const isActive = item.key === activeNavKey;
      const activeClass = isActive ? ' class="is-active"' : "";
      const en = escapeHtml(item.label.en);
      const tr = escapeHtml(item.label.tr);
      return `          <a${activeClass} href="${item.href}" data-i18n-en="${en}" data-i18n-tr="${tr}">${en}</a>`;
    })
    .join("\n");

  return `<nav class="top-nav" aria-label="Main navigation">\n${links}\n        </nav>`;
}

function renderSidebar() {
  const lines = siteData.sidebar.map((item) => {
    const en = escapeHtml(item.label.en);
    const tr = escapeHtml(item.label.tr);
    if (item.type === "text") {
      return `          <li><span data-i18n-en="${en}" data-i18n-tr="${tr}">${en}</span></li>`;
    }
    if (item.href.startsWith("mailto:")) {
      return `          <li><a href="${item.href}" data-i18n-en="${en}" data-i18n-tr="${tr}">${en}</a></li>`;
    }
    return `          <li><a href="${item.href}" target="_blank" rel="noreferrer" data-i18n-en="${en}" data-i18n-tr="${tr}">${en}</a></li>`;
  });
  return `<ul class="contact-list">\n${lines.join("\n")}\n        </ul>`;
}

function renderPublicationList(entries) {
  const items = entries
    .map((entry) => {
      const title = ensureSentence(entry.title);
      const authors = escapeHtml(entry.authorsText);
      const venue = escapeHtml(entry.venue || "");
      const year = entry.year ? `${entry.year}` : "";
      const searchText = [entry.title, entry.authorsText, entry.venue, entry.year]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const doi = entry.doi
        ? ` <a href="https://doi.org/${escapeHtml(entry.doi)}" target="_blank" rel="noreferrer">[DOI]</a>`
        : "";

      return [
        `          <li data-year="${escapeHtml(year)}" data-search="${escapeHtml(searchText)}">`,
        `            <strong>${escapeHtml(title)}</strong>`,
        `            ${escapeHtml(ensurePeriodEnding(entry.authorsText))}`,
        `            <em>${venue}</em>${year ? `, ${year}.` : "."}${doi}`,
        "          </li>"
      ].join("\n");
    })
    .join("\n");

  return `<ol class="pub-list">\n${items}\n        </ol>`;
}

function renderResearchSelected(entries) {
  const items = entries
    .map((entry) => {
      const doi = entry.doi
        ? ` <a href="https://doi.org/${escapeHtml(entry.doi)}" target="_blank" rel="noreferrer">[DOI]</a>`
        : "";
      return [
        "          <li>",
        `            ${escapeHtml(entry.authorsText)} (${entry.year}).`,
        `            <em>${escapeHtml(ensureSentence(entry.title))}</em>`,
        `            ${escapeHtml(entry.venue || "")}.${doi}`,
        "          </li>"
      ].join("\n");
    })
    .join("\n");

  return `        <ol class="pub-list">\n${items}\n        </ol>`;
}

function parseBibTex(rawText) {
  const entries = [];
  const entryRegex = /@(\w+)\s*\{\s*([^,]+),([\s\S]*?)\n\}/g;
  let match;

  while ((match = entryRegex.exec(rawText)) !== null) {
    const body = match[3];
    const fields = {};
    body.split("\n").forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || line.startsWith("%")) {
        return;
      }
      const fieldMatch = line.match(/^([A-Za-z][A-Za-z0-9_-]*)\s*=\s*(.+?)(,)?$/);
      if (!fieldMatch) {
        return;
      }
      const key = fieldMatch[1].toLowerCase();
      let value = fieldMatch[2].trim();
      if (value.endsWith(",")) {
        value = value.slice(0, -1).trim();
      }
      fields[key] = cleanLatex(stripWrappers(value));
    });

    const year = extractYear(fields.year || fields.date || "");
    const title = fields.title || "";
    const venue =
      fields.journaltitle ||
      fields.journal ||
      fields.eventtitle ||
      fields.booktitle ||
      "";
    const doi = (fields.doi || "").replace(/^https?:\/\/doi\.org\//i, "");
    const authorsText = formatAuthors(fields.author || "");

    if (!title) {
      continue;
    }

    entries.push({
      title,
      venue,
      year,
      doi,
      authorsText
    });
  }

  return entries;
}

function formatAuthors(authorField) {
  return authorField
    .split(/\s+and\s+/i)
    .map((name) => cleanLatex(name))
    .filter(Boolean)
    .join(", ");
}

function extractYear(raw) {
  const match = raw.match(/(19|20)\d{2}/);
  return match ? Number(match[0]) : 0;
}

function ensureSentence(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return "";
  }
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function ensurePeriodEnding(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return "";
  }
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function stripWrappers(value) {
  let current = value.trim();
  let changed = true;
  while (changed) {
    changed = false;
    if (
      (current.startsWith("{") && current.endsWith("}")) ||
      (current.startsWith('"') && current.endsWith('"'))
    ) {
      current = current.slice(1, -1).trim();
      changed = true;
    }
  }
  return current;
}

function cleanLatex(text) {
  let output = text;
  const replacements = [
    [/\\&/g, "&"],
    [/\\%/g, "%"],
    [/\\_/g, "_"],
    [/\\i/g, "i"],
    [/\\\"{?o}?/g, "ö"],
    [/\\\"{?u}?/g, "ü"],
    [/\\\"{?a}?/g, "ä"],
    [/\\\"{?O}?/g, "Ö"],
    [/\\\"{?U}?/g, "Ü"],
    [/\\'{?i}?/g, "i"],
    [/\\'{?a}?/g, "a"],
    [/\\'{?e}?/g, "e"],
    [/\\`{?a}?/g, "a"],
    [/\\`{?e}?/g, "e"]
  ];
  replacements.forEach(([pattern, value]) => {
    output = output.replace(pattern, value);
  });
  output = output.replace(/[{}]/g, "");
  output = output.replace(/\\[A-Za-z]+/g, "");
  output = output.replace(/\s+/g, " ").trim();
  return output;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function replaceOrThrow(content, regex, replacement, file, sectionName) {
  if (!regex.test(content)) {
    throw new Error(`Could not find ${sectionName} in ${file}`);
  }
  return content.replace(regex, replacement);
}
