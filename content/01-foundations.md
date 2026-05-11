# What a website actually is

Every modern website on the planet has three parts. That's it. Three.

## The three parts

**1. Frontend** — what you see and click. Buttons, forms, pages, animations. Built with React + Tailwind (Lovable generates all of this for you).

**2. Backend + Database** — where the data actually lives. Users, posts, orders, anything that has to be remembered when you close the tab. Lovable uses **Supabase** for this. You already have an account.

**3. Hosting + Domain** — the address you can type into a browser. `yourapp.lovable.app` for free, or buy `katherina.dev` for about €12 a year.

Lovable does all three from one chat box. That's why it feels like magic. It isn't magic. It's just three things glued together really well.

## The tools we'll use

| Tool | What it does | Cost |
|---|---|---|
| **Lovable** | Build the website by chatting | Free → $25/mo Pro |
| **Supabase** | Database + login (Lovable connects it for you) | Free tier is plenty to start |
| **Stripe** | Take payments | Free; takes 2.9% + €0.25 per payment |
| **Resend** | Send emails | Free up to 3,000/month |
| **Claude** | Plan, debug, edit advanced code | You already have it |
| **GitHub** | Store your code (Lovable auto-syncs) | Free |
| **Cloudflare** | Buy a domain & host static sites | ~€12/year for the domain |

You won't outgrow this stack for the first ten products you build. Some people never outgrow it.

## A mental model that will save you

When something is broken, ask yourself: **which of the three parts is the problem?**

- *"The button looks wrong"* → frontend
- *"My data isn't saving"* → backend / database
- *"The site isn't loading at all"* → hosting / domain

That single question — *which of the three?* — is half of debugging.

## Before the next chapter

Just sign up:

1. Create a free account at **lovable.dev**. Use your GitHub login.
2. Open it. Look around. Don't build anything yet.
3. Come back here.

Next chapter, we ship a real website. In under 30 minutes.
