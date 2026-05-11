# Building Shopify like a pro

You can now read and lightly edit a theme through Shopify's web admin. That's where amateurs stop. Pros work locally — in VS Code, with the Shopify CLI, with git, with proper review before anything goes live.

This chapter levels you up to the actual professional workflow Christa uses. It's a step change in productivity.

## Why the web admin isn't enough

Editing code through `Online Store → Edit code` works for tiny changes, but it has real problems:

- No version control — you can't see who changed what when, can't easily compare two versions
- No proper editor — no autocomplete, no Liquid syntax checking, no AI assist
- No way to run other tools (linters, formatters, image optimizers) before code goes live
- Changes are *instant* on the live theme even if you make a typo

Local development fixes all of this. It's also faster.

## Install the Shopify CLI

On your laptop, with Node.js already installed (you have it from earlier chapters):

```bash
npm install -g @shopify/cli @shopify/theme
```

Verify it worked:

```bash
shopify version
```

You should see a version number.

## Pull your store's theme to your laptop

```bash
mkdir my-shopify-themes && cd my-shopify-themes
shopify theme pull --store=your-store.myshopify.com
```

Shopify will open a browser for you to log in once. Then it downloads the live theme to a local folder. You can now open that folder in VS Code (or Cursor) and edit with autocomplete, AI assist, linting — the whole thing.

## The dev loop

The single command you'll run thousands of times in your career:

```bash
shopify theme dev --store=your-store.myshopify.com
```

This:
1. Opens a private preview URL of your store (different from the live store)
2. Watches your local files for changes
3. Auto-syncs every save to that preview URL within ~1 second
4. Lets you test changes without affecting the live store

You edit a file in VS Code → save → look at the preview URL → see the change. Same loop as Lovable, but on a real Shopify theme.

## Build a custom section from scratch

This is the moment Shopify stops feeling like a platform and starts feeling like real software development.

Create a new file: `sections/quote.liquid`

```liquid
{% raw %}<section
  class="quote-section"
  style="background: {{ section.settings.bg }}; padding: {{ section.settings.padding }}px 1rem;"
>
  <blockquote>
    <p>"{{ section.settings.quote }}"</p>
    <cite>— {{ section.settings.author }}</cite>
  </blockquote>
</section>

<style>
  .quote-section { text-align: center; }
  .quote-section blockquote { max-width: 60ch; margin: 0 auto; font-size: 1.5rem; font-style: italic; }
  .quote-section cite { display: block; margin-top: 1rem; font-size: 0.9rem; opacity: 0.7; }
</style>

{% schema %}
{
  "name": "Quote",
  "settings": [
    { "type": "textarea", "id": "quote", "label": "Quote", "default": "Hand-picked, slow-cooked, hand-delivered." },
    { "type": "text", "id": "author", "label": "Author", "default": "Maria Findling" },
    { "type": "color", "id": "bg", "label": "Background colour", "default": "#FAF7F2" },
    { "type": "range", "id": "padding", "label": "Top/bottom padding", "min": 20, "max": 200, "step": 10, "default": 80, "unit": "px" }
  ],
  "presets": [{ "name": "Quote" }]
}
{% endschema %}{% endraw %}
```

Save. In the theme editor, click **"Add section"** and your new "Quote" section appears in the picker. Drag it to the homepage. The merchant can now add a styled customer quote anywhere on any page, with editable colour and padding.

**That's a real, production-grade Shopify section.** You built one. You can build a hundred.

## The schema settings reference (the cheat sheet)

The `{% raw %}{% schema %}{% endraw %}` block accepts these input types, and you'll use all of them:

- `text` — single-line text
- `textarea` — multi-line text
- `richtext` — formatted text with bold/italic/links
- `image_picker` — pick from media library
- `video` — uploaded video
- `url` — link picker (pages, collections, products)
- `color` — colour swatch
- `range` — numeric slider
- `checkbox` — toggle
- `select` — dropdown with predefined options
- `radio` — radio buttons
- `font_picker` — choose from Shopify's font library
- `collection` — pick a product collection
- `product` — pick a single product
- `blog` / `article` / `page` — pick those content types

These twelve types cover ~95% of what you'll ever build. Bookmark **shopify.dev/docs/themes/architecture/settings/input-settings**.

## Theme architecture decisions you'll make

When you build sections, you make architectural choices that affect maintainability:

**Section settings vs theme settings.** If a colour appears in 12 places, put it in *theme settings* — change it once, applies everywhere. If a colour is only used in this one section, put it in *section settings*.

**Sections vs blocks within a section.** A section is a stripe of the page. Blocks are repeatable items *within* a section (like a list of testimonials in a testimonial section). Use blocks when the merchant might want 2, 5, or 10 of the same thing.

**Snippets for reusable bits.** If you find yourself copy-pasting the same Liquid in three sections, extract it into a snippet. Then include it: `{% raw %}{% render 'product-card', product: product %}{% endraw %}`.

**JSON templates over Liquid templates.** Modern themes use `.json` templates for pages (`product.json`, not `product.liquid`). JSON templates let the merchant rearrange sections on each page through the editor. Liquid templates lock the layout. Use JSON unless you have a specific reason not to.

## Version control with git

Every theme is just a folder of text files. So:

```bash
cd my-shopify-themes
git init
git add .
git commit -m "First commit of the Findling theme"
git remote add origin https://github.com/gummihurdal/findling-theme.git
git push -u origin main
```

Now you have history. You can branch for experiments, push to GitHub, restore old versions. **Every senior Shopify dev keeps every client's theme in git.** This is how you handle "I want to undo last week's changes" emails.

## Linting and good habits

```bash
npm install -g @shopify/theme-check
shopify theme check
```

This scans your theme for common issues — unused snippets, performance problems, accessibility misses, schema errors. Run it before every push.

## What "pro" looks like in practice

Christa's actual workflow when she gets a new client:

1. `shopify theme pull` the client's current theme into a local folder
2. `git init` + first commit
3. Push to a private GitHub repo
4. Make a branch for the new feature she's building
5. `shopify theme dev` to test locally
6. Push the branch, get review from her team
7. Merge → `shopify theme push` to a *staging* theme on the client's store
8. Client reviews on a private URL
9. Promote staging → live with one click in the admin

You won't do all of this on day one. But knowing the shape of the professional workflow lets you grow into it.

## Two-week plan

- **Week 1:** Install CLI, pull a theme, run `theme dev`, build one custom section from scratch.
- **Week 2:** Set up git for one theme, push to GitHub, make a branch for an experiment, merge it.

By the end of week 2 you're operating at the same skill level as most early-career Shopify devs in DACH. That's commercially useful.

Next: how to take a Figma file and turn it into a real Shopify theme. That's the highest-paid skill in this entire guide.
