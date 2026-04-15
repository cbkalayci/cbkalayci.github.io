# cbkalayci.github.io

Static GitHub Pages site for `cbkalayci.github.io`.

## Structure

- `index.html`: home page
- `cv/index.html`: CV overview page (shared section hub)
- `research/index.html`: research and publications page
- `publications/index.html`: complete publication list
- `teaching/index.html`: teaching and supervision page
- `projects/index.html`: funded research projects page
- `experience/index.html`: academic and professional experience page
- `service/index.html`: service, editorial activity, and awards page
- `data/site-data.json`: single source for navigation and sidebar links
- `data/papers.bib`: publication source used for generated publication blocks
- `scripts/build-site.mjs`: syncs shared nav/sidebar and generates publications
- `scripts/check-links.mjs`: local link checker (`href` + `src`), with optional external URL checks
- `.github/workflows/site-checks.yml`: automated HTML/link/build checks
- `styles.css`: shared minimalist layout and typography
- `script.js`: footer year, key-based TR/EN toggle, and publication filters
- `tests/smoke.spec.js`: Playwright smoke tests (language toggle, filters, shared sidebar)
- `assets/can-b-kalayci-photo.png`: portrait copied from the uploaded Overleaf source

## Generation

```bash
cd /Users/cbkalayci/Library/CloudStorage/Dropbox/myResearch/myCV/myWebSite/cbkalayci.github.io
node scripts/build-site.mjs
```

To verify generated files are in sync:

```bash
node scripts/build-site.mjs --check
node scripts/check-links.mjs
npx playwright test
```

Optional external URL health checks:

```bash
node scripts/check-links.mjs --check-external
```

Run the complete local check suite:

```bash
npm install
npm run check:all
```

## Local preview

```bash
cd /Users/cbkalayci/Library/CloudStorage/Dropbox/myResearch/myCV/myWebSite/cbkalayci.github.io
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Publishing to GitHub Pages

For a user site, the repository name must be exactly `cbkalayci.github.io`.

```bash
cd /Users/cbkalayci/Library/CloudStorage/Dropbox/myResearch/myCV/myWebSite/cbkalayci.github.io
git add .
git commit -m "Update site"
git push -u origin main
```

Once pushed, GitHub Pages serves the site from the repository root automatically for a user site.
