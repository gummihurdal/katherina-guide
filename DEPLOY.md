# DEPLOY.md — getting this live

You're about two minutes from a live URL. Follow the steps below in order.

## Step 1 — Create the repo on GitHub

You need an empty repo to push to. From your browser:

1. Go to https://github.com/new
2. Repository name: `katherina-guide` (or whatever you want — just update `app.js` if you change it)
3. Public or Private — both work for Cloudflare Pages. Pick Private if you want.
4. **Do NOT** initialize with README, .gitignore, or license. Leave it empty.
5. Click "Create repository."

GitHub will show you a page with commands. Ignore those — we'll use ours below.

## Step 2 — Push this folder

Open a terminal in the project folder (`katherina-guide/`) and run:

```bash
git init
git add .
git commit -m "First commit — Katherina's guide"
git branch -M main
git remote add origin https://github.com/gummihurdal/katherina-guide.git
git push -u origin main
```

(Change `gummihurdal` if your username is different.)

## Step 3 — Deploy on Cloudflare Pages

The easiest option. Auto-deploys on every push.

1. Go to https://dash.cloudflare.com/
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Authorize Cloudflare to read your GitHub. Pick `katherina-guide`.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
5. Click **Save and Deploy.**

In ~30 seconds you'll see a live URL like `katherina-guide.pages.dev`. That's the site.

Every `git push` to `main` from now on auto-deploys in under a minute.

## Step 4 — Add a custom domain (optional, ~€10/year)

1. Buy a domain at https://dash.cloudflare.com/?to=/:account/domains/register (or use one you already own)
2. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
3. Type the domain. Cloudflare configures DNS automatically.
4. HTTPS is automatic. Live in ~5 minutes.

Suggested names:
- `katherina.dev` (~€12/year)
- `guide.katherina.dev` (subdomain, free if you own the apex)
- `paypabbi.app` (you'll like this one)

## Updating content from here on

### From your laptop

```bash
# Edit any chapter
nano content/02-first-website.md

# Or add a new chapter
./scripts/new-chapter.sh "How to charge in Swiss Francs"

# Push
git add -A
git commit -m "update: clarified the publish step"
git push
```

Cloudflare picks it up. Live in under a minute.

### From your phone

1. Open the live site.
2. Tap "Edit this chapter on GitHub ↗" in the sidebar.
3. GitHub's mobile editor opens that file. Edit. Commit (just type a one-line message and tap Commit).
4. Cloudflare auto-deploys. Live in a minute.

You can update this guide from a beach. That's the whole point.

## Troubleshooting

**The live site shows "Couldn't load the guide manifest."**
→ The `content/manifest.json` file isn't deployed. Check it's committed.

**A new chapter doesn't appear.**
→ You added the `.md` file but forgot to add an entry in `content/manifest.json`. Add it, push.

**Changes don't show up.**
→ Cloudflare caches for 60 seconds. Wait, or hard-refresh (Ctrl+Shift+R / Cmd+Shift+R).

**"Edit on GitHub" link is broken.**
→ Check `app.js`: the `GITHUB_USER`, `GITHUB_REPO`, and `GITHUB_BRANCH` constants must match your repo.
