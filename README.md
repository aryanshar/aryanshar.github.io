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

1. Copy `posts/hello-world.html` → `posts/my-new-post.html`
2. Edit the title, meta line, and body between the `EDIT` comments.
3. Open `assets/js/posts.js` and add an entry at the **top** of `POSTS`:

```js
{
  title: "My new post",
  slug: "my-new-post",          // must match the filename
  date: "2026-08-01",
  category: "computer-vision",
  tags: ["yolo", "deployment"],
  summary: "One or two sentences for the listing."
}
```

That's it — it appears on the home page and the writing page automatically.

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
