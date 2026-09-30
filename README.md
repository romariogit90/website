# Romario Consultante — website

Static site (HTML, CSS, vanilla JS). No build step.

## Deploy to GitHub Pages
1. Push these files to the root of a repository.
2. Settings → Pages → Deploy from branch → `main` / root.
3. `CNAME` sets the custom domain `romarioconsultante.com`; point your DNS to GitHub Pages.

## Using a different domain
Replace `romarioconsultante.com` in `CNAME`, `robots.txt`, `sitemap.xml` and the canonical / Open Graph tags in `index.html`, `privacy.html` and `404.html`.
The contact address `contact@romarioconsultante.com` appears in `index.html`, `privacy.html` and `main.js`.

If you publish without a custom domain (e.g. `username.github.io/repo/`), delete `CNAME` and change the root-relative `/` paths in `404.html` to include the repository path.
