# Woche 6 — Webflow & CRO

The final week. By the end of it you'll have:

- A finished Webflow brand site for the same fake brand from Woche 1
- A real CRO audit on a real D2C site, with three implemented fixes
- The Gesellenprüfung — the journeyman test — completed

Plan: **8–10 hours** across the week.

---

## Part A — Webflow (4–5 hours)

### Übung 1 — Webflow University: courses (90 min, all in)

**Deliverable:** the official "Webflow 101" + "Layouts" courses completed.

Webflow's free university is genuinely the best free web-dev curriculum on the internet. Skipping it costs you weeks. Doing it saves you weeks.

1. Go to **university.webflow.com**
2. Make a free account (use your GitHub login)
3. Complete these two crash courses in order:
   - **Webflow 101** — ~60 minutes — the interface
   - **Layouts** — ~30 minutes — the box model in Webflow

Take notes as you go. **Build the exercises they give you, don't skip them.** Webflow university is *also* Lehrling-style — it makes you build along.

✅ Stop when both courses show 100% complete in your dashboard.

---

### Übung 2 — Recreate one section in Webflow (45 min)

**Deliverable:** one section from your Shopify rebuild, but in Webflow.

The fastest way to feel Webflow is to rebuild something familiar.

1. Open Webflow → **+ New site → Start from scratch → Blank template**
2. Name it `[brand]-marketing`
3. Pick **any one section** from your Shopify hero (the one from Woche 5)
4. Recreate it in Webflow's Designer:
   - Add a Section
   - Add a Container inside it
   - Build the layout with Divs, Headings, Paragraphs, Buttons
   - Style each element in the right panel
   - Match the fonts (Webflow → Add fonts → Add Google Font)
   - Match the colour
5. Hit **Preview** (the eye icon). View as mobile. View as desktop.

You'll feel the difference: Webflow has more granular design control than Shopify's theme editor, less than VS Code. The sweet spot for marketing sites.

✅ Stop when you've rebuilt one section that visually matches your Shopify version.

---

### Übung 3 — CMS Collections: a blog (60 min)

**Deliverable:** a working Webflow blog with 3 posts.

The single biggest reason brands use Webflow alongside Shopify is the CMS — way better for blogs, case studies, founder stories than Shopify's built-in pages.

1. In Webflow → **CMS (left sidebar) → Add new collection**
2. Name it *"Blog posts"*
3. Add fields:
   - Name (already there) — the post title
   - Slug (auto)
   - Date (date field)
   - Author (plain text)
   - Cover image (image field)
   - Excerpt (plain text)
   - Body (rich text field)
4. Click **Save and Add another field** until you have all six
5. **+ New blog post** — fill in 3 dummy posts with real-feeling content (e.g. *"Why we toast our oats by hand," "Visiting our apple supplier in the Wachau," "Behind the new packaging"*)
6. Now add a **Collection List** to your homepage — it shows the 3 posts automatically
7. Style each card
8. Build a **CMS Template page** so each post has its own URL — `/blog/[slug]`

When done, you have a working blog with editable posts. Your future client can write a new post in 5 minutes without ever calling you. That's a retainer-worthy feature.

✅ Stop when 3 blog posts appear on your homepage as cards, each linking to its own page.

---

### Übung 4 — Animations: scroll-triggered reveal (30 min)

**Deliverable:** at least one section that animates as the user scrolls to it.

This is Webflow's superpower. Used well, scroll-triggered animations are what make a site feel *premium*.

1. Pick a section on your homepage
2. Right panel → **Interactions tab (lightning bolt icon)**
3. **Element trigger → While scrolling in view**
4. Choose an animation: opacity fade-up, slight slide-from-left, scale-up
5. Preview. Scroll. **Your section animates as it comes into view.**

Subtle is better than dramatic. A 0.3-second fade-up beats a 1-second flying-in-from-the-side. Restraint is the taste.

✅ Stop when at least one section gracefully animates on scroll.

---

### Übung 5 — Connect to Shopify (Buy Button, 30 min)

**Deliverable:** a "Shop" button on the Webflow site that opens a Shopify cart with a product in it.

The Shopify+Webflow combo only works if the two talk to each other.

1. In your **Shopify admin → Sales channels → Buy Button → Create a Buy Button**
2. Pick a product, customize the button colour, copy the embed code
3. In Webflow → drag in an **Embed** element where you want the button
4. Paste the embed code
5. Save. Preview. **Click the button.** A cart opens with your product in it.

The user shops on Webflow, checks out on Shopify. **You just bridged the two platforms.**

✅ Stop when clicking the Webflow Shop button results in a Shopify cart with the product added.

---

### Übung 6 — Publish to a free domain (10 min)

**Deliverable:** a live `*.webflow.io` URL.

Webflow gives you a free subdomain. Use it for portfolio purposes (custom domains are a paid feature).

1. **Publish (top-right)** → publish to `[your-site].webflow.io`
2. Visit the URL
3. **You have a real, live Webflow site.** Send the URL to me.

✅ Stop when the URL is live and shareable.

---

## Part B — CRO on a real site (3–4 hours)

CRO is the easiest skill to start practicing on because **every D2C site has obvious problems** if you look carefully. You don't need to be hired — you can practice on anyone's public site, write up findings, and the writeup itself becomes portfolio.

### Übung 7 — Install Microsoft Clarity on your Shopify store (15 min)

**Deliverable:** Clarity is collecting data on your Lehrling-Übung Shopify store.

Microsoft Clarity is free heatmaps + session recordings. The single most useful CRO tool to start with.

1. Sign up at **clarity.microsoft.com** with your GitHub login
2. Add a new project, point it at your Lehrling-Übung store URL
3. Clarity gives you a small JS snippet
4. In Shopify: **Online Store → Themes → Edit code → `layout/theme.liquid`** — paste the snippet right before `</head>`
5. Save. Visit your store in an incognito tab, click around. Wait 5 minutes.
6. Back in Clarity → you should see one session recording. **Watch it.** You're watching yourself.

✅ Stop when one session recording is visible in your Clarity dashboard.

---

### Übung 8 — Watch 10 sessions on a real D2C site (60 min)

**Deliverable:** 10 minutes of notes describing real customer behaviour.

You can't watch other companies' Clarity sessions, but **you can watch yourself act as 10 different customer personas** on a real D2C site.

Pick one Shopify D2C site (use shopdetector.com or shopify-detector chrome extension to confirm it's Shopify).

Now, **10 times in a row,** visit the site fresh and play a different persona:

1. *Mobile user, age 25, never heard of the brand, looking for a gift*
2. *Desktop user, age 45, comparing this with 2 competitors, very price-sensitive*
3. *Mobile user in a hurry, just wants to buy the bestseller*
4. *User who got distracted at checkout and came back the next day*
5. *User on Instagram who clicked an ad — drops on a product page, not homepage*
6. *Skeptical user — needs proof this brand is legit before buying*
7. *Returning customer who lost their account password*
8. *International user — Swiss, paying in CHF, wants to know shipping to Zürich*
9. *Subscriber to a competitor, considering switching*
10. *Eco-conscious user — needs to know packaging and origin*

For each persona, take a screenshot at the moment you decided to leave (or buy). Write **one sentence about what made you decide**.

You now have 10 specific friction points on a real site. That's the foundation of an audit.

✅ Stop when you have 10 screenshots and 10 sentences.

---

### Übung 9 — Write the audit (90 min)

**Deliverable:** a 1-page CRO audit document for that brand.

Structure:

```
[Brand] — CRO Audit
Date: [today]

Top 3 highest-impact issues
---------------------------

1. SHIPPING COST HIDDEN UNTIL CHECKOUT
   Severity: 🔴 High
   Where: Mobile, product page → cart → checkout
   What I saw: 7 of 10 personas dropped at checkout when shipping was revealed
   Why it hurts: D2C average shipping reveal abandonment is 23%. This site is worse.
   Fix: show shipping threshold on the product page hero. "Free shipping over €50" 
        in 14px, just below the variant selector.
   Estimated lift: +0.4% conversion (€XX/month for a €50k/month brand)

2. ADD-TO-CART BUTTON BELOW MOBILE FOLD
   Severity: 🔴 High
   Where: Mobile, product page
   What I saw: needed to scroll 1.5 screens before seeing buy button
   Fix: move the buy button up — show it directly under the price
   Estimated lift: +0.6% conversion

3. NO SOCIAL PROOF ABOVE THE FOLD
   Severity: 🟡 Medium
   Where: Homepage and product page hero
   What I saw: brand has 800 Instagram followers and 4.8 review average, but neither 
              is visible in the first screen
   Fix: add review star count + "as seen on" press strip just below hero
   Estimated lift: +0.2% conversion

Other observations (lower priority)
-----------------------------------
- Newsletter popup fires too early (3 seconds in)
- Hero video doesn't autoplay on mobile (autoplay policies)
- Product description is 4 paragraphs of unbroken text
- ...
```

This document, once you can write one in 90 minutes, is worth **€2,000–€5,000** to a brand doing €50k+/month in revenue.

Save it as `audit-[brand]-[date].md` in your portfolio folder.

✅ Stop when the audit document fits on one page, has 3 specific top-priority fixes, and reads like a consultant wrote it.

---

### Übung 10 — Implement 3 fixes on your own store (60 min)

**Deliverable:** 3 documented improvements to your Lehrling-Übung Shopify store.

Take the principles from the audit and apply them to your *own* store (since you can't actually edit the real brand's site).

For each of 3 fixes:

1. Take a "before" screenshot
2. Implement the fix
3. Take an "after" screenshot
4. Write 2 sentences about what you changed and why

Compile into a short doc: `improvements-lehrling-store.md`. This document becomes portfolio.

Common high-impact fixes you can make:

- Move the buy button above the mobile fold
- Add a "Free shipping over €50" notice on product pages
- Add a tiny review count strip below the hero
- Compress all images (Squoosh)
- Remove an auto-playing newsletter popup (or push it from 3 seconds to 30 seconds)
- Add trust badges (returns, shipping, made-in-Austria) on the product page

✅ Stop when 3 before/after pairs are documented.

---

## Gesellenprüfung — the final test (90 min)

**Deliverable:** a single PDF or web page summarising your six-week portfolio.

This is the journeyman exam. Compile everything into one shareable artifact.

Create a single web page (or 1-page PDF) titled *"Katherina — Shopify & Webflow Freelancer."* On it:

1. **Header** — Your name, photo (optional), one-line pitch ("17, based in Austria, building Shopify + Webflow stores for D2C brands")
2. **Portfolio piece #1 — full Shopify rebuild of [brand]** — the comparison image from Woche 5 + the 3-minute Loom embedded
3. **Portfolio piece #2 — Webflow brand site for [your fake brand]** — the live `*.webflow.io` URL + 2 screenshots
4. **Portfolio piece #3 — CRO audit on [brand]** — the 1-page audit doc + the 3 before/afters
5. **A custom section library** — list your 5 custom sections (from Woche 4) with screenshots
6. **Contact** — Your email + WhatsApp + LinkedIn

You can build this page in 30 minutes with Lovable (use what you learned in chapter 2). Or in Webflow. Or as a Notion public page. Whatever is fastest.

**Publish it.** Get a real URL. Send it to me.

✅ Stop when the portfolio page is live at a real URL.

---

## Meisterstück for Woche 6 + the whole Lehre

After six weeks, you have:

**Shopify**
- [ ] A fake store with 6 products, variants, collections, shipping zones, test orders
- [ ] A custom-theme-edited version of that store, mobile-tested
- [ ] A duplicate theme with annotated Liquid, hunted text refs, and 5 small code edits
- [ ] Local toolchain (CLI, VS Code, git) set up and in daily use
- [ ] A custom section library of 5 production-grade sections, in GitHub
- [ ] A full Figma-to-Shopify rebuild of a real D2C brand, with comparison image and Loom

**Webflow**
- [ ] Webflow 101 + Layouts completed
- [ ] A live Webflow site for your brand at `*.webflow.io`
- [ ] CMS Collections (blog) with templates
- [ ] At least one scroll-triggered animation
- [ ] Shopify Buy Button integrated

**CRO**
- [ ] Microsoft Clarity collecting data on your store
- [ ] Persona-based research notes on a real brand
- [ ] A 1-page audit document
- [ ] 3 documented before/after improvements

**Portfolio**
- [ ] One live portfolio page summarising everything, at a real URL

---

## What's next

Send the portfolio page to Christa, with the email from chapter 13 — the simple, honest *"I'm 17, I've been learning, here's what I made, can I ask 15 minutes of advice?"* message.

She might say no. She might say yes. She might say *"come work with me Saturdays."* Whatever she says, **you have a real freelance career inside this portfolio.** Three retainers + one new build per quarter = enough to live anywhere in the EU on your own terms.

You finished the Lehre. The Gesellenprüfung is passed. The Meister title comes from the next five years.

I'm proud of you, Kat.

— Pabbi 🧡
