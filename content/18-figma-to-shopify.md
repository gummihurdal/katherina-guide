# Woche 5 — Figma to Shopify, on a real brand

This is the week the Lehre starts paying. By Friday you'll have a working Shopify rebuild of a real D2C brand's homepage that you can put in a portfolio and send to founders.

The skill is the same one Christa sells for €5,000–€12,000 per project. You're going to practice it on a real (but unpaid) target. **The deliverable is your first real portfolio piece.**

Plan: **8–10 hours**, ideally over 5 evenings.

---

## Übung 1 — Pick your target brand (20 min)

**Deliverable:** a written brief for one real D2C brand you'll rebuild.

This is the most important decision of the week. Pick wrong and the next 8 hours are wasted.

**Good targets:**
- A real D2C brand whose product you'd actually buy
- Their current site is mediocre (you want clear room to improve)
- They're small enough that your work would matter (under 50 employees)
- DACH-based ideally, so you understand the audience
- They run on Shopify already (right-click the page → View source → search for `shopify` to confirm)

**Bad targets:**
- Huge brands (Apple, Lululemon) — too polished, you can't improve
- Christa's actual clients — don't copy your future colleague
- Sites that aren't on Shopify (e.g. WooCommerce, Magento) — different ecosystem

Write a one-page brief:

```
Brand: [name]
URL: [current site]
Product: [what they sell]
Audience: [who buys it, age, vibe]
Strengths of current site: [2-3 things they do well]
Weaknesses of current site: [4-5 things you'd improve]
Aesthetic words: [3 adjectives describing your rebuild's feel]
```

This brief is the contract with yourself. Stick to it.

✅ Stop when the brief fits on one page and feels real, not vague.

---

## Übung 2 — Section map (30 min)

**Deliverable:** a numbered list of every section on the brand's current homepage.

Open the brand's site. Walk through it like a developer:

1. Take a full-page screenshot (Chrome DevTools → Run command → "Capture full size screenshot" — or the GoFullPage extension)
2. Open the screenshot in Figma, Excalidraw, or even a Google Doc
3. **Draw a box around every section** and number it
4. For each section, label:
   - The section type (hero, product strip, image with text, FAQ, etc.)
   - The editable parts (where does the merchant change copy/image?)
   - Whether you'd keep it, redesign it, or remove it

A typical D2C homepage has 6–12 sections. Aim to write **one sentence of intent for each** in your rebuild:

```
1. HERO → keep, but use video instead of image, shorten headline to 5 words
2. LOGO ROW → keep, less prominent, smaller logos
3. BENEFITS (3-col) → keep, swap icons for hand-drawn versions
4. FEATURED PRODUCTS → redesign, show 4 instead of 8, bigger images
5. BRAND STORY → keep
6. TESTIMONIALS → redesign, photo + quote instead of just text
7. INSTAGRAM FEED → remove, replace with editorial photo grid
8. NEWSLETTER → keep
9. FOOTER → simplify
```

This document is your build plan for the week.

✅ Stop when you have a numbered section map with intent notes.

---

## Übung 3 — Set up the project (20 min)

**Deliverable:** a fresh local Shopify project for this rebuild.

1. Spin up a **second Shopify development store** for this rebuild — your Lehrling-Übung store is for general practice, this new one is for the portfolio piece.
   - **Settings → Stores → Add store → Development store** (you can have multiple dev stores)
   - Name it after the target brand, e.g. `kornfeld-rebuild`
2. Pick a base theme that's *closest* to the brand's aesthetic. Don't start from a blank theme — start from one that's 60% there:
   - **Dawn** (free) for minimal/editorial brands — fastest baseline
   - **Sense** (free) for soft/wellness brands
   - **Studio** (free, by Shopify) for portfolio-heavy brands
   - **Impulse** ($350 — skip for now) for fashion/lifestyle later in your career
3. Pull the theme locally:

   ```bash
   mkdir ~/shopify-projects/[brand]-rebuild && cd ~/shopify-projects/[brand]-rebuild
   shopify theme pull --store=[brand]-rebuild.myshopify.com
   ```

4. `git init`, first commit, push to a new private GitHub repo named `[brand]-rebuild`.

5. Start `shopify theme dev`. Leave the terminal running all week.

✅ Stop when you have local code, a dev preview URL, and a git repo set up.

---

## Übung 4 — Add 6 real products (45 min)

**Deliverable:** 6 products on your rebuild store, modeled on the real brand's catalog.

Go to the real brand's site. Pick 6 actual products from their catalog. For each one, in your admin:

- Use **their real product photo** (right-click → Save image, only for portfolio practice — don't republish)
- **Write your own copy** for the description (rewriting their copy is the practice)
- Set realistic prices matching the brand's range
- Set up proper variants if the original has them
- Use clean SKU patterns and category tags
- Activate, place in 2 collections (Bestsellers + Neuheiten)

When done, your rebuild store has a real product catalog that mirrors the target brand. The rest of the week's work has a real backbone.

✅ Stop when 6 products are live, all with images and proper variants.

---

## Übung 5 — The first section: rebuild the hero (60 min)

**Deliverable:** a hero section in your rebuild that visually matches your section map's intent.

Time to translate Figma intent → Shopify reality. Start with the hero.

1. Open the target brand's hero in one tab. Open your dev preview in another.
2. Identify which existing section in your base theme is closest. Edit it, **don't build from scratch.**
3. Make changes one at a time:
   - Match the typography (use your closest Google Fonts pair)
   - Match the colour
   - Match the layout
   - Match the imagery (you can use the real brand's photo for portfolio practice)
   - Match the button style
4. View on mobile. Adjust until it looks right on a phone too.
5. **Take screenshots** of yours vs the original side by side.

You won't match it pixel-perfectly. You'll match the *feel*. That's the skill — capturing the intent, not photocopying the pixels.

Commit:

```bash
git add . && git commit -m "Hero: matched target brand layout and typography"
```

✅ Stop when your hero feels visibly closer to the target brand than the base theme did.

---

## Übung 6 — Build the remaining sections (3–4 hours, split over evenings)

**Deliverable:** every section on your map, built and styled.

Work down your section map from Übung 2. For each:

1. Decide: existing section or custom-built?
2. If existing: edit settings + theme styles
3. If custom: create the Liquid file (reuse from your library where possible — that's why you built it!)
4. Style to match the target brand's intent
5. Mobile-test
6. Commit with a clear message

**Pace:** one section per 25–40 minutes. Don't perfect each one — pass through them all, then polish in a second pass.

This is the actual work of a Shopify build. Most people imagine it as one big creative act; really it's 8 small focused acts in a row.

✅ Stop when every section on your map has been built at least once.

---

## Übung 7 — Mobile-first polish pass (60 min)

**Deliverable:** the whole homepage works perfectly on a 375px-wide screen.

Open Chrome DevTools → device toolbar → set to **iPhone SE (375×667)**. Walk through your homepage. For every section, check:

- Headlines wrap nicely (don't break mid-word badly)
- Buttons are at least 44px tall (the iOS touch-target standard)
- Text is at least 16px (smaller is illegible on phones)
- Images don't overflow horizontally
- The "Add to cart" button on any product page is visible without scrolling
- Padding feels balanced — not cramped, not absurdly wide
- No text touches the screen edge

Fix each issue with CSS tweaks. Test again. Repeat.

About 70% of D2C traffic is mobile. **A site that's bad on mobile is bad, full stop.**

✅ Stop when the homepage works on iPhone SE without any horizontal scroll, cramped text, or below-fold CTAs.

---

## Übung 8 — Performance audit (45 min)

**Deliverable:** Lighthouse scores above 80 on all four metrics.

In Chrome DevTools, open the **Lighthouse** tab. Run an audit on your dev preview URL in mobile mode.

You'll see 4 scores: Performance, Accessibility, Best Practices, SEO. **Aim above 80 on each.** Christa's clients expect 90+, but 80 is the threshold to call it portfolio-ready.

Common fixes:

- **Performance** → compress images (Squoosh.app, free), remove unused JS/CSS, lazy-load below-fold images (`loading="lazy"`)
- **Accessibility** → add `alt` text to every image, ensure colour contrast is sufficient (DevTools tells you when not)
- **Best Practices** → fix any console errors
- **SEO** → meta description, page title, structured data

Re-run Lighthouse after each fix. Iterate until scores are green.

```bash
git add . && git commit -m "Performance + a11y pass — Lighthouse 88/95/92/100"
```

✅ Stop when all four Lighthouse scores are above 80.

---

## Übung 9 — Side-by-side reveal (30 min)

**Deliverable:** a comparison image and a Loom video.

This is what makes the portfolio piece sellable.

1. Take a full-page screenshot of the target brand's current site
2. Take a full-page screenshot of your rebuild
3. Put them side by side in Figma (or any image editor). Add a label: *"Original | My rebuild"*
4. Save as `[brand]-rebuild-comparison.png` in your portfolio folder
5. Record a 3-minute Loom:
   - Show the original site
   - Switch to your rebuild
   - Walk through 3 specific improvements you made (e.g. *"the hero now uses video instead of a static image, which increases time-on-page by ~40% for D2C brands"*)
   - End with a single sentence about what you'd build next

This Loom is your portfolio's most important file. It demonstrates that you can:

- Read an existing brand and identify gaps
- Translate intent into Shopify
- Talk like a consultant, not just a developer

✅ Stop when both the comparison image and the Loom video exist in your portfolio folder.

---

## Meisterstück for Woche 5

By the end of this week:

- [ ] A written brief for the target brand
- [ ] A numbered section map with intent notes
- [ ] A local Shopify project, in git, on a dev store
- [ ] 6+ real-looking products on the rebuild store
- [ ] Every section from the map built and committed
- [ ] Mobile-first polish pass completed
- [ ] Lighthouse scores above 80 across the board
- [ ] Side-by-side comparison image
- [ ] 3-minute Loom video

**This is your first real portfolio piece.** Put it in a folder named `portfolio/01-[brand]-rebuild/` and never delete it. In a year you'll laugh at it; that's the goal.

---

## What you can charge after this

Once this portfolio piece exists, you can credibly bid on Shopify work. Pricing for your first 3 paid projects:

- **First paid project:** €2,500–€3,500 (priced for learning, not for profit)
- **After 2 paid projects:** €4,000–€6,000
- **After 5 paid projects:** €6,000–€10,000

How to find that first project: take the Loom from Übung 9, find 5 brands on Shopify whose sites you could improve, and send each one the Loom of *your existing portfolio rebuild* with a note: *"I rebuilt [other brand] as a portfolio piece — here's the result. I'd love to do something similar for your site. Free 15-minute call?"*

You'll get one yes per 10 messages. **That one yes is worth €3,000.** Do this every two weeks.

---

## Lehrling Notiz

This was a brutal week. The work was real. You probably hit walls.

Walls are correct. Real freelance projects have walls every day. The reason Christa charges €8,000 isn't because of the typing — it's because she can navigate the walls without panicking. You just did one round of that. Do five more and the wall-navigation feels normal.

Next (last) week: Webflow and CRO. The other half of what Christa sells.
