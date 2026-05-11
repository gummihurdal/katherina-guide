# Katherina's Guide

A living guide for my daughter on building websites people pay for, with Lovable and Claude.

Live site: *(set me)* `https://guide.katherina.example`

## What this is

A tiny static site that renders markdown chapters from `/content`. Edit a chapter, push, the live site updates in under a minute. No build step. No framework. No npm install.

## How to update content

1. Open any file in `content/` and edit it (markdown).
2. To add a new chapter, drop a new `.md` file in `content/` and add it to `content/manifest.json`.
3. `git commit -am "update chapter"` and `git push`.
4. The deploy service (Cloudflare Pages or GitHub Pages) rebuilds automatically.

That's the whole loop.

## Local preview

The site has zero build step. To preview locally, just serve the folder:

```bash
# Pick one:
python3 -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000 in a browser.

## Deploy in 2 minutes (Cloudflare Pages — recommended)

1. Push this repo to GitHub.
2. Go to **dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git.**
3. Pick this repo.
4. Build settings: **Framework preset = None.** Build command: *(empty)*. Build output directory: `/` (root).
5. Click "Save and Deploy."

Within ~30 seconds you'll have a live URL like `katherina-guide.pages.dev`. Every future `git push` to `main` auto-deploys.

## Deploy in 2 minutes (GitHub Pages — alternative)

1. Push this repo to GitHub.
2. **Settings → Pages → Source: Deploy from a branch.**
3. Branch: `main`. Folder: `/ (root)`. Save.
4. Wait ~1 minute. Site is live at `https://YOUR_USERNAME.github.io/katherina-guide`.

## Custom domain

1. Buy a domain at Cloudflare (~€10/year).
2. **Cloudflare Pages → your project → Custom domains → Set up a custom domain.**
3. Cloudflare handles DNS automatically. Live with HTTPS in ~5 minutes.

## Editing on your phone

The site has an "Edit this chapter on GitHub ↗" link in the sidebar. Tap it, use GitHub's mobile editor, save. Live in a minute. You can update the guide from a beach.

## Customize for your repo

Open `app.js` and change the top constants if you fork or rename:

```js
const GITHUB_USER = "gummihurdal";
const GITHUB_REPO = "katherina-guide";
const GITHUB_BRANCH = "main";
```

## Project structure

```
.
├── index.html        # the page shell
├── style.css         # the design system (warm editorial)
├── app.js            # routing, markdown rendering, nav
├── content/
│   ├── manifest.json # chapter order + titles
│   └── *.md          # one file per chapter
├── _headers          # Cloudflare Pages headers
└── README.md         # this file
```

## License

This is a personal gift. Do anything you want with it.

— Pabbi
