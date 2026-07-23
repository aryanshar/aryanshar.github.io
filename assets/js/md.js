// Markdown support: fetch .md files, parse front-matter, render with marked.
// Front-matter format (must be the very first thing in the file):
//
//   ---
//   title: My post title
//   date: 2026-07-25
//   category: mlops
//   tags: ray, eks, cost
//   summary: One or two sentences shown in the listing.
//   ---
//
// Everything after the closing --- is normal markdown.

function parseFrontMatter(raw) {
  const text = raw.replace(/^\uFEFF/, "").trimStart();
  const meta = {};
  if (!text.startsWith("---")) return { meta, body: text };

  const end = text.indexOf("\n---", 3);
  if (end === -1) return { meta, body: text };

  const head = text.slice(3, end).trim();
  const body = text.slice(end + 4).replace(/^\r?\n/, "");

  head.split("\n").forEach(line => {
    const i = line.indexOf(":");
    if (i === -1) return;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    if (key === "tags") {
      meta.tags = val ? val.split(",").map(t => t.trim()).filter(Boolean) : [];
    } else {
      meta[key] = val;
    }
  });

  return { meta, body };
}

async function loadMarkdown(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} fetching ${url}`);
  return parseFrontMatter(await res.text());
}

function renderMarkdown(body) {
  if (typeof marked === "undefined") {
    return `<p>Markdown renderer failed to load.</p>`;
  }
  marked.setOptions({ headerIds: true, mangle: false });
  return marked.parse(body);
}

// Loads front-matter for every slug, newest first. Used by the listings.
async function loadAllPostMeta(base = "") {
  const results = await Promise.all(
    POST_SLUGS.map(async slug => {
      try {
        const { meta } = await loadMarkdown(`${base}posts/${slug}.md`);
        return { slug, ...meta, tags: meta.tags || [] };
      } catch (e) {
        console.warn(`Skipping ${slug}:`, e.message);
        return null;
      }
    })
  );
  return results
    .filter(Boolean)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
