# Woche 1 — Meet Shopify

Welcome to the Lehre. Six weeks. One real store you build from scratch. By the end you'll have a portfolio piece you can show to D2C founders, or to Christa.

This week has one job: **get hands on the platform.** No code, no Liquid, no theory. You'll touch every screen of the Shopify admin and end the week with a real fake store that has products, variants, collections, shipping zones, and a test order.

Plan to spend about **3–4 hours total** on this chapter, split across two evenings. Don't rush. Lehrling-style learning is repetition until the muscle memory sets in.

## Pick your Marke (5 min)

You'll build the same fake brand through six chapters. Pick one of these now and commit — don't keep switching:

- **Kornfeld** — Austrian organic granola and grain bowls. Warm, earthy, slow-mornings feel.
- **Murmel** — handmade ceramic mugs and bowls from a one-woman studio in Linz. Minimal, gallery-like.
- **Saumtier** — small-batch leather travel bags. Bold, masculine, mountain-Austrian.

Or invent your own. Whatever you pick, write the name on a sticky note and put it on your monitor. From now on I'll write *"your brand"* and you mentally substitute.

---

## Übung 1 — Get the trial running (10 min)

**Deliverable:** a Shopify admin URL you're logged into.

1. Go to **shopify.com** → "Start free trial"
2. Email + password
3. When asked *"what are you selling?"* — pick the category that matches your brand
4. **Skip every setup question** — *"I'll do this later"* on shipping, taxes, payments
5. You should land at `admin.shopify.com/store/[your-store-name]`
6. Bookmark this URL

✅ Stop here when you see the green Home dashboard.

---

## Übung 2 — The Admin Tour (15 min)

**Deliverable:** a sentence describing what each main section does, in your own words.

In the left sidebar, **click each section in this exact order** and spend 90 seconds in each:

| Section | What you should notice |
|---|---|
| **Home** | The "what's happening today" dashboard. Mostly empty for now. |
| **Orders** | Empty. This is where customer orders appear. |
| **Products** | Empty. Where every product lives. We'll fill this next. |
| **Customers** | Empty. People who bought from you. |
| **Content** → Pages, Blog posts, Menus, Files | About pages, blog, navigation. Click each sub-item. |
| **Marketing** | Campaigns, automations, abandoned cart emails. |
| **Discounts** | Promo codes. |
| **Analytics** | Reports. Will fill up as the store gets traffic. |
| **Online Store** → Themes, Pages, Blog posts, Navigation, Preferences | The visual side. **This is where you'll live most days.** |
| **Settings** (bottom of sidebar, gear icon) | Configuration. We'll come back. |

**Now write down,** in a notes file:

> *Products is where I add things to sell.*
> *Online Store is where I change how the site looks.*
> *Settings is where I configure shipping, taxes, payments, domain.*
> *...*

This three-minute writing exercise locks the mental map. Don't skip it.

✅ Stop when you have one sentence per section, in your own words.

---

## Übung 3 — Your first product (15 min)

**Deliverable:** one beautiful product live in your store.

1. **Products → Add product**
2. Fill it in like you're actually launching this product. *Take it seriously.* Practice writing copy that would convince someone to buy:

| Field | Example for Kornfeld granola |
|---|---|
| Title | *"Apfel-Walnuss Müesli — 500g"* |
| Description | A real paragraph. *"Sun-dried apple slices from an orchard in the Wachau, toasted walnuts, oats from a family farm near Linz. No added sugar. Eight servings."* |
| Media | Drag in a real photo. Use unsplash.com or generate one with any AI image tool. **No placeholder boxes.** |
| Price | €11.90 |
| Cost per item (optional) | €4.20 — Shopify uses this to calculate your margin |
| SKU | `KORN-AW-500` |
| Track inventory | Yes — Quantity 100 |
| Weight | 500g — needed for shipping calculations |
| Type | Granola |
| Vendor | Your brand name |
| Status (top right) | **Active** |

Click **Save**. Then **View** the product. **Take a screenshot.**

This is your first real Shopify product page. Look at the URL — it has a proper structure: `/products/apfel-walnuss-muesli`.

✅ Stop when you have one product page that looks real, not placeholder-y.

---

## Übung 4 — Variants (20 min)

**Deliverable:** one product with multiple variants.

Variants are the same product with different attributes — different sizes, colours, materials, flavours. Setting them up well is what separates real Shopify devs from beginners. Practice this until it's automatic.

1. **Products → Add product**
2. Title: *"Apfel-Walnuss Müesli — multi-size"* (or your brand's equivalent)
3. Scroll down to **Variants** → "Add options like size or color"
4. Option name: *Size* → Option values: *250g, 500g, 1kg*
5. Click **Done.** Shopify generates three variant rows.
6. For each variant row, set:
   - Price (250g: €6.90, 500g: €11.90, 1kg: €19.90)
   - SKU (KORN-AW-250, KORN-AW-500, KORN-AW-1000)
   - Inventory quantity (50 each)
7. Click **Save**, then **View**.

On the product page, you should now see a size selector. Try clicking between sizes — notice that the price updates. **That's the variant system.**

**Extra Übung:** edit the product again and add a *second* option (e.g. *Packaging* → *standard, gift-wrapped*). Shopify will now show a 3×2 grid of 6 variants. Fill them all in. This is what variant management feels like on a real store with 8 sizes × 5 colours = 40 variants. Get used to it.

✅ Stop when you've created a 6-variant product and verified the price updates correctly per variant.

---

## Übung 5 — Five more products + collections (30 min)

**Deliverable:** a store with 6 products organized into 2 collections.

1. Add 4 more products — different items in your brand's lineup. Take 5 minutes each, real descriptions, real prices, real photos.
2. **Products → Collections → Create collection**
   - First collection: *"Bestsellers"* — manually pick 3 products
   - Second collection: *"Neuheiten / New arrivals"* — manually pick 3 products
3. For each collection: give it a description and a hero image.
4. **Online Store → Navigation → Main menu** → add menu items linking to your two collections.

Now visit your storefront. Click the menu links. You should see proper collection pages with products listed.

✅ Stop when your top menu has working links to two non-empty collections.

---

## Übung 6 — Shipping zones (15 min)

**Deliverable:** correct shipping rates for Austria, the EU, and the rest of the world.

This is the boring stuff. Doing it well is what makes you a real Shopify Lehrling and not a tourist.

1. **Settings → Shipping and delivery → Manage rates**
2. You'll see a default zone "Rest of world." Edit it.
3. Create three zones:
   - **Österreich** — Austria only — Rate: *Standard* — €4.90, *Free over €50* (set a price-based rule)
   - **EU** — Germany, Switzerland, Italy, France, etc. — €9.90, free over €80
   - **Welt** — everywhere else — €19.90, no free shipping
4. Save.

Visit your store, add a product to cart, go to checkout. Try changing the country dropdown — watch the shipping rate update. **You just built the shipping logic of a real e-commerce business.**

✅ Stop when checkout shows the correct rate for Austria, Germany, and the US.

---

## Übung 7 — Test the buyer flow (15 min)

**Deliverable:** a successful test order visible in your admin.

1. **Settings → Payments → Add payment provider → Bogus Gateway (for testing)** or activate Shopify Payments test mode
2. Go to your store as a customer — add a product to cart, check out
3. Use a fake address. Use test card `1` (Bogus Gateway approves anything)
4. Complete the order

Back in admin: **Orders.** You should see your test order. Click into it. **This is what every real order will look like.** Get used to this screen — you'll spend years here.

✅ Stop when you can show me a test order in the admin.

---

## Meisterstück for Woche 1

By the end of this chapter you should have:

- [ ] A live Shopify store at a `*.myshopify.com` URL
- [ ] 6+ products with real descriptions, real photos, real prices
- [ ] At least one product with 6+ variants
- [ ] 2 collections, both linked from the main menu
- [ ] Working shipping zones for AT, EU, World
- [ ] One completed test order visible in your Orders panel

**Take a 30-second Loom screen recording walking through all six points.** Send it to me. That recording goes into your portfolio folder.

This is the only thing that matters this week. It looks generic because we haven't touched the design yet. That's next week.

---

## Lehrling Notiz

If you got stuck on any Übung, that's the point. Lehrling work isn't pre-digested. Use Claude or Google when blocked, but don't skip exercises. The 4-hour version teaches you Shopify. The 30-minute speedrun teaches you nothing.

See you in Woche 2.
