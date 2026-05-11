# Adding a real backend

A backend is what lets users sign up, log in, and save data. This is the chapter where toys become products.

## Connect Supabase to Lovable

In Lovable, click the **Supabase** icon in the top right → "Connect new Supabase project." Lovable creates it for you. Done. You now have a real database and login system, attached to your project, ready to use.

You won't see anything change in the preview yet. The wiring is invisible until you ask for features that use it.

## Practice project: a habit tracker

Build a small "personal habit tracker" and do all three foundational backend features. By the end, you'll understand the same pattern that powers Instagram, Twitter, and Airbnb. Truly. They're all the same idea: **users → log in → create stuff that belongs to them → see other people's stuff with rules about who can see what.**

### 1. User accounts

> Add user accounts using Supabase Auth. Users can sign up with email + password. After signing up they go to a `/dashboard` page. If they're not logged in and try to visit `/dashboard`, send them to `/login`.

### 2. Save data to the database

> On the dashboard, let logged-in users add habits — just a text field and an "Add" button. Save each habit to a Supabase table called `habits` with columns: `id`, `user_id`, `name`, `created_at`. Show the user's habits as a list below the form. Users can only see their own habits — set up Row Level Security so `habit.user_id` must equal the current user.

### 3. Update and delete

> Each habit row has a checkmark button (marks today complete — save to a `habit_completions` table) and a delete button. Show a small green check next to habits completed today.

When this works, you have built the skeleton of half the apps on the App Store.

## Row Level Security — the one thing you must understand

When you save things to Supabase, **by default everyone can read everyone else's data.** That's a disaster waiting to happen.

**Row Level Security (RLS)** is the rule that says *"a user can only read rows where `user_id` equals their own user ID."*

Always ask Lovable:

> Make sure Row Level Security is enabled on every table, and that users can only read, update, and delete their own rows.

If you forget this and ship to the internet, eventually someone will read all your users' data, and you'll have to send the worst email of your life. Don't be that person. Always ask for RLS.

## A mental model for the database

A database is just a stack of spreadsheets that know how to talk to each other.

- **A table** = one spreadsheet (e.g. `habits`)
- **A row** = one line in the spreadsheet (e.g. one habit)
- **A column** = a field (e.g. `name`, `created_at`)
- **A foreign key** = "this column points to a row in another table" (e.g. `user_id` → the `users` table)

That's 80% of database thinking. The other 20% you'll pick up by building.

## What to do when it's all working

Push the project to GitHub (Lovable has a button). You now own the code. Even if you never touch Lovable again, your project keeps existing. That's the difference between a real product and a demo.
