/* ============================================================
   Build Things People Pay For — app.js
   Loads chapters from /content, renders markdown, hash-routed.
   Manifest: { sections: [{ id, title, chapters: [{ slug, title, file }] }] }
   ============================================================ */

const GITHUB_USER = "gummihurdal";
const GITHUB_REPO = "katherina-guide";
const GITHUB_BRANCH = "main";

let manifest = null;
let allChapters = [];
let currentIndex = 0;

if (window.mermaid) {
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    securityLevel: "loose",
    themeVariables: {
      fontFamily: '"Instrument Sans", system-ui, sans-serif',
      fontSize: "15px",
      primaryColor: "#FAF7F2",
      primaryTextColor: "#1A1F2E",
      primaryBorderColor: "#1A1F2E",
      lineColor: "#1A1F2E",
      secondaryColor: "#FFE3E0",
      tertiaryColor: "#F3EEE4",
      mainBkg: "#FAF7F2",
      nodeBorder: "#1A1F2E",
      clusterBkg: "#F3EEE4",
      clusterBorder: "#1A1F2E",
    },
    flowchart: { htmlLabels: true, curve: "basis" },
  });
}

marked.setOptions({
  highlight: (code, lang) => {
    if (lang === "mermaid") return code;
    if (lang && hljs.getLanguage(lang)) {
      try { return hljs.highlight(code, { language: lang }).value; } catch (e) {}
    }
    return hljs.highlightAuto(code).value;
  },
  langPrefix: "hljs language-",
  breaks: false,
  gfm: true,
});

(async function init() {
  document.getElementById("repo-link").href = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}`;

  try {
    const res = await fetch("content/manifest.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed (${res.status})`);
    manifest = await res.json();
  } catch (err) {
    document.getElementById("content").innerHTML =
      `<div class="loading">Couldn't load the manifest.</div>`;
    console.error(err);
    return;
  }

  if (manifest.sections) {
    allChapters = manifest.sections.flatMap(s =>
      s.chapters.map(c => ({ ...c, sectionTitle: s.title, sectionId: s.id }))
    );
  } else {
    allChapters = manifest.chapters || [];
  }

  renderChapterNav();
  updateHeroMeta();

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();

  const sidebar = document.querySelector(".sidebar");
  const tocBtn = document.getElementById("mobile-toc-btn");
  tocBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    tocBtn.classList.toggle("open");
  });
  document.getElementById("chapter-nav").addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && window.innerWidth <= 900) {
      sidebar.classList.remove("open");
      tocBtn.classList.remove("open");
    }
  });

  const bar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = Math.min(100, Math.max(0, scrolled)) + "%";
  }, { passive: true });

  setupKeyboardShortcuts();
})();

function routeFromHash() {
  const slug = (location.hash || "").replace(/^#\/?/, "");
  let idx = allChapters.findIndex((c) => c.slug === slug);
  if (idx < 0) idx = 0;
  loadChapter(idx);
}

function renderChapterNav() {
  const nav = document.getElementById("chapter-nav");
  if (manifest.sections) {
    nav.innerHTML = manifest.sections.map((section) => {
      const showHeader = section.title && section.title.trim() !== "";
      const chapterLinks = section.chapters.map((c, i) => `
        <a href="#${c.slug}" data-slug="${c.slug}">
          <span class="num">${String(i + 1).padStart(2, "0")}</span>
          <span>${escapeHtml(c.title)}</span>
        </a>
      `).join("");
      return `
        <div class="nav-section" data-section-id="${section.id}">
          ${showHeader ? `<div class="nav-section-title">${escapeHtml(section.title)}</div>` : ""}
          ${chapterLinks}
        </div>
      `;
    }).join("");
  } else {
    nav.innerHTML = allChapters.map((c, i) => `
      <a href="#${c.slug}" data-slug="${c.slug}">
        <span class="num">${String(i).padStart(2, "0")}</span>
        <span>${escapeHtml(c.title)}</span>
      </a>
    `).join("");
  }
}

function updateHeroMeta() {
  const sectionCount = manifest.sections ? manifest.sections.length : 1;
  document.getElementById("chapter-count").textContent =
    `${allChapters.length} chapters · ${sectionCount} tracks`;
  document.getElementById("last-updated").textContent =
    manifest.lastUpdated ? `Last updated ${formatDate(manifest.lastUpdated)}` : "Living document";
}

async function loadChapter(idx) {
  currentIndex = idx;
  const chapter = allChapters[idx];
  const contentEl = document.getElementById("content");

  document.querySelectorAll("#chapter-nav a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("data-slug") === chapter.slug);
  });

  // Highlight the current Lehre section in the sidebar
  document.querySelectorAll(".nav-section").forEach((el) => {
    el.classList.toggle("is-current", el.dataset.sectionId === chapter.sectionId);
  });

  // Set active state on sticky track tabs (mobile)
  document.querySelectorAll("#track-tabs .track-tab").forEach((t) => {
    t.classList.toggle("active", t.getAttribute("data-section") === chapter.sectionId);
  });

  // Update mobile Chapters button to show current Lehre context
  const tocBtn = document.getElementById("mobile-toc-btn");
  if (tocBtn) {
    const label = tocBtn.querySelector("span");
    if (label && chapter.sectionTitle) {
      const shortSection = chapter.sectionTitle.split("—")[0].trim();
      label.textContent = `${shortSection} · Chapters`;
    }
  }

  contentEl.innerHTML = `<div class="loading">Loading "${escapeHtml(chapter.title)}"…</div>`;

  try {
    const res = await fetch(`content/${chapter.file}`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Couldn't fetch ${chapter.file}`);
    const md = await res.text();

    let positionInSection = "";
    if (manifest.sections && chapter.sectionId) {
      const section = manifest.sections.find(s => s.id === chapter.sectionId);
      if (section) {
        const posIdx = section.chapters.findIndex(c => c.slug === chapter.slug);
        if (posIdx >= 0) {
          positionInSection = ` <span class="bc-sep">·</span> <span class="bc-pos">Chapter ${posIdx + 1} of ${section.chapters.length}</span>`;
        }
      }
    }

    const breadcrumb = chapter.sectionTitle
      ? `<div class="section-breadcrumb"><span>${escapeHtml(chapter.sectionTitle)}</span>${positionInSection}</div>`
      : "";
    contentEl.innerHTML = breadcrumb + marked.parse(md);

    contentEl.querySelectorAll("pre code").forEach((block) => {
      if (block.classList.contains("language-mermaid")) return;
      try { hljs.highlightElement(block); } catch (e) {}
    });

    if (window.mermaid) {
      const mermaidBlocks = contentEl.querySelectorAll("pre code.language-mermaid");
      for (let i = 0; i < mermaidBlocks.length; i++) {
        const block = mermaidBlocks[i];
        const code = block.textContent;
        const wrapper = document.createElement("div");
        wrapper.className = "mermaid-wrapper";
        block.parentElement.replaceWith(wrapper);
        try {
          const { svg } = await mermaid.render(`mermaid-svg-${Date.now()}-${i}`, code);
          wrapper.innerHTML = svg;
        } catch (err) {
          wrapper.innerHTML = `<pre><code>${escapeHtml(code)}</code></pre>`;
          console.error("Mermaid render failed:", err);
        }
      }
    }

    contentEl.querySelectorAll("h2, h3").forEach((h) => { h.id = slugify(h.textContent); });

    // Build in-page TOC with scroll-spy
    buildInPageTOC();
  } catch (err) {
    contentEl.innerHTML = `<div class="loading">Couldn't load this chapter.</div>`;
    console.error(err);
  }

  updatePageNav(idx);
  updateEditLink(chapter);
  window.scrollTo({ top: document.getElementById("reader").offsetTop - 20, behavior: "smooth" });
  document.title = `${chapter.title} · Katherina's Guide`;
}

// ---------- In-page TOC + scroll-spy ----------
let tocObserver = null;

function buildInPageTOC() {
  const tocEl = document.getElementById("in-page-toc");
  if (!tocEl) return;

  const headings = document.querySelectorAll(".content h2");
  if (headings.length < 2) {
    tocEl.innerHTML = "";
    return;
  }

  const links = Array.from(headings).map(h => {
    const id = h.id || slugify(h.textContent);
    h.id = id;
    return `<a href="#${id}" data-target="${id}">${escapeHtml(h.textContent)}</a>`;
  }).join("");

  tocEl.innerHTML = `<div class="toc-label">On this page</div>${links}`;

  // Smooth scroll within page (don't trigger hash change router)
  tocEl.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("data-target");
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        history.replaceState(null, "", `#${location.hash.replace(/^#/, "").split("#")[0] || allChapters[currentIndex].slug}`);
      }
    });
  });

  // Scroll-spy
  if (tocObserver) tocObserver.disconnect();
  tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll("#in-page-toc a").forEach(a => {
          a.classList.toggle("active", a.getAttribute("data-target") === id);
        });
      }
    });
  }, { rootMargin: "-100px 0px -65% 0px", threshold: 0 });

  headings.forEach(h => tocObserver.observe(h));
}

// ---------- Keyboard navigation ----------
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Don't intercept typing or modifier combos
    if (e.target.matches("input, textarea, select, [contenteditable]")) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === "ArrowLeft") {
      if (currentIndex > 0) {
        location.hash = "#" + allChapters[currentIndex - 1].slug;
        e.preventDefault();
      }
    } else if (e.key === "ArrowRight") {
      if (currentIndex < allChapters.length - 1) {
        location.hash = "#" + allChapters[currentIndex + 1].slug;
        e.preventDefault();
      }
    } else if (["1", "2", "3"].includes(e.key) && manifest.sections) {
      const sectionIdx = parseInt(e.key) - 1;
      const section = manifest.sections[sectionIdx];
      if (section && section.chapters.length) {
        location.hash = "#" + section.chapters[0].slug;
        e.preventDefault();
      }
    }
  });
}

function updatePageNav(idx) {
  const prevLink = document.getElementById("prev-link");
  const nextLink = document.getElementById("next-link");
  if (idx > 0) {
    const prev = allChapters[idx - 1];
    prevLink.href = `#${prev.slug}`;
    prevLink.classList.remove("disabled");
    document.getElementById("prev-title").textContent = prev.title;
  } else {
    prevLink.classList.add("disabled");
    prevLink.href = "#";
    document.getElementById("prev-title").textContent = "—";
  }
  if (idx < allChapters.length - 1) {
    const next = allChapters[idx + 1];
    nextLink.href = `#${next.slug}`;
    nextLink.classList.remove("disabled");
    document.getElementById("next-title").textContent = next.title;
  } else {
    nextLink.classList.add("disabled");
    nextLink.href = "#";
    document.getElementById("next-title").textContent = "The end ✦";
  }
}

function updateEditLink(chapter) {
  document.getElementById("github-edit").href =
    `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/edit/${GITHUB_BRANCH}/content/${chapter.file}`;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[m]));
}
function slugify(str) {
  return String(str).toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}
function formatDate(iso) {
  try { return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  catch (e) { return iso; }
}
