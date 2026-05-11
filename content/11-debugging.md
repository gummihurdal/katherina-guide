# When things break

Things will break. They break for senior engineers too. The difference between a beginner and a senior isn't fewer bugs — it's the order in which you check things.

## The debugging checklist

When something is wrong, go in this exact order. Do not skip.

### 1. Read the error message *carefully*

Most errors *literally tell you what's wrong* in the first line. People panic and don't read.

> *Cannot read property 'name' of undefined*

This is saying: *"You're trying to read `.name` from something that doesn't exist."* That's a complete diagnosis. Now you know where to look.

### 2. Search the error message inside your project

Press `Ctrl+F` (or `Cmd+F`) in your project. Paste the exact error. You'll almost always find the line of code that produced it.

### 3. Paste the error into Lovable

> This error appeared. Here is what I did right before it: [describe]. Here is the full error message: [paste]. Find and fix it. Explain in plain English what was wrong.

### 4. Switch to Claude Code if Lovable goes in circles

If Lovable tries to fix the bug three times and makes it worse each time, **stop**. Push to GitHub, open the project locally, run `claude`, and ask:

> I have a bug. Here's what's happening: [describe]. Here's the error: [paste]. Read the relevant files and reason about it. Don't change anything yet — first tell me what you think is wrong and why.

Claude Code can see the whole codebase at once. It often spots things Lovable can't because Lovable only sees small pieces at a time.

### 5. Revert if you've made things worse

Lovable's revert button is your friend. If three prompts in a row have made things worse, **stop. Revert.** Then approach the problem differently. There's no shame in this. Senior engineers do it daily.

## Security things to never get wrong

If you ship to the internet, these are non-negotiable.

- ✅ **Row Level Security** enabled on every Supabase table
- ✅ **No API keys in your code** — always in environment variables (Lovable has a Secrets panel)
- ✅ **Stripe webhook signature verification** turned on for any payment code
- ✅ **No logging passwords, tokens, or full credit card numbers** — ever, in any environment
- ✅ For anything serious, ask Claude Code:

> Audit this codebase for the most common web security mistakes: XSS, SQL injection, missing auth checks, exposed secrets, missing CSRF protection. List everything risky and rank by severity.

Run that audit before any product you actually charge money for.

## When you're stuck *stuck*

Two hours, no progress, frustration rising. Time to do the thing that always works:

> I've been stuck on [X] for over an hour. Here's what I've tried: [list]. Here are the error messages I've seen: [paste]. **What questions should I be asking that I'm not asking?**

That last sentence — *"what questions should I be asking that I'm not asking?"* — is the unlock. It works on Claude. It works on senior developers. It works on humans in general.

## The kindest thing you can do for future-you

Write **README.md** files. Always. Even for your own personal projects. Especially for those.

In every project, ask Lovable:

> Generate a README.md that explains: what this project does in one sentence, how to run it locally, what environment variables it needs, and any "gotchas" someone new should know.

Six months from now, when you reopen a project you'd forgotten, the README is the difference between *"oh yes, of course"* and *"what is this even."*

## A final thought on breaking things

Every developer in the world breaks things. Senior developers just break them in private, fix them quickly, and don't tell anyone.

You'll break production at some point. You'll feel terrible for a few hours. Then you'll add a check so it doesn't happen again, and you'll be a slightly better engineer for it. This is the actual job.

Bug-free isn't real. Quick-to-fix is real. Aim for that.
