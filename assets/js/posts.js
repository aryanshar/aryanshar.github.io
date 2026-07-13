// ============================================================
// POSTS MANIFEST
// To publish a new article:
//   1. Copy posts/hello-world.html to posts/your-slug.html and edit it
//   2. Add an entry at the TOP of this array
// The home page and the writing page both read from this list.
// ============================================================

const POSTS = [
  {
    title: "Hello, world: why this site exists",
    slug: "hello-world",              // must match posts/<slug>.html
    date: "2026-07-12",
    category: "meta",
    tags: ["blog", "writing"],
    summary: "What I plan to write about here — computer vision, MLOps war stories, and whatever else survives a second draft."
  }
  // , {
  //   title: "Your next post title",
  //   slug: "your-next-post",
  //   date: "2026-08-01",
  //   category: "computer-vision",
  //   tags: ["yolo", "deployment"],
  //   summary: "One or two sentences shown in the list."
  // }
];

// ============================================================
// FEATURED PROJECTS
// Repos listed here are pinned at the top of the projects page
// (and shown on the home page). Everything else on the projects
// page is pulled live from the GitHub API.
// ============================================================

const FEATURED_REPOS = [
  "swarm-detection"
  // , "another-repo-name"
];

const GITHUB_USER = "aryanshar";
