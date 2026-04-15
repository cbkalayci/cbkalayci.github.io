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
    /<nav class="top-nav"[^>]*>[\s\S]*?<\/nav>/,
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
      /<h2[^>]*>Selected Journal Publications<\/h2>\s*<ol class="pub-list">[\s\S]*?<\/ol>/,
      `<h2 data-i18n-key="research.selectedHeading">Selected Journal Publications</h2>\n${researchSelectedHtml}`,
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

  return `<nav class="top-nav" aria-label="Main navigation" data-i18n-key="shared.topNavAria" data-i18n-attr="aria-label">\n${links}\n        </nav>`;
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
  const rawEntries = splitBibEntries(rawText);

  rawEntries.forEach((rawEntry) => {
    const headerMatch = rawEntry.match(/^@(\w+)\s*\{\s*([^,]+),/i);
    if (!headerMatch) {
      return;
    }
    const bodyStart = headerMatch[0].length;
    const body = rawEntry.slice(bodyStart, -1);
    const fields = parseBibFields(body);

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
      return;
    }

    entries.push({
      title,
      venue,
      year,
      doi,
      authorsText
    });
  });

  return entries;
}

function formatAuthors(authorField) {
  return splitTopLevelAuthors(authorField)
    .map((name) => cleanLatex(name))
    .filter(Boolean)
    .join(", ");
}

function splitBibEntries(rawText) {
  const entries = [];
  let cursor = 0;

  while (cursor < rawText.length) {
    const atIndex = rawText.indexOf("@", cursor);
    if (atIndex === -1) {
      break;
    }

    const braceStart = rawText.indexOf("{", atIndex);
    if (braceStart === -1) {
      break;
    }

    let depth = 0;
    let endIndex = -1;
    for (let i = braceStart; i < rawText.length; i += 1) {
      const char = rawText[i];
      if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
        if (depth === 0) {
          endIndex = i;
          break;
        }
      }
    }

    if (endIndex === -1) {
      break;
    }

    entries.push(rawText.slice(atIndex, endIndex + 1));
    cursor = endIndex + 1;
  }

  return entries;
}

function parseBibFields(body) {
  const fields = {};
  let cursor = 0;

  while (cursor < body.length) {
    while (cursor < body.length && /[\s,]/.test(body[cursor])) {
      cursor += 1;
    }

    const keyStart = cursor;
    while (cursor < body.length && /[A-Za-z0-9_-]/.test(body[cursor])) {
      cursor += 1;
    }
    const rawKey = body.slice(keyStart, cursor).trim().toLowerCase();
    if (!rawKey) {
      break;
    }

    while (cursor < body.length && /\s/.test(body[cursor])) {
      cursor += 1;
    }
    if (body[cursor] !== "=") {
      while (cursor < body.length && body[cursor] !== ",") {
        cursor += 1;
      }
      continue;
    }
    cursor += 1;

    while (cursor < body.length && /\s/.test(body[cursor])) {
      cursor += 1;
    }

    const { value, nextCursor } = readBibValue(body, cursor);
    cursor = nextCursor;
    fields[rawKey] = cleanLatex(stripWrappers(value));
  }

  return fields;
}

function readBibValue(text, start) {
  const char = text[start];

  if (char === "{") {
    return readBalancedValue(text, start, "{", "}");
  }
  if (char === '"') {
    return readBalancedValue(text, start, '"', '"');
  }

  let cursor = start;
  while (cursor < text.length && text[cursor] !== ",") {
    cursor += 1;
  }
  const value = text.slice(start, cursor).trim();
  if (text[cursor] === ",") {
    cursor += 1;
  }
  return { value, nextCursor: cursor };
}

function readBalancedValue(text, start, openChar, closeChar) {
  let cursor = start;
  let depth = 0;
  let escaped = false;

  while (cursor < text.length) {
    const char = text[cursor];
    if (openChar === '"' && closeChar === '"') {
      if (!escaped && char === '"') {
        depth = depth === 0 ? 1 : depth - 1;
        if (depth === 0) {
          cursor += 1;
          break;
        }
      }
      escaped = char === "\\" && !escaped;
      cursor += 1;
      continue;
    }

    if (char === openChar) {
      depth += 1;
    } else if (char === closeChar) {
      depth -= 1;
      if (depth === 0) {
        cursor += 1;
        break;
      }
    }
    cursor += 1;
  }

  const value = text.slice(start, cursor).trim();
  while (cursor < text.length && /\s/.test(text[cursor])) {
    cursor += 1;
  }
  if (text[cursor] === ",") {
    cursor += 1;
  }
  return { value, nextCursor: cursor };
}

function splitTopLevelAuthors(authorField) {
  const authors = [];
  let current = "";
  let depth = 0;
  let inQuote = false;

  for (let i = 0; i < authorField.length; i += 1) {
    const char = authorField[i];
    const nextFive = authorField.slice(i, i + 5).toLowerCase();

    if (char === '"' && authorField[i - 1] !== "\\") {
      inQuote = !inQuote;
    }
    if (!inQuote) {
      if (char === "{") {
        depth += 1;
      } else if (char === "}" && depth > 0) {
        depth -= 1;
      }
    }

    if (depth === 0 && !inQuote && nextFive === " and ") {
      if (current.trim()) {
        authors.push(current.trim());
      }
      current = "";
      i += 4;
      continue;
    }

    current += char;
  }

  if (current.trim()) {
    authors.push(current.trim());
  }

  return authors;
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

  const unwrapCommand = /\\[A-Za-z]+\*?\s*\{([^{}]*)\}/g;
  let previous = "";
  while (previous !== output) {
    previous = output;
    output = output.replace(unwrapCommand, "$1");
  }

  const replacements = [
    [/\\&/g, "&"],
    [/\\%/g, "%"],
    [/\\_/g, "_"],
    [/\\~/g, " "],
    [/\\i/g, "i"],
    [/\\'{?c}?/g, "c"],
    [/\\'{?C}?/g, "C"],
    [/\\'{?o}?/g, "o"],
    [/\\'{?O}?/g, "O"],
    [/\\'{?u}?/g, "u"],
    [/\\'{?U}?/g, "U"],
    [/\\'{?s}?/g, "s"],
    [/\\'{?S}?/g, "S"],
    [/\\'{?g}?/g, "g"],
    [/\\'{?G}?/g, "G"],
    [/\\\"{?o}?/g, "ö"],
    [/\\\"{?u}?/g, "ü"],
    [/\\\"{?a}?/g, "ä"],
    [/\\\"{?O}?/g, "Ö"],
    [/\\\"{?U}?/g, "Ü"],
    [/\\c\{?c\}?/g, "ç"],
    [/\\c\{?C\}?/g, "Ç"],
    [/\\u\{?g\}?/g, "ğ"],
    [/\\u\{?G\}?/g, "Ğ"],
    [/\\s\{?s\}?/g, "ş"],
    [/\\S\{?S\}?/g, "Ş"],
    [/\\'{?i}?/g, "i"],
    [/\\'{?a}?/g, "a"],
    [/\\'{?e}?/g, "e"],
    [/\\`{?a}?/g, "a"],
    [/\\`{?e}?/g, "e"],
    [/\{\{+/g, "{"],
    [/\}\}+/g, "}"]
  ];
  replacements.forEach(([pattern, value]) => {
    output = output.replace(pattern, value);
  });

  output = output.replace(/[{}]/g, "");
  output = output.replace(/\\[A-Za-z]+/g, "");
  output = output.replace(/\\./g, "");
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
