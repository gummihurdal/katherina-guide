# Your first lines of Liquid

The theme editor has limits. To go beyond them, you read and write code in a templating language called **Liquid**. This is the chapter where Shopify stops feeling like a click-around tool and starts feeling like programming.

Don't panic. Liquid is easier than React. Easier than Python. Probably the easiest programming language you'll ever learn.

## Why Liquid exists

A theme template needs to mix two things:

- **Static stuff** — HTML, CSS, words that never change
- **Dynamic stuff** — the actual product name, the current price, the customer's first name

Liquid is the glue. It lets you say *"insert the current product's name here"* inside otherwise-normal HTML.

It was invented at Shopify and is now used by tons of other platforms (Jekyll, Mailchimp, Salesforce, etc). Learning Liquid is a transferable skill.

## Open the code editor

In your admin: **Online Store → Themes → ⋯ (three dots next to your theme) → Edit code.**

A new screen opens with a file tree on the left and a code editor on the right. **You're now looking at the actual code of your live theme.**

A scary thought. Two reassurances:

1. Shopify auto-saves every version. You can revert easily.
2. Better yet: **don't edit your live theme directly.** Click the three dots → **Duplicate.** Edit the *copy.* When ready, promote the copy to live.

Always duplicate first. *Always.* Christa duplicates. The senior devs at Shopify duplicate. So do you.

## The folder tour

The file tree shows you the theme structure. Open them one by one and read a few lines:

- **`layout/theme.liquid`** — the master shell. Every page on the site is wrapped in this. Contains the `<head>`, the header, the footer, and the main content area.
- **`templates/`** — one file per page type. `product.json`, `collection.json`, `cart.json`, `page.json`, etc.
- **`sections/`** — every section you saw in the theme editor lives here as a file. `image-banner.liquid`, `featured-collection.liquid`, etc.
- **`snippets/`** — small reusable pieces. `price.liquid`, `product-card.liquid`.
- **`assets/`** — CSS, JS, images, fonts.
- **`config/`** — JSON files for the theme settings.
- **`locales/`** — translations.

That's the whole architecture. Take ten minutes to just *open files and read.* You won't understand everything. You'll understand more than you think.

## Liquid syntax — the whole language in 60 seconds

Liquid has two kinds of tags. That's it.

### Output tags: `{{ ... }}`

These print a value:

```liquid
{% raw %}<h1>{{ product.title }}</h1>
<p>Price: {{ product.price | money }}</p>{% endraw %}
```

The `| money` is a **filter** — it formats the value. There are dozens: `| upcase`, `| downcase`, `| date: "%Y-%m-%d"`, `| escape`, `| truncate: 100`. You'll look them up as you need them.

### Logic tags: `{% raw %}{% ... %}{% endraw %}`

These do things:

```liquid
{% raw %}{% if product.available %}
  <button>Add to cart</button>
{% else %}
  <p>Sold out — back in stock soon</p>
{% endif %}

{% for image in product.images %}
  <img src="{{ image | image_url: width: 800 }}" alt="{{ image.alt }}" />
{% endfor %}

{% assign discount = 0.10 %}
<p>Save {{ discount | times: 100 }}% with code SPRING</p>{% endraw %}
```

That's the whole language. `if`, `for`, `assign`, `unless`, `case`, plus filters. Spend a Saturday with **shopify.dev/docs/api/liquid** and you'll have it.

## Read one section together

Open `sections/image-banner.liquid` in the code editor. You'll see something like (the exact code varies by theme):

```liquid
{% raw %}<div class="banner">
  <img src="{{ section.settings.image | image_url: width: 1600 }}" />
  <div class="banner-content">
    <h1>{{ section.settings.heading }}</h1>
    <p>{{ section.settings.subheading }}</p>
    {% if section.settings.button_label != blank %}
      <a href="{{ section.settings.button_link }}" class="btn">
        {{ section.settings.button_label }}
      </a>
    {% endif %}
  </div>
</div>

{% schema %}
{
  "name": "Image banner",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Background image" },
    { "type": "text", "id": "heading", "label": "Heading", "default": "Welcome" },
    { "type": "text", "id": "subheading", "label": "Subheading" },
    { "type": "text", "id": "button_label", "label": "Button label" },
    { "type": "url", "id": "button_link", "label": "Button link" }
  ],
  "presets": [{ "name": "Image banner" }]
}
{% endschema %}{% endraw %}
```

That whole file is **one section**. Look at the bottom — the `{% raw %}{% schema %}{% endraw %}` block defines what the merchant sees in the theme editor. The settings list each input field. The Liquid at the top uses those settings via `{% raw %}{{ section.settings.heading }}{% endraw %}`.

**This is the entire pattern.** Every section file works like this. Read three or four section files, and you'll start to recognize the rhythm.

## Your first real edit

Pick the simplest section in your theme. Make a small change:

1. Find a piece of text inside `{% raw %}{{ ... }}{% endraw %}` or as plain text in the HTML.
2. Change something — even just punctuation.
3. Save.
4. Reload your store. **Your edit is live.**

That's it. You just edited code on a production-grade e-commerce platform. Every Shopify dev started with a change exactly that small.

## When you don't understand a line

Copy the line. Open Claude. Paste:

> I'm learning Shopify Liquid. Here's a line from a theme: `[paste]`. Explain what every part does, what `|` and `{% raw %}{%%}{% endraw %}` mean, and what would change if I tweaked it.

Claude is genuinely excellent at Liquid. Use it as your tutor every time you don't understand something.

## A two-week plan to fluency

- **Days 1–3:** Read the Dawn theme source on GitHub. Open every section file. Just read. Don't edit yet.
- **Days 4–7:** Edit text in three sections of your store. Tiny changes. Get comfortable saving and reloading.
- **Days 8–10:** Add a new line to a section schema. Add a new setting in the editor. Wire it up to the section's HTML.
- **Days 11–14:** Build one section *from scratch* by copying an existing one and modifying. Don't try to write from nothing.

After two weeks, you'll read any Liquid file in any theme and understand most of it. That's the bar before the next chapter.
