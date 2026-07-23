# aryanshar.github.io

Personal site — plain HTML/CSS/JS, no build step, no framework. Push it and it's live.

## Deploy

1. Copy all of these files into the root of your `aryanshar.github.io` repository.
2. Commit and push to `main`.
3. Done — GitHub Pages serves it at https://aryanshar.github.io within a minute or two.

## Structure

```
index.html            home — hero, recent writing, featured projects
writing.html          all technical articles
projects.html         GitHub projects (fetched live from the GitHub API)
likes.html            anything you like — books, tools, music, misc
posts/
  hello-world.html    example article (also your template)
assets/
  css/style.css       all styling (light + dark mode automatic)
  js/posts.js         ← the ONE file you edit to register posts/projects
  js/main.js          rendering logic (rarely needs touching)
```

## How to publish a new article

Posts are **markdown files**. Two steps:

1. Copy `posts/_TEMPLATE.md` to `posts/your-slug.md` and write your post.
   The front-matter block at the top holds all the metadata:

   ```
   ---
   title: Scaling Ray clusters without burning GPU budget
   date: 2026-07-25
   category: mlops
   tags: ray, eks, cost
   summary: One or two sentences shown in the listing.
   ---

   Your markdown starts here.
   ```

2. Add the slug to `POST_SLUGS` in `assets/js/posts.js`:

   ```js
   const POST_SLUGS = ["your-slug", "hello-world"];
   ```

That's it. Posts sort by date automatically (newest first) and appear on the
home page and writing page. Each is served by `post.html?p=your-slug`.

Standard markdown works: headings, **bold**, *italic*, `code`, fenced code
blocks, lists, tables, blockquotes, images, and links.

## How to edit the About page

Edit `content/about.md` — plain markdown, no HTML. It renders at `about.html`.
The short bio on the home page hero is separate; that one lives in
`index.html` in the `<p class="bio">` tag.

## How to feature a project

Add the repo name to `FEATURED_REPOS` in `assets/js/posts.js`. Everything else
on the projects page loads live from the GitHub API (forks hidden, sorted by
stars). If the API is rate-limited, the page shows a graceful fallback link.

## Things marked EDIT

Search the files for `EDIT` — there are three spots:
- your bio on `index.html`
- your LinkedIn URL and email on `index.html`
- the example content on `likes.html`

## Notes

- Your portrait is pulled from `https://github.com/aryanshar.png` (your GitHub
  avatar). Swap the `src` in `index.html` for a local image if you prefer.
- Dark mode follows the visitor's system preference automatically.
- Fonts load from Google Fonts (Space Grotesk / Newsreader / IBM Plex Mono).

## Using your LinkedIn photo

LinkedIn image links expire, so don't hotlink. Instead:
1. On LinkedIn, open your profile → click your photo → save the image.
2. Rename it `profile.jpg` and place it at `assets/img/profile.jpg`.
3. Push. If the file is missing, the site automatically falls back to your GitHub avatar.

## CV

Your CV lives at `assets/cv.pdf` and is linked from the nav on every page and
the hero links row. To update it, just replace that file with a new PDF of the
same name — no code changes needed.

## Theme toggle

The site has two designs, switched by the button in the header:
- **tech** (default) — dark, annotation/detection-box identity
- **classic** — light, plain-blog style inspired by sakshamsharma.com

The visitor's choice is saved in their browser (localStorage). To change the
default for first-time visitors, edit the fallback value `"tech"` in the small
inline script at the top of each HTML file and in `assets/js/theme.js`.

## Local preview

Because posts are fetched at runtime, opening `index.html` directly with
`file://` won't load them. Run a local server instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

GitHub Pages serves over HTTP, so this only affects local testing.
