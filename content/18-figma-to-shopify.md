# Figma-to-Shopify

The single highest-paying skill in the Shopify freelance market. A designer hands you a Figma file. You hand back a working Shopify theme that matches it pixel-for-pixel and is editable by the merchant.

These projects pay **€4,000–€12,000** for 3–6 weeks of work. Christa does many of them per year. Once you can do this reliably, your income ceiling lifts dramatically.

## Why merchants pay this much

Imagine you're the founder of a D2C brand. You hired a designer who delivered a beautiful Figma file. Now you need:

- That Figma file built as a real Shopify store
- It has to look identical on desktop, tablet, and phone
- All editable areas need to work in the Shopify theme editor (so the founder can update copy without calling you)
- The result must be *fast* — load in under 2 seconds
- It must integrate with their existing tools (klaviyo for email, judge.me for reviews, etc.)
- Final handover with documentation

A good Shopify dev does this in 3–6 weeks. A great agency does it in 4 weeks for €25,000. A freelancer with taste and speed does it in 4 weeks for €8,000 and the brand is delighted. *That's the sweet spot you're aiming for.*

## The workflow, week by week

### Week 1 — Understanding

Before you write a single line of Liquid, two things:

**1. Designer walkthrough call (60–90 minutes).** Open the Figma file together. For each section, ask:
- Is this static (every page) or per-page editable?
- What text/images need to be merchant-editable?
- How does this respond on mobile?
- Where does the data come from — a product, a collection, manually entered?

Take detailed notes. This call prevents 80% of later rework.

**2. Section map (in a Google Doc or Notion).** Go through the Figma file and list every section. For each, decide:

| Figma section | Shopify approach | Editable settings |
|---|---|---|
| Hero with video background | New custom section | Video, headline, button label |
| Product strip | Built-in "Featured collection" section | Collection, count |
| Founder quote | New custom section | Quote text, author, image, bg colour |
| FAQ | Built-in "Collapsible content" section | Items list |
| Brand story | Built-in "Image with text" section | Image, headline, body, button |

This document is your contract with yourself. Stick to it.

### Week 2 — Setup and base theme

Don't build from scratch. Build on a base theme. Three good options:

- **Dawn (free, by Shopify)** — clean, modern, fast. Good for minimal/editorial brands.
- **Impulse (paid, €350)** — fashion/lifestyle. Has lookbooks, video heroes, mega menus built in.
- **Sense (free)** — wellness/beauty. Soft, warm defaults.

Pick whichever is closest to the Figma design. *Starting closer saves days of work.*

Set up the project:

```bash
shopify theme pull --store=client-store.myshopify.com
git init && git commit -m "First commit — Dawn baseline"
shopify theme dev
```

You're now ready to build.

### Week 3 — Sections, mobile-first

Build each section in the order they appear on the Figma homepage. **Always start with mobile.** The Figma file has both desktop and mobile views — work from the mobile design and scale up.

For each section:

1. Copy a similar existing section from your base theme.
2. Rename it.
3. Rip out content; replace with the Figma structure.
4. Set up schema for the editable fields.
5. Style it to match Figma (mobile first).
6. Add desktop breakpoints to expand the layout.
7. Test in the theme editor — add/remove settings to verify it's editable.
8. Commit to git.

**Repeat for every section.** Aim for one section per half-day. A typical D2C homepage has 6–10 sections.

### Week 4 — Product page, collection page, polish

The homepage is the most fun. The real money is in the product page (where conversions happen) and the collection page (where buyers browse).

**Product page priorities:**
- Image gallery (often with video support)
- Variant selector (size, colour) that updates the image and price
- Clear "Add to cart" button — never below the fold on mobile
- Trust signals (shipping info, reviews, returns policy)
- Description, ingredients, dimensions, whatever the merchant sells
- Cross-sells / "you may also like"

**Collection page priorities:**
- Filtering (by size, colour, price)
- Sorting (by featured, price, newest)
- Product cards with clean photography
- Pagination that doesn't break SEO

These two pages account for ~80% of merchant revenue. Get them right.

### Week 5 — Testing and tuning

Now the boring-but-critical work:

- **Lighthouse audit** — performance, accessibility, SEO, best practices. Aim above 90 on all four for mobile.
- **Real device testing** — open the store on your actual phone, a friend's iPhone, an Android. Click everything.
- **Browser testing** — Chrome, Safari, Firefox. Edge if you have to.
- **Slow-network testing** — Chrome DevTools → Network → "Slow 3G". The site should still be usable.
- **Edge cases** — empty cart, sold-out product, no images, weird characters in product names.

If you skip this week, the client emails you with bugs forever. Don't skip.

### Week 6 — Handover

Three deliverables that turn a one-time project into a long-term relationship:

**1. A Loom video walkthrough.** Open the theme editor, screen record, narrate. Show how to:
- Edit the hero
- Add a new product
- Change the brand colour
- Rearrange homepage sections
- Add a new blog post

Most clients have never been shown this. Doing it makes you unforgettable.

**2. A short README or Notion page.** Lists where the theme lives in git, what every custom section is for, any quirks ("the testimonial section uses metafields — set them on each product").

**3. A 30-day support window.** *"For the next 30 days I'll fix any bugs found, free. After that I'm available for ongoing support at €X/hour or a retainer at €Y/month."* Most clients convert to a retainer. **That's how you turn a €8,000 build into €40,000 of revenue over two years.**

## Pricing this work

Don't quote hourly. Quote fixed-fee, with clear scope.

A reasonable D2C build, by complexity:

| Project type | Realistic price |
|---|---|
| Simple migration of a small store, light styling tweaks | €3,000–€5,000 |
| Standard D2C build, custom homepage + product page, base theme | €5,000–€8,000 |
| Premium build with custom animations, lookbooks, complex variants | €8,000–€14,000 |
| Replatforming from WooCommerce/Magento with content migration | €10,000–€20,000+ |

A first project where you're learning? Bid €3,500 with the client knowing it's your first. Bid €5,500 once you've shipped two. Bid €8,000+ once you have a portfolio.

## A first project plan

Once you've completed chapter 17's two-week plan:

- Find one D2C brand you genuinely love whose site is mediocre
- Open their site in Figma's plugin that imports a website
- Spend a weekend rebuilding ONE page of their site (as a portfolio piece, not for them)
- Make a Loom showing your version side-by-side with theirs
- Email the founder: *"I rebuilt your product page as a portfolio piece — here's the Loom. If you'd like the actual files, no charge."*

Half the time you get ghosted. The other half you have a conversation. One in ten times that conversation becomes paid work. That's the funnel.

## What the next chapter covers

Webflow — the other platform Christa works with — plus CRO, which is the highest-leverage Shopify skill of all. By the time you finish chapter 19, you can offer everything Christa offers.
