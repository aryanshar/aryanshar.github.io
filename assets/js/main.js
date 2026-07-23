// Renders post lists and GitHub project cards.
// Depends on posts.js being loaded first (POSTS, FEATURED_REPOS, GITHUB_USER).

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

// ---------- post lists (markdown-driven) ----------

function postItem(post, base) {
  const li = document.createElement("li");
  const tags = (post.tags || []).join(", ");
  li.innerHTML = `
    <a class="title" href="${base}post.html?p=${encodeURIComponent(post.slug)}">${post.title || post.slug}</a>
    <div class="post-meta">
      <span>${post.date ? fmtDate(post.date) : ""}</span>
      ${post.category ? `<span class="cat">${post.category}</span>` : ""}
      ${tags ? `<span>${tags}</span>` : ""}
    </div>
    ${post.summary ? `<p class="summary">${post.summary}</p>` : ""}`;
  return li;
}

async function renderPosts(targetId, { limit = Infinity, base = "" } = {}) {
  const el = document.getElementById(targetId);
  if (!el) return;
  try {
    const posts = (await loadAllPostMeta(base)).slice(0, limit);
    if (!posts.length) {
      el.innerHTML = `<li><p class="summary">Nothing here yet — first post coming soon.</p></li>`;
      return;
    }
    el.innerHTML = "";
    posts.forEach(p => el.appendChild(postItem(p, base)));
  } catch (e) {
    el.innerHTML = `<li><p class="summary">Couldn't load posts (${e.message}).</p></li>`;
  }
}

// ---------- GitHub repos ----------

function repoCard(repo) {
  const card = document.createElement("div");
  card.className = "repo-card";
  card.innerHTML = `
    <a class="name" href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
    <p>${repo.description ? repo.description : "No description yet."}</p>
    <div class="repo-foot">
      ${repo.language ? `<span class="lang">${repo.language}</span>` : ""}
      <span>★ ${repo.stargazers_count}</span>
      ${repo.forks_count ? `<span>⑂ ${repo.forks_count}</span>` : ""}
    </div>`;
  return card;
}

async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
  );
  if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
  return res.json();
}

async function renderRepos({ featuredId, gridId, noteId, featuredOnly = false } = {}) {
  const featuredEl = featuredId ? document.getElementById(featuredId) : null;
  const gridEl = gridId ? document.getElementById(gridId) : null;
  const noteEl = noteId ? document.getElementById(noteId) : null;
  if (!featuredEl && !gridEl) return;

  try {
    const repos = await fetchRepos();
    const own = repos.filter(r => !r.fork);
    const featured = FEATURED_REPOS
      .map(name => own.find(r => r.name === name))
      .filter(Boolean);

    if (featuredEl) featured.forEach(r => featuredEl.appendChild(repoCard(r)));

    if (gridEl && !featuredOnly) {
      const rest = own
        .filter(r => !FEATURED_REPOS.includes(r.name))
        .sort((a, b) => b.stargazers_count - a.stargazers_count);
      rest.forEach(r => gridEl.appendChild(repoCard(r)));
    }

    if (noteEl) noteEl.textContent = "";
  } catch (err) {
    const msg = `Couldn't load repos from GitHub right now (${err.message}). ` +
      `See them directly at github.com/${GITHUB_USER}.`;
    if (noteEl) noteEl.textContent = msg;
  }
}
