/* ============================================================
   Build Things People Pay For — app.js
   Loads chapters from /content, renders markdown, hash-routed.
   ============================================================ */

// CONFIG — edit these if you fork/rename the repo
const GITHUB_USER = "gummihurdal";
const GITHUB_REPO = "katherina-guide";
const GITHUB_BRANCH = "main";

let manifest = null;
let currentIndex = 0;

// ---------- Markdown setup ----------
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try { return hljs.highlight(code, { language: lang }).value; } catch (e) {}
    }
    return hljs.highlightAuto(code).value;
  },
  langPrefix: "hljs language-",
  breaks: false,
  gfm: true,
});

// ---------- Boot ----------
(async function init() {
  // GitHub links
  const repoUrl = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}`;
  document.getElementById("repo-link").href = repoUrl;

  try {
    const res = await fetch("content/manifest.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed to load manifest (${res.status})`);
    manifest = await res.json();
  } catch (err) {
    document.getElementById("content").innerHTML =
      `<div class="loading">Couldn't load the guide manifest. Did you push <code>content/manifest.json</code>?</div>`;
    console.error(err);
    return;
  }

  renderChapterNav();
  updateHeroMeta();

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();

  // Mobile TOC toggle
  const sidebar = document.querySelector(".sidebar");
  const tocBtn = document.getElementById("mobile-toc-btn");
  tocBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    tocBtn.classList.toggle("open");
  });

  // Close sidebar on chapter click (mobile)
  document.getElementById("chapter-nav").addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 900) {
      sidebar.classList.remove("open");
      tocBtn.classList.remove("open");
    }
  });

  // Scroll progress bar
  const bar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = Math.min(100, Math.max(0, scrolled)) + "%";
  }, { passive: true });
})();

// ---------- Routing ----------
function routeFromHash() {
  const slug = (location.hash || "").replace(/^#\/?/, "");
  let idx = manifest.chapters.findIndex((c) => c.slug === slug);
  if (idx < 0) idx = 0;
  loadChapter(idx);
}

// ---------- Nav rendering ----------
function renderChapterNav() {
  const nav = document.getElementById("chapter-nav");
  nav.innerHTML = manifest.chapters
    .map((c, i) => `
      <a href="#${c.slug}" data-idx="${i}">
        <span class="num">${String(i).padStart(2, "0")}</span>
        <span>${escapeHtml(c.title)}</span>
      </a>
    `)
    .join("");
}

// ---------- Hero meta ----------
function updateHeroMeta() {
  document.getElementById("chapter-count").textContent =
    `${manifest.chapters.length} chapters`;
  if (manifest.lastUpdated) {
    document.getElementById("last-updated").textContent =
      `Last updated ${formatDate(manifest.lastUpdated)}`;
  } else {
    document.getElementById("last-updated").textContent = "Living document";
  }
}

// ---------- Chapter loading ----------
async function loadChapter(idx) {
  currentIndex = idx;
  const chapter = manifest.chapters[idx];
  const contentEl = document.getElementById("content");

  // Highlight active nav item
  document.querySelectorAll("#chapter-nav a").forEach((a, i) => {
    a.classList.toggle("active", i === idx);
  });

  contentEl.innerHTML = `<div class="loading">Loading "${escapeHtml(chapter.title)}"…</div>`;

  try {
    const res = await fetch(`content/${chapter.file}`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Couldn't fetch ${chapter.file}`);
    const md = await res.text();
    contentEl.innerHTML = marked.parse(md);

    // Apply syntax highlighting to any pre-rendered code blocks
    contentEl.querySelectorAll("pre code").forEach((block) => {
      try { hljs.highlightElement(block); } catch (e) {}
    });

    // Anchor links on headings
    contentEl.querySelectorAll("h2, h3").forEach((h) => {
      const id = slugify(h.textContent);
      h.id = id;
    });
  } catch (err) {
    contentEl.innerHTML =
      `<div class="loading">Couldn't load this chapter. Maybe <code>${chapter.file}</code> isn't in the repo yet?</div>`;
    console.error(err);
  }

  updatePageNav(idx);
  updateEditLink(chapter);
  window.scrollTo({ top: document.getElementById("reader").offsetTop - 20, behavior: "smooth" });
  document.title = `${chapter.title} · Katherina's Guide`;
}

// ---------- Prev / next ----------
function updatePageNav(idx) {
  const prevLink = document.getElementById("prev-link");
  const nextLink = document.getElementById("next-link");

  if (idx > 0) {
    const prev = manifest.chapters[idx - 1];
    prevLink.href = `#${prev.slug}`;
    prevLink.classList.remove("disabled");
    document.getElementById("prev-title").textContent = prev.title;
  } else {
    prevLink.classList.add("disabled");
    prevLink.href = "#";
    document.getElementById("prev-title").textContent = "—";
  }

  if (idx < manifest.chapters.length - 1) {
    const next = manifest.chapters[idx + 1];
    nextLink.href = `#${next.slug}`;
    nextLink.classList.remove("disabled");
    document.getElementById("next-title").textContent = next.title;
  } else {
    nextLink.classList.add("disabled");
    nextLink.href = "#";
    document.getElementById("next-title").textContent = "The end ✦";
  }
}

// ---------- Edit on GitHub link ----------
function updateEditLink(chapter) {
  const url = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/edit/${GITHUB_BRANCH}/content/${chapter.file}`;
  document.getElementById("github-edit").href = url;
}

// ---------- Helpers ----------
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[m]));
}

function slugify(str) {
  return String(str).toLowerCase().trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch (e) { return iso; }
}
