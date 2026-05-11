# Making it look beautiful

This is the chapter most beginners skip. It's also the chapter that separates "AI slop" from "I'd pay for that." Twenty minutes here triples the perceived value of what you build.

## The five things to ask for, every single time

Paste this near the end of any design prompt:

> Design rules:
> - Generous whitespace — at least 80px between sections on desktop
> - Maximum 2 fonts and maximum 3 colors total (one neutral, one dark, one accent)
> - Buttons have a clear hover state with a small transition
> - Headlines are big — at least 48px on desktop
> - Mobile-first: every layout works perfectly on a phone-width screen

That single block of text raises the floor of every project you build.

## Free design steals

You don't need to be a designer. You need to know where to steal taste.

### Fonts

Open **fonts.google.com**. Pick one serif (for headlines) plus one sans-serif (for body). Good safe pairs:

- *Fraunces* + *Inter*
- *Playfair Display* + *DM Sans*  
- *Instrument Serif* + *Geist*
- *Fraunces* + *Instrument Sans* (this site uses this one)

Tell Lovable: *"Use Fraunces for headlines and Instrument Sans for body text. Import them from Google Fonts."*

### Colors

Open **coolors.co**. Press the spacebar until you see a 5-color palette you like. Copy the hex codes. Paste them into your prompt:

> Use this color palette: `#FAF7F2` (background), `#1A1F2E` (text), `#FF6B6B` (accent). Use the accent sparingly — only for primary buttons and a few highlights.

### Images

Lovable has built-in image generation now. Just ask:

> Generate a hero image: a quiet Austrian Alpine meadow at golden hour, painterly, soft focus, no text in the image.

For real photos, use **unsplash.com** (free) and tell Lovable the URL.

### Inspiration

When you see a site you like:

- **lovable.dev/gallery** — sites built with Lovable
- **godly.website** — curated beautiful sites
- **dribbble.com** — designer portfolios

Screenshot it. Paste into your prompt: *"Make our landing page have a feel similar to this — same energy, not a copy."*

## The "second-pass" prompt

After Lovable builds something, run this *once*:

> Review what you built and improve it: tighten the spacing, make the typography hierarchy clearer (bigger size jumps between H1, H2, body), make the primary call-to-action the most visually prominent thing on the page, and ensure mobile looks as good as desktop.

One prompt. About 30% improvement. Almost free.

## The three signs that something looks "designed" vs "AI'd"

A real designer's work has these. AI defaults rarely do:

1. **Real type hierarchy.** Headlines are *much* bigger than body text. Like 4x bigger.
2. **One bold color, used sparingly.** Not 6 colors at equal strength.
3. **Generous whitespace.** If you can't fit your phone between sections, there's not enough.

When you publish anything, look at it on your phone and ask those three questions. If the answer is yes-yes-yes, you're done. If not, one more prompt.
