# Woche 1 — Your first project

Welcome to Lehre 1. Eight weeks. By the end you have a real, deployed, paying-customers SaaS product you built yourself.

This week has one job: **ship something live today.** Plus pick the app you'll build for the next eight weeks.

Plan: about **2–3 hours total**, ideally one focused evening.

## Pick your Projekt (10 min)

You'll build one of these three through the whole Lehre. Don't keep switching — commit on day one.

**Option A — Schritte** (steps)
A personal habit and goal tracker with an AI coach. Users sign up, add habits ("walk 8000 steps," "no phone after 22:00"), check them off daily, and once a week Claude analyses their data and gives one piece of advice.
*Why pick this:* simple data model, clear AI hook, B2C, easy to demo.

**Option B — TutorBuch** (tutor book)
A booking app for tutors and small private teachers. Tutors create a page, set their availability, students book a slot and pay a deposit. The tutor gets reminders and an organised week.
*Why pick this:* B2B-ish, multi-tenant, calendar logic — looks impressive in a portfolio.

**Option C — Aufsatz-Helfer** (essay helper)
An AI essay reviewer aimed at Austrian *Gymnasium* students. Paste an essay, pick the type (*Erörterung, Interpretation, Textanalyse*), get specific feedback in the style an Austrian teacher would give.
*Why pick this:* AI-heavy, very specific niche, your friends could actually use it.

**Or invent your own.** Whatever you pick, write the name on a sticky note and put it on your monitor. From now on I'll write *"your app"* and you substitute.

✅ Stop when you've written down your project name and a one-sentence pitch.

---

## Übung 1 — Ship a landing page (30 min)

**Deliverable:** a published landing page for your app at a `*.lovable.app` URL.

Open Lovable. New project. Paste a prompt like this (replace with your app):

> Build a one-page landing page for an app called **Schritte** — a personal habit tracker with a weekly AI coach.
>
> Audience: 25–40 year olds who've tried 5 habit apps and quit them all. They want something quiet, not gamified.
>
> Feel: calm, minimal, grown-up, *not* trendy.
>
> Sections:
> 1. Hero — large serif headline, one paragraph subhead, single "Get early access" button
> 2. Three benefits in a row — quiet design, weekly AI coach, no streaks-as-pressure
> 3. How it works — 3 numbered steps
> 4. A founder quote
> 5. Email signup form ("Join the waitlist")
> 6. Minimal footer
>
> Use Fraunces for headlines and Instrument Sans for body. Warm cream background `#FAF7F2`, deep navy text `#1A1F2E`, coral accent `#FF6B6B` used sparingly.

Wait 60 seconds. Look at the result. **It will not be perfect.** That's expected.

Make exactly one improvement via the chat. Something like:

> Make the hero section taller and add a tiny eyebrow text "Coming Q3 2026" above the headline.

Click **Publish** in the top-right. Copy the URL.

✅ Stop when your landing page is live at a `*.lovable.app` URL. Send the URL to me.

---

## Übung 2 — Get the email form working (20 min)

**Deliverable:** an email form that actually saves the email somewhere.

A landing page that doesn't capture emails is a billboard. We want a real signup list from day one.

In Lovable, prompt:

> Connect Supabase to this project. Add a table called `waitlist` with columns: `id` (uuid, primary key), `email` (text, required), `created_at` (timestamp, default now()). Wire the email form on the homepage so submitting an email adds it to the table. Show a friendly "Thanks, you're on the list 🌱" message after submission.

Wait for Lovable to connect Supabase. **Test it yourself:** visit your live page, submit your own email, then check the Supabase dashboard → Tables → `waitlist`. Your email should be there.

✅ Stop when your real email shows up as a row in the Supabase table.

---

## Übung 3 — Look at three competitors (30 min)

**Deliverable:** notes on three competing apps in your niche.

Real freelancers don't build in a vacuum. They study competitors first. Practice this on day one.

For each of your three picks, find a real competitor (Google your idea). For each one, write:

```
[Competitor name + URL]
- What do they do well? (2 points)
- What do they do badly? (2 points)
- What pricing tier would I copy?
- One thing my version will do differently
```

Save this as `notes-competitors.md` in your portfolio folder.

**Why this matters:** every D2C founder you'll ever work with has done this. If you can think this way too, you'll feel like a peer to them, not a junior. That's worth €20k/year in raised rates.

✅ Stop when you have notes on three real competitors.

---

## Übung 4 — Push to GitHub (10 min)

**Deliverable:** your project visible at github.com/yourname/[project-name].

In Lovable, click the **GitHub** icon in the top-right. Connect your account. Lovable creates a repo for you and pushes the code.

Open that repo in your browser. **You now own the code.** Even if Lovable disappeared tomorrow, your project would survive.

Every change you make in Lovable from now on auto-pushes to GitHub. Beautiful.

✅ Stop when you can see your project's files on github.com.

---

## Meisterstück for Woche 1

By the end of this chapter you have:

- [ ] A project name written down with a one-sentence pitch
- [ ] A live landing page at a `*.lovable.app` URL
- [ ] A working email signup that saves to Supabase
- [ ] Competitor notes saved to your portfolio folder
- [ ] The project pushed to GitHub

**Loom recording (60 seconds):** screen-record yourself submitting your email through the form, then showing it appear in the Supabase table. Save to `portfolio/lehre-1/woche-1-meisterstueck.mp4`.

That Loom is the first evidence that you can build a real, working web app. From a phone, on a Sunday evening.

---

## Lehrling Notiz

You'll be tempted next week to start building features instead of practising prompting. Don't. The single skill that compounds the most is how well you talk to AI. Week 2 is entirely about that.

Don't add login or AI features yet. They come later. Stay in front of the landing page and the waitlist this week. Show it to two friends. Get them to sign up. Watch the rows appear.
