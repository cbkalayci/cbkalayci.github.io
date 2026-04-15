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
- `styles.css`: shared minimalist layout and typography
- `script.js`: footer year
- `assets/can-b-kalayci-photo.png`: portrait copied from the uploaded Overleaf source

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
