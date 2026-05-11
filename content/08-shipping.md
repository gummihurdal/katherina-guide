# Shipping like a pro

A site on `something.lovable.app` is fine for friends. To take real money from real customers, you want a real domain, real SEO, real legal pages, and real analytics. All of it costs less than €30/year.

## Custom domain

1. Buy at **cloudflare.com** (~€10/year). Pick something short. `.app`, `.dev`, `.io` all work.
2. In Lovable: **Settings → Custom Domain →** paste it. Lovable shows you DNS records.
3. In Cloudflare: paste those records into your domain's DNS settings. Wait 5–10 minutes.
4. Done. Your project now lives at `something.app`.

Cloudflare also makes your site faster automatically. Free.

## SEO basics

So Google can find your site. Ask Lovable:

> Add proper SEO: a unique `<title>` and meta description on every page, an Open Graph image at `/og.png` so the site looks good when shared on social media, a `sitemap.xml`, a `robots.txt` that allows everything, and JSON-LD structured data where it makes sense.

That single prompt sets up about 90% of basic SEO correctly.

## Performance

> Run a Lighthouse audit in your head and tell me what would score below 90. Fix the worst three issues — likely image sizes, font loading, and unused JavaScript.

Lighthouse is Google's standard for "is this site fast and good?" Aim for green scores (above 90) on all four metrics.

## Analytics — know who's actually using your site

> Add Plausible Analytics. It's privacy-friendly and GDPR-compliant. Use my site as the domain. Track these custom events: `signup`, `upgrade_to_pro`, `ai_coach_used`.

Plausible is paid (€9/month) but worth it. Free alternative: **Umami**, which you can self-host on the same Hetzner server we already pay for.

Why not Google Analytics? Because it's a privacy nightmare in Europe and you'd need a cookie banner. Plausible needs no banner.

## Legal pages (yes, you actually need these in Austria)

> Generate a Privacy Policy, Terms of Service, and Impressum page tailored for an Austrian sole proprietor (*Einzelunternehmen*). Mention GDPR compliance, the data we collect (email, habit data), and that we use Supabase, Stripe, Resend, and Plausible as sub-processors.

In Austria, you legally need an **Impressum** (imprint) page on any site that has commercial intent. This is non-negotiable. Use Lovable's draft as a starting point, but have a real human (we'll find one) review legal pages before you charge real customers.

## A pre-launch checklist

Before you announce a product publicly, check every one of these:

- ✅ Custom domain is set up and HTTPS works
- ✅ Lighthouse scores are all above 90
- ✅ All pages have unique titles and meta descriptions
- ✅ The Open Graph image looks good when you paste the URL into WhatsApp or LinkedIn
- ✅ Privacy Policy, Terms, and Impressum are linked from the footer
- ✅ Cookie/tracking is GDPR-compliant (Plausible: no banner needed)
- ✅ All forms work and send confirmation emails
- ✅ Stripe is in **live mode** (not test mode!) before you accept real money
- ✅ Row Level Security is on for every Supabase table
- ✅ Errors are caught — if something breaks, the user sees a helpful message, not a white screen
- ✅ Mobile works (open it on your phone and use it for 5 minutes)

If all ten are checked, you're more prepared than most professional launches.
