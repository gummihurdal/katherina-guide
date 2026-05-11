# When to switch to Claude Code

Lovable is fastest for the first 80% of a project. For the last 20% — fine-tuning, weird bugs, custom logic — you'll want **Claude Code**, which you already have on your laptop.

## The handoff

In Lovable, click **GitHub → Connect** and push your project to a new repo (something like `katherina-habits`). Now on your laptop:

```bash
git clone https://github.com/YOUR_USERNAME/katherina-habits.git
cd katherina-habits
npm install
npm run dev
```

You're now editing the exact same code Lovable made. Open the folder in **VS Code** (or Cursor, if you prefer). Then in the terminal, run:

```bash
claude
```

Start with:

> Read this whole project and tell me how it's structured.

Claude will give you a tour of your own codebase. That's worth a thousand tutorials.

## What Claude Code is great at (and Lovable isn't)

**Big refactors.**

> Rename every reference to "habits" to "goals" across the whole codebase, including database tables.

**Tricky bugs.**

> When I click delete twice fast, the same row gets deleted twice and I get an error. Find and fix the race condition.

**Performance.**

> This page takes 4 seconds to load. Profile it and tell me why.

**Reading documentation.**

> Look at the Stripe webhook docs and add proper signature verification to our webhook handler.

**Writing tests.**

> Write Vitest tests for every function in `src/lib/`.

These are the kinds of jobs that take Lovable many credits and many tries. Claude Code does them in one shot because it can read the whole codebase.

## The two-tool dance

The professional pattern looks like this:

1. **Lovable** scaffolds and designs new features (visual changes, new pages, new database tables)
2. Push to **GitHub**
3. **Claude Code** locally for cleanup, optimization, and the hard 20%
4. Push back to **GitHub** — Lovable picks up your changes automatically
5. Back to **Lovable** for the next visual feature

This combo is faster than either tool alone. The professionals you'll meet online use exactly this loop.

## Three things to ask Claude Code on every project

Run these at least once per project. They will save you hours.

### Project tour

> Read every file in this repo. Then give me a one-paragraph summary of what this project does and a bullet list of every file with one line explaining its purpose.

### Security audit

> Audit this codebase for the most common web security mistakes: XSS, SQL injection, missing auth checks, exposed API keys or secrets, and missing CSRF protection. List anything risky.

### Dependency cleanup

> Look at package.json and tell me which dependencies are unused, outdated, or duplicated. Suggest what to remove.

You don't need to understand the output deeply. Just running these makes your project measurably better.
