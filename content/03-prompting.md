# Prompting like a senior developer

The single biggest skill is **how you ask.** Bad prompts give you generic AI-looking sites. Good prompts give you sites that look intentional, like a designer made them.

## The four-part recipe

Every good prompt has four parts:

1. **What** — what is the thing? (a booking app, a portfolio, a dashboard)
2. **Who** — who is it for? Their age, mood, what they care about.
3. **How it should feel** — three adjectives. *Calm. Premium. Confident.* Not "beautiful" — that word means nothing.
4. **Concrete references** — *"Like Linear's pricing page"* beats *"modern style"* every time.

## Compare

❌ "Make me a beautiful website for a restaurant."

✅ "Build a one-page site for a small vegetarian restaurant in Salzburg called *Wurzel*. Audience: 30–50 year olds who care about local sourcing. Feel: warm, slow, grown-up — not trendy. Hero with a big photo of a wooden table, menu in two columns with prices on the right, address with a map, big reservation button at the bottom. Reference style: a quieter version of the Aesop or Loro Piana websites. Earth tones, no bright colors. Serif font for the menu items."

The second one will make Lovable produce something you'd actually publish.

## The "plan first" trick

In Lovable, before you let it build a big feature, ask:

> Before you build, show me a plan: what pages, what sections on each page, what data the database needs, and what the user flow is. Don't write any code yet — just the plan.

Read the plan. Edit it. Tell Lovable what to change. *Then* say *"good, build it."* This costs almost no credits and gives you a much better result.

## Three rules

### 1. One change at a time

Don't say "fix the spacing, add a blog, change the color, and make it faster." Lovable will half-do everything. Make one change, look at the result, decide if you like it, move on.

### 2. Be specific about *which* thing

Not *"the button"* — *"the green Submit button at the bottom of the contact form."* Even better: paste a screenshot and circle what you mean.

### 3. If it breaks badly, undo

Lovable has a revert button. Don't try to prompt your way out of a bad state. Go back two steps and approach it differently. This is the single biggest credit-saver.

## A prompt template you can steal

```
Build [WHAT] for [WHO].

Feel: [three adjectives].
Reference style: like [specific website or brand].

Sections:
1. [section] — [what it contains]
2. [section] — [what it contains]
3. [section] — [what it contains]

Design rules:
- Generous whitespace, at least 80px between sections
- Maximum 2 fonts and 3 colors (one neutral, one dark, one accent)
- Big, confident headlines (at least 48px on desktop)
- Mobile-first: test on a phone-width screen

Skip generic AI-looking stuff: no purple gradients, no Inter font, 
no rounded everything. Make intentional choices.
```

Save this template somewhere. You'll use it a hundred times.

## The single best meta-prompt

After Lovable builds something, paste this *once*:

> Now review what you just built and improve it. Tighten the spacing. Make the typography hierarchy clearer with bigger size jumps between H1, H2, and body. Make sure the primary call-to-action is the most visually prominent thing on the page. Ensure mobile looks just as good as desktop.

This single prompt makes almost every site about 30% better. Use it as your "polish pass" before publishing.
