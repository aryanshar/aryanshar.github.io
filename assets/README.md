This `assets/` folder holds static files used by the site.

- Place your `resume.pdf` at `assets/resume.pdf` to enable the Resume link.
- Add images under `images/` (e.g. `images/avatar.png`).

Placeholders available in the site:
- `/assets/resume.pdf` — resume download link (placeholder if missing)
- `/images/avatar.png` — hero avatar

Tips:
- To preview locally run `python3 -m http.server 4000` and open http://127.0.0.1:4000
- The projects section fetches public repos from GitHub user `aryanshar` client-side. Change `GITHUB_USER` in `index.html` if needed.
