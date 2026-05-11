# Woche 3 — Open the code

This is the week the box opens. You stop being a Shopify *user* and start being a Shopify *developer*.

By the end of this week you'll read any Liquid file in any Shopify theme and understand most of it. You'll have made dozens of small code edits, broken three things, fixed all of them, and built one new section setting from scratch.

Plan: **5–6 hours total**, split across 3–4 sessions. This is the week with the most reading and the slowest pace. Don't rush.

---

## Übung 1 — Duplicate before you edit (5 min)

**Deliverable:** a duplicate of your live theme called *"Lehrling-Übung"*.

This is the most important habit of your Shopify career.

1. Admin → **Online Store → Themes**
2. On your current theme, click the **⋯ (three dots) → Duplicate**
3. Rename the copy to **"Lehrling-Übung"**
4. The duplicate stays *unpublished* — you'll edit this one safely. Your live theme stays untouched.
5. Click **⋯ → Edit code** on the duplicate.

**You're now staring at the source code of your theme.** Take a breath. It looks like a lot. It isn't. We tour it next.

✅ Stop when you see a file tree on the left and a code editor on the right.

---

## Übung 2 — The folder tour (30 min)

**Deliverable:** notes describing every folder, in your own words.

Click each folder in the left tree. **Open at least one file in each folder and read the first 20 lines.** Take notes.

| Folder | What's inside |
|---|---|
| **layout/** | `theme.liquid` — the master shell wrapping every page (the `<head>`, header, footer) |
| **templates/** | One file per page type: `product.json`, `collection.json`, `cart.json`, `page.json`. Tells Shopify *which sections* go on each page. |
| **sections/** | Every section you've seen in the theme editor lives here as a `.liquid` file. `image-banner.liquid`, `featured-collection.liquid`, etc. **Open three of these and read.** |
| **snippets/** | Small reusable pieces. `price.liquid`, `product-card.liquid`. Smaller than sections. |
| **assets/** | CSS, JS, images, fonts. The static stuff. |
| **config/** | `settings_schema.json` (theme settings) and `settings_data.json` (the current values) |
| **locales/** | Translations. `en.default.json`, `de.json`, etc. |

**Spend 30 minutes** just reading files. Don't change anything yet. Write down what you notice — vocabulary you recognize, things that confuse you. The confusion is data for the next exercises.

✅ Stop when you have a one-paragraph note in your own words for each of the 7 folders.

---

## Übung 3 — Liquid in 60 seconds (10 min)

**Deliverable:** ability to recognize the two tag types.

The whole language has exactly two kinds of tags:

**Output tags `{{ }}` — print a value:**

```liquid
{% raw %}<h1>{{ product.title }}</h1>
<p>{{ product.price | money }}</p>{% endraw %}
```

That `| money` is a **filter** — it transforms the value before printing. There are dozens: `| upcase`, `| truncate: 100`, `| date: "%d.%m.%Y"`, `| image_url: width: 800`.

**Logic tags `{% raw %}{% %}{% endraw %}` — do things:**

```liquid
{% raw %}{% if product.available %}
  <button>Add to cart</button>
{% else %}
  <p>Sold out — back in stock soon</p>
{% endif %}

{% for image in product.images %}
  <img src="{{ image | image_url: width: 800 }}" />
{% endfor %}

{% assign discount = 0.10 %}{% endraw %}
```

That's the whole language. `if`, `for`, `assign`, `unless`, `case`, plus filters. **You now know more Liquid than 50% of "Shopify experts" on Upwork.**

✅ Stop when you can read the two examples above and tell me what each line does.

---

## Übung 4 — Hunt the text (20 min)

**Deliverable:** find where five specific pieces of text live in the theme code.

Pure detective work. For each item below, **find the exact file and line number** where that text lives. Use the editor's search-across-files (often Ctrl+F at the top of the code editor, or "find in files").

1. Find where the text *"Add to cart"* (or `"Add to cart"` translation key) lives
2. Find where the header logo's HTML is rendered
3. Find where the footer's copyright text is generated
4. Find where the cart's "Subtotal" line is shown
5. Find where the product price uses the `money` filter

Write down `file:line_number` for each one. This drill builds the search-and-navigate muscle that real Shopify devs use every day. You'll do this thousands of times in your career.

**Tip:** sometimes the text isn't a literal string but a translation key like `cart.subtotal`. To find the human text, search `locales/en.default.json` for `subtotal`.

✅ Stop when you have 5 `file:line` references written down.

---

## Übung 5 — Read one section, line by line (30 min)

**Deliverable:** a fully annotated `image-banner.liquid` (or your theme's hero section equivalent).

Open `sections/image-banner.liquid`. Copy the contents into a separate text file. Then **annotate every meaningful line** with a comment in plain language.

Example annotation (your theme's code may differ):

```liquid
{% raw %}<!-- The wrapper div for the entire section -->
<div class="banner banner--{{ section.id }}" >

  <!-- Output the background image, requesting an 1800px-wide version -->
  <img src="{{ section.settings.image | image_url: width: 1800 }}" 
       alt="{{ section.settings.image.alt | escape }}"
       class="banner__image" />

  <!-- The text content wrapper -->
  <div class="banner__content">

    <!-- Output the heading the merchant typed in the theme editor -->
    <h1>{{ section.settings.heading | escape }}</h1>

    <!-- Only show the subheading if the merchant filled it in -->
    {% if section.settings.subheading != blank %}
      <p>{{ section.settings.subheading | escape }}</p>
    {% endif %}

    <!-- Only show the button if both label and link are set -->
    {% if section.settings.button_label != blank %}
      <a href="{{ section.settings.button_link }}" class="btn">
        {{ section.settings.button_label | escape }}
      </a>
    {% endif %}

  </div>
</div>

<!-- The schema block tells the theme editor what settings to show -->
{% schema %}
  ...
{% endschema %}{% endraw %}
```

If you can't explain a line, **ask Claude:**

> I'm reading a Shopify Liquid section file. Here's the line: `[paste line]`. Explain what every part does in plain English, including any filters, what it would output for a real value, and what would happen if a value were missing.

When the whole file is annotated, **save the annotated copy** in your portfolio folder as `notes-image-banner-annotated.md`.

✅ Stop when every meaningful line has a plain-English comment.

---

## Übung 6 — Five tiny edits (45 min)

**Deliverable:** five small code changes, each tested and saved.

Now you stop reading and start editing. Each edit is tiny on purpose — the goal is to build the *save → reload → see the change* rhythm.

For each one: make the change, save the file, **reload the preview tab,** and verify it worked.

**Edit 1 — change a label.** Find the cart "Subtotal" label. Change the text to "Total before shipping." Save, reload cart, verify.

**Edit 2 — adjust a default.** Open `sections/image-banner.liquid`. Find the `"heading"` setting in `{% raw %}{% schema %}{% endraw %}`. Change its `"default"` value to *"Hand-made in Oberösterreich."* Save. **Add a new instance of this section** in the theme editor — your new default text should appear.

**Edit 3 — add a filter.** Find where a product title prints. Add `| upcase`: `{% raw %}{{ product.title | upcase }}{% endraw %}`. Save. View a product page. The title is now in all caps.

**Edit 4 — wrap a conditional.** Find a piece of optional content. Wrap it in `{% raw %}{% if true %}...{% endif %}{% endraw %}`. Verify it still shows. Change `true` to `false`. Verify it disappears. Now you understand `if`.

**Edit 5 — break and fix.** Deliberately break something — remove a closing `{% raw %}{% endif %}{% endraw %}`. Save. Reload. You'll see a Liquid error in the preview. **Read the error message** — it tells you the file and line. Put the tag back. Reload. Fixed.

**The point of Edit 5:** errors are normal. They tell you what's wrong. The instinct most beginners need to unlearn is *"the error means I'm bad."* No — the error means you have feedback.

✅ Stop when all 5 edits are made, tested, and (for Edit 5) cleanly reverted.

---

## Übung 7 — Add a new editable setting (45 min)

**Deliverable:** a new theme-editor field that you wired up yourself.

This is your first real "developer" feature. You'll add a new setting to a section's schema, then wire it up to actually do something.

Goal: add a *"Show announcement strip"* checkbox to your hero section. When checked, a small coloured strip appears above the headline with text the merchant can edit.

**Step 1 — modify the schema.** Open your hero section. Find the `{% raw %}{% schema %}{% endraw %}` block. Add two new settings to the `"settings"` array:

```json
{
  "type": "checkbox",
  "id": "show_announcement",
  "label": "Show announcement strip",
  "default": false
},
{
  "type": "text",
  "id": "announcement_text",
  "label": "Announcement text",
  "default": "Free shipping over €50"
}
```

Save. Open the theme editor → click the hero section. **You should see two new fields:** a checkbox and a text input.

**Step 2 — wire it up.** At the top of the same file, before the existing markup, add:

```liquid
{% raw %}{% if section.settings.show_announcement %}
  <div class="hero-announcement" style="background:{{ section.settings.color_scheme | default: '#1A1F2E' }};color:white;text-align:center;padding:0.5rem;font-size:0.9rem;">
    {{ section.settings.announcement_text | escape }}
  </div>
{% endif %}{% endraw %}
```

Save. In the theme editor, toggle the checkbox on/off. **The strip appears and disappears.** Edit the announcement text — it updates in the preview.

**You just shipped a feature.** A small feature. But a real one. The merchant can now toggle this themselves without ever calling you.

✅ Stop when the checkbox in the theme editor controls whether the announcement strip appears.

---

## Meisterstück for Woche 3

By the end of this week you should have:

- [ ] A duplicate theme named *"Lehrling-Übung"* where all edits live
- [ ] A folder-tour note describing every theme folder in your own words
- [ ] 5 `file:line` references from the hunt-the-text drill
- [ ] An annotated `image-banner.liquid` saved to your portfolio
- [ ] 5 small code edits, each tested
- [ ] One brand-new editable setting you wired up yourself

**Loom recording:** screen-record yourself toggling the new checkbox in Übung 7 on and off, showing the strip appear and disappear. That 30-second video proves you can write Liquid.

Add to your portfolio folder. Two minutes of recording, three months of *"I'm not just clicking — I'm actually coding."*

---

## Lehrling Notiz

This is the week most learners get scared and slow down. **Slow is fine.** The Liquid you learned this week is the same Liquid that powers two million stores. It's worth the patience.

Next week you graduate from the Shopify admin to local development — VS Code, terminal, git. The pace picks up again.
