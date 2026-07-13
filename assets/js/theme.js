// Theme toggle: "tech" (dark, annotation style) <-> "classic" (light, plain blog)
// The current theme is applied to <html data-theme="..."> by an inline script
// in each page's <head> (to avoid a flash of wrong theme). This file wires up
// the button and persists the choice.

(function () {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function label(theme) {
    // button shows what you'd switch TO
    return theme === "tech" ? "☀ classic" : "◆ tech";
  }

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) { /* private mode */ }
    btn.textContent = label(theme);
  }

  btn.textContent = label(document.documentElement.dataset.theme || "tech");

  btn.addEventListener("click", function () {
    const current = document.documentElement.dataset.theme || "tech";
    apply(current === "tech" ? "classic" : "tech");
  });
})();
