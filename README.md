# cbkalayci.github.io

Static GitHub Pages site for `cbkalayci.github.io`.

## Structure

- `index.html`: minimalist academic homepage
- `styles.css`: layout and typography
- `script.js`: footer year
- `assets/Can_B_Kalayci_CV_2025.pdf`: downloadable CV
- `assets/can-b-kalayci-photo.png`: portrait copied from the uploaded Overleaf source

## Local preview

```bash
cd /Users/cbkalayci/Documents/Playground/cbkalayci.github.io
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Publishing to GitHub Pages

For a user site, the repository name must be exactly `cbkalayci.github.io`.

```bash
cd /Users/cbkalayci/Documents/Playground/cbkalayci.github.io
git init
git add .
git commit -m "Build academic homepage"
git branch -M main
git remote add origin https://github.com/cbkalayci/cbkalayci.github.io.git
git push -u origin main
```

Once pushed, GitHub Pages serves the site from the repository root automatically for a user site.
