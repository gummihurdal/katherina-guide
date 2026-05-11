# Woche 4 — Build like a pro

You can read Liquid, you can edit Liquid, and you can ship small features through the admin. Time to graduate to the way real freelancers actually work — locally on your laptop, in VS Code, with the Shopify CLI, with git.

By the end of this week you'll have a section library — five custom sections you built from scratch, all in a private GitHub repo. That library is reusable across every future client.

Plan: **6–8 hours**, four sessions.

---

## Übung 1 — Install the toolchain (15 min)

**Deliverable:** `shopify version` prints a version number.

You need three things on your laptop:

1. **Node.js** (you have it from earlier chapters — verify with `node --version`)
2. **The Shopify CLI** — install:

   ```bash
   npm install -g @shopify/cli @shopify/theme
   shopify version
   ```

3. **VS Code** (or Cursor) with the official **"Shopify Liquid"** extension. Install it from the extensions panel. It gives you syntax highlighting, autocomplete for Liquid tags, and schema validation.

Bonus: install the **"Shopify Theme Check"** extension too. It scans your files for performance and accessibility issues as you type.

✅ Stop when `shopify version` works and VS Code has both extensions installed.

---

## Übung 2 — Pull your theme (15 min)

**Deliverable:** your "Lehrling-Übung" theme as a folder on your laptop.

```bash
mkdir -p ~/shopify-projects && cd ~/shopify-projects
shopify theme pull --store=YOUR-STORE.myshopify.com
```

Shopify opens a browser for you to log in once. Then it lists your themes — pick **"Lehrling-Übung"** (the duplicate you've been editing).

The theme downloads to a local folder. **Open the folder in VS Code.**

You're now looking at the same files you saw in the admin's Edit code screen — but with a real editor's tools. Autocomplete, AI assist, full-file search, multi-cursor edits, git history.

✅ Stop when you can open `sections/image-banner.liquid` in VS Code and see syntax highlighting.

---

## Übung 3 — The dev loop (15 min)

**Deliverable:** comfort with `shopify theme dev`.

The most-used command of your career:

```bash
cd ~/shopify-projects/your-theme
shopify theme dev --store=YOUR-STORE.myshopify.com
```

This:
1. Spins up a private preview URL (printed in your terminal — looks like `https://YOUR-STORE.myshopify.com/?preview_theme_id=...`)
2. Watches your local files
3. Auto-syncs every save to the preview URL within ~1 second
4. **Does not affect your live store**

Try it: in VS Code, find a piece of text in your hero section. Change it. Save. Look at the preview URL. **The change appears in under a second.**

Now make a Liquid error on purpose — remove an `{% raw %}{% endif %}{% endraw %}`. Save. The preview shows the Liquid error inline. Put it back. Fixed.

**This loop is everything.** Edit → save → tab to browser → see result → tab back. You will do this hundreds of times per project.

✅ Stop when you can make a tiny visible change in under 5 seconds from a fresh terminal.

---

## Übung 4 — Set up git (15 min)

**Deliverable:** your theme pushed to a private GitHub repo.

Every senior Shopify dev keeps every theme in git. So do you, from today.

```bash
cd ~/shopify-projects/your-theme
git init
git add .
git commit -m "Initial pull of Lehrling-Übung theme"
```

Create a new private repo on GitHub called `shopify-lehrling-uebung` (web or app), then:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/shopify-lehrling-uebung.git
git push -u origin main
```

From this point on, **every change you make** should be a commit. Small commits, clear messages. *"Added announcement strip,"* not *"changes."* This habit pays you back during your first oh-shit-I-broke-something moment.

✅ Stop when your theme is visible on github.com.

---

## Übung 5 — Custom section #1: the Quote (40 min)

**Deliverable:** a brand-new section file you wrote from scratch, working in the editor.

Create a new file: `sections/quote.liquid`. Type this in (don't copy-paste — typing it locks in the muscle memory):

```liquid
{% raw %}<section class="quote-section" style="background:{{ section.settings.bg }};padding:{{ section.settings.padding }}px 1rem;">
  <blockquote class="quote-section__quote">
    <p class="quote-section__text">"{{ section.settings.quote | escape }}"</p>
    <cite class="quote-section__author">— {{ section.settings.author | escape }}</cite>
  </blockquote>
</section>

<style>
  .quote-section { text-align: center; }
  .quote-section__quote { max-width: 60ch; margin: 0 auto; }
  .quote-section__text { font-size: 1.5rem; font-style: italic; line-height: 1.4; margin: 0 0 1rem; }
  .quote-section__author { display: block; font-size: 0.9rem; opacity: 0.7; }
</style>

{% schema %}
{
  "name": "Quote",
  "settings": [
    { "type": "textarea", "id": "quote", "label": "Quote text", "default": "Hand-picked. Slow-made. Hand-delivered." },
    { "type": "text", "id": "author", "label": "Author", "default": "Maria, founder" },
    { "type": "color", "id": "bg", "label": "Background colour", "default": "#FAF7F2" },
    { "type": "range", "id": "padding", "label": "Top/bottom padding (px)", "min": 20, "max": 200, "step": 10, "default": 80, "unit": "px" }
  ],
  "presets": [
    { "name": "Quote" }
  ]
}
{% endschema %}{% endraw %}
```

Save. Tab to the theme editor → **Add section.** "Quote" appears in the picker. Drag it to the homepage. Edit it. Change the background colour with the colour picker. Move the padding slider.

**You just built a section the merchant can use forever.** Commit it:

```bash
git add sections/quote.liquid
git commit -m "Add custom Quote section"
git push
```

✅ Stop when "Quote" is selectable in the editor and pushed to GitHub.

---

## Übung 6 — Custom section #2: the Numbered Steps (45 min)

**Deliverable:** a section with **blocks** — repeatable items the merchant can add/remove.

Blocks are like sections-within-a-section. The merchant can add 3, 5, or 7 of the same thing. This is essential for things like *"How it works,"* *"FAQ,"* *"Team,"* *"Testimonials."*

Create `sections/numbered-steps.liquid`:

```liquid
{% raw %}<section class="steps-section" style="padding:{{ section.settings.padding }}px 1rem;">
  {% if section.settings.heading != blank %}
    <h2 class="steps-section__heading">{{ section.settings.heading | escape }}</h2>
  {% endif %}

  <ol class="steps-section__list">
    {% for block in section.blocks %}
      <li class="steps-section__item" {{ block.shopify_attributes }}>
        <span class="steps-section__num">{{ forloop.index }}</span>
        <h3 class="steps-section__step-title">{{ block.settings.title | escape }}</h3>
        <p class="steps-section__step-text">{{ block.settings.text | escape }}</p>
      </li>
    {% endfor %}
  </ol>
</section>

<style>
  .steps-section { max-width: 60rem; margin: 0 auto; }
  .steps-section__heading { font-size: 2rem; text-align: center; margin-bottom: 3rem; }
  .steps-section__list { list-style: none; padding: 0; display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
  .steps-section__item { text-align: center; }
  .steps-section__num { display: inline-block; width: 2.5rem; height: 2.5rem; line-height: 2.5rem; border-radius: 50%; background: #1A1F2E; color: white; font-weight: 600; margin-bottom: 1rem; }
  .steps-section__step-title { font-size: 1.1rem; margin: 0 0 0.5rem; }
  .steps-section__step-text { opacity: 0.7; margin: 0; }
</style>

{% schema %}
{
  "name": "Numbered steps",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading", "default": "How it works" },
    { "type": "range", "id": "padding", "label": "Padding (px)", "min": 20, "max": 160, "step": 10, "default": 60, "unit": "px" }
  ],
  "blocks": [
    {
      "type": "step",
      "name": "Step",
      "settings": [
        { "type": "text", "id": "title", "label": "Step title", "default": "Pick your size" },
        { "type": "textarea", "id": "text", "label": "Step description", "default": "Choose between 250g, 500g, or 1kg." }
      ]
    }
  ],
  "max_blocks": 6,
  "presets": [
    {
      "name": "Numbered steps",
      "blocks": [
        { "type": "step", "settings": { "title": "Pick your size", "text": "Choose between 250g, 500g, or 1kg." } },
        { "type": "step", "settings": { "title": "We pack it fresh", "text": "Each order is sealed within 48 hours of toasting." } },
        { "type": "step", "settings": { "title": "Doorstep in 2 days", "text": "Free shipping in Austria over €50." } }
      ]
    }
  ]
}
{% endschema %}{% endraw %}
```

Save. In the theme editor add this section. **You can now add/remove steps with the "+ Add block" button.** Try adding a 4th and 5th step. The CSS grid handles the layout automatically.

Commit:

```bash
git add sections/numbered-steps.liquid
git commit -m "Add Numbered Steps section with blocks"
git push
```

✅ Stop when you can add and remove steps from the theme editor.

---

## Übung 7 — Custom sections #3, #4, #5 — your library (90 min)

**Deliverable:** three more custom sections, your own design.

You now know the pattern. Build three more sections that will be useful in real D2C client work. **Don't look at the previous code unless completely stuck** — try writing each from a blank file.

Suggested sections (pick any three, or invent):

- **Testimonial slider** — a section with `testimonial` blocks, each with a quote + author + photo
- **Featured pair** — two products side by side, the merchant picks both
- **Press strip** — a row of logo images, each linked
- **FAQ accordion** — a heading + `faq` blocks with question/answer
- **Comparison table** — your product vs the competitor, 4 rows of attributes
- **Image gallery** — masonry of 6 images, merchant picks each
- **Big text marquee** — large scrolling text strip

For each one: write the Liquid + the CSS + the schema. Test it. **Commit each as a separate git commit.**

After 90 minutes you'll have 5 sections in `sections/`. **That's a real, reusable section library.** Christa has one of these. Now you do too.

✅ Stop when you have 5 custom section files, all visible in the theme editor's "Add section" picker, all committed.

---

## Übung 8 — Theme Check + lint (15 min)

**Deliverable:** a clean lint pass on your theme.

Run Shopify's official linter:

```bash
shopify theme check
```

You'll see a list of issues — unused snippets, performance warnings, accessibility misses, schema mistakes. Fix the *errors* (red). The *warnings* (yellow) you can decide whether to address.

Common issues you'll see:
- Missing `alt` on images → add `alt="{{ image.alt | escape }}"` 
- Unused snippets → delete them
- Inline styles → move to a CSS file
- Liquid syntax issues → fix

After fixing, run `shopify theme check` again. **Aim for zero errors.**

```bash
git add .
git commit -m "Pass theme-check linting cleanly"
git push
```

✅ Stop when `shopify theme check` returns zero errors.

---

## Übung 9 — Push to live (10 min)

**Deliverable:** your custom sections live on a publishable theme.

The whole point of pro workflow is being able to safely push your local changes to a real Shopify theme.

```bash
# Push your local theme up to Shopify, but to a NEW theme slot — don't overwrite the live one
shopify theme push --unpublished
```

Shopify will create a fresh unpublished theme on your store containing your local code. Open the admin → **Online Store → Themes** → you'll see the new theme. Click **Preview**. Your custom sections work in production.

**You don't have to publish it.** Keeping a "staging" unpublished theme on the store is exactly how real freelancers work — the live theme stays untouched, the staging theme is where new work is reviewed, and you "Publish" only when the client signs off.

✅ Stop when your custom sections appear on an unpublished theme on your real Shopify store.

---

## Meisterstück for Woche 4

By the end of this week:

- [ ] Shopify CLI installed and working
- [ ] Your theme pulled locally and pushed to a private GitHub repo
- [ ] **5 custom section files** you built from scratch, all in `sections/`
- [ ] Each section is a separate git commit
- [ ] `shopify theme check` returns zero errors
- [ ] An unpublished theme on your store containing all your custom work

**Loom this week:** 3-minute screen recording walking through your 5 sections in the theme editor — adding each one to a page, showing the editable settings, and the rendered result.

This Loom is the most important portfolio piece so far. It demonstrates that you can build production-grade Shopify features end-to-end. **Show me when ready.**

---

## Lehrling Notiz

You are now, by every reasonable definition, a Shopify developer. Not a senior. Not a master. But a real, capable Lehrling who can ship.

Next week is when the freelance career becomes possible — taking a Figma file and turning it into a working store. That's the skill people pay €5,000–€12,000 for.
