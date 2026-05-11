# Shopify mastery

Shopify is its own world. Different from anything in the first half of this guide. You're not building React apps anymore — you're customizing an existing platform that millions of stores already run on. Different mindset, different tools.

The good news: it's smaller than it looks. Master five concepts and you're commercially useful.

## How Shopify actually works

Every Shopify store has three layers:

1. **Shopify** — handles products, orders, payments, inventory, customers, taxes. You never touch any of this code. Shopify runs it.
2. **A theme** — controls how the store *looks and feels*. This is the part you customize. It's a folder of files written in a templating language called **Liquid** plus HTML, CSS, and JavaScript.
3. **Apps** — third-party add-ons that bolt on extra features (reviews, upsells, subscriptions). The merchant installs these; you mostly leave them alone.

Your job as a Shopify dev is **almost entirely the theme.** That's it.

## The five things to learn (in this order)

### 1. Liquid

Liquid is Shopify's templating language. It's simple — easier than React. The syntax:

```liquid
{% raw %}<h1>{{ product.title }}</h1>
<p>{{ product.price | money }}</p>

{% if product.available %}
  <button>Add to cart</button>
{% else %}
  <span>Sold out</span>
{% endif %}

{% for image in product.images %}
  <img src="{{ image | image_url: width: 800 }}" alt="{{ image.alt }}" />
{% endfor %}{% endraw %}
```

Two kinds of tags:
- `{% raw %}{{ thing }}{% endraw %}` — outputs a value
- `{% raw %}{% if/for/assign %}{% endraw %}` — logic

A weekend on Shopify's free **Liquid tutorial** at shopify.dev gets you from zero to dangerous.

### 2. Theme structure

A theme is just a folder. Open any Shopify theme and you'll see:

```
layout/        ← the page shell (header + footer wrap)
templates/     ← one file per page type: product.json, collection.json, cart.json
sections/      ← reusable blocks the merchant can drag around (hero, featured products, etc)
snippets/      ← small partials you include in sections
assets/        ← CSS, JS, images, fonts
config/        ← settings the merchant can edit in the admin UI
locales/       ← translations (en.default.json, de.json, ...)
```

That's the whole architecture. Open the official **Dawn** theme on GitHub and just *read it*. Two hours of reading Dawn teaches you more than any course.

### 3. Sections (the magic part)

A **section** is a block of UI the merchant can rearrange themselves in the Shopify admin — without touching code. Hero, testimonials, featured product, image+text. They're the reason merchants can edit their own homepages.

A section file looks like this:

```liquid
{% raw %}<section class="hero">
  <h1>{{ section.settings.heading }}</h1>
  <p>{{ section.settings.subheading }}</p>
  <a href="{{ section.settings.button_link }}" class="btn">
    {{ section.settings.button_text }}
  </a>
</section>

{% schema %}
{
  "name": "Hero",
  "settings": [
    { "type": "text", "id": "heading", "label": "Headline", "default": "Hello" },
    { "type": "text", "id": "subheading", "label": "Subheadline" },
    { "type": "url", "id": "button_link", "label": "Button link" },
    { "type": "text", "id": "button_text", "label": "Button text" }
  ],
  "presets": [{ "name": "Hero" }]
}
{% endschema %}{% endraw %}
```

The `schema` block at the bottom defines what the merchant can edit. Build good sections and your client can update their own homepage without calling you. **That's how you keep retainers profitable** — automate yourself out of the boring jobs.

### 4. Figma-to-Shopify (the high-value skill)

A designer hands you a Figma file. You hand back a working Shopify theme that matches it pixel-for-pixel and is editable by the merchant.

The workflow that pros use:

1. **Walk through Figma with the designer** — understand which parts are static, which are editable sections.
2. **Choose a base theme** — Dawn (free, fast), Impulse (paid, premium), or Sense. Never build from scratch unless paid €15,000+.
3. **Identify reusable sections** — hero, product highlight, testimonial, FAQ. Each becomes a section file.
4. **Build sections in isolation** — get each one looking like Figma before assembling.
5. **Wire up the schema** so the merchant can edit copy, colors, images.
6. **Test on mobile relentlessly** — D2C traffic is 70%+ mobile.
7. **Hand over with a Loom video** explaining how to edit each section.

A clean Figma-to-Shopify build is 2–4 weeks of work and pays €4,000–€12,000. Ten of those a year and you have a real freelance career.

### 5. The Shopify CLI (your daily tool)

The terminal command that runs everything:

```bash
npm install -g @shopify/cli @shopify/theme

# Log into the merchant's store
shopify theme dev --store=their-store.myshopify.com

# Pulls the live theme down, opens a local dev server,
# auto-syncs every save to a preview URL.
```

You edit files in VS Code (or Cursor), save, and see the changes in a preview URL within seconds. Same instant-feedback loop as Lovable, but on a real Shopify store.

## Where to actually learn

In order of effectiveness:

1. **shopify.dev/themes** — official docs. Boring but accurate.
2. **The Dawn theme source code** on GitHub. Read it. All of it.
3. **shopify.dev/changelog** — what's new each month. Subscribe.
4. **Liquid Reference** — bookmark it. You'll look things up daily for the first six months.
5. **Track real D2C stores** you like. View source. Steal patterns.

Don't buy a course until you've spent at least two weekends with the official docs and Dawn. Most paid Shopify courses are taught by people who built one store six years ago.

## The one prompt that helps you learn faster

Open Claude (claude.ai or Claude Code) and paste this when stuck:

> I'm learning Shopify theme development. Here's a snippet of Liquid I'm trying to understand: [paste]. Explain what every line does, what the alternatives are, and what common mistakes people make with this pattern.

Claude is genuinely good at Liquid. Use it as your tutor.

## A first paid project plan

In your first month of Shopify learning:

- Week 1: Liquid basics + read Dawn theme top to bottom.
- Week 2: Clone an existing store you like and rebuild its homepage.
- Week 3: Build one polished section (e.g. a fancy testimonial slider) and publish it as a free starter section on GitHub or a small site.
- Week 4: Reach out to two small D2C brands in Vienna offering a free "homepage audit + one fix." The audit is your portfolio piece. The fix is your first paid invoice.

The first paid Shopify project is the moment your earning power doubles. That's not an exaggeration.

Next chapter: Webflow and conversion optimization — the other half of what Christa sells.
