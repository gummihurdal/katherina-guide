# Features people pay for

This is the chapter where you stop building demos and start building **products.**

Each feature below adds real money-making potential to anything you build. Most projects use three or four of them together.

## 1. Payments (Stripe)

In Lovable:

> Add Stripe Checkout for a subscription. Two plans: **Free** (3 habits max) and **Pro** (€7/month, unlimited habits + analytics page). When someone subscribes, save their `stripe_customer_id` and `subscription_status` to the users table. Gate the analytics page behind `subscription_status = 'active'`.

You'll need a Stripe account — free, takes 10 minutes. Lovable tells you which API keys to paste. Test in **test mode** until everything works, then flip to live mode.

## 2. AI features (the unfair advantage)

This is your biggest edge as a builder in 2026. Customers pay 10x more for products with intelligent AI inside.

> Add an AI coach feature. When a user clicks "Analyze my week," send their last 7 days of habit data to the Anthropic Claude API and ask Claude to give them one specific, kind piece of advice (under 60 words). Use the model `claude-sonnet-4-5`. Show the response in a nice card with a "Refresh advice" button. Store the response in the database so we don't burn API credits showing it again.

Get an API key at **console.anthropic.com**. Paste it into Lovable's environment variables (the "Secrets" panel — never in your code).

**The pattern works for almost anything:** AI summary of meeting notes, AI feedback on uploaded essays, AI categorization of expenses, AI generation of social media captions. Same five lines of code, different prompt.

## 3. Sending emails (Resend)

> When a user signs up, send them a welcome email through Resend. When they break a 7-day habit streak, send a gentle "come back" email. Use simple HTML emails with their first name.

Resend gives you 3,000 free emails per month. That's enough for your first hundred customers.

## 4. Analytics dashboards (the "Pro feature" people pay for)

> Add an `/analytics` page (Pro users only). Show: a line chart of habit completions per day for the last 30 days, a list of top 3 habits by completion rate, and the current longest active streak. Use Recharts for the charts.

Beautiful dashboards are the single most underrated paid feature. People love seeing their own data made pretty. They will pay €5/month forever just to look at their own line chart.

## 5. File uploads

> Let users upload a profile picture. Use Supabase Storage. Resize to max 400x400 on upload. Store the URL on the user's profile. Show it as a circle in the top-right of the dashboard.

This is also how you'd let users upload PDFs, photos, audio — anything.

## 6. Multi-tenancy (the €7/mo → €70/mo unlock)

The single biggest pricing unlock: instead of selling to one person, sell to a *team*.

> Add organizations. A user can create an organization, invite other users by email, and assign them roles (admin, member). All habits, goals, and analytics belong to the organization, not the user. A user can belong to multiple organizations and switch between them via a dropdown at the top of the dashboard.

A B2C habit tracker is worth €5/month per person. A B2B "team habit tracker for small companies" is worth €49/month per company. Same product. Different customer. 10x the price.

Once you build the multi-tenancy pattern once, you can reuse it in every B2B SaaS you ever make.

## Pricing rule of thumb

| Feature stack | Realistic monthly price |
|---|---|
| Just frontend (a portfolio, landing page) | One-time, €200–€1,500 |
| Login + database (an app) | €5–€15/month per user |
| + AI features inside | €15–€39/month per user |
| + Multi-user / team / org | €49–€199/month per team |
| + Custom enterprise things | "let's talk" |

You move up this ladder one feature at a time. Each feature adds about 2–3x to what you can charge.
