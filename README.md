# Usama Hussain — Portfolio

A one-page personal portfolio built with **Next.js** (App Router) — mobile-friendly, with a
light/dark theme toggle and scroll-in animations. Ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Deploy to Vercel (live URL anyone can view)

**Option A — via GitHub (recommended):**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**. You get a live URL.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel          # follow prompts, then:
vercel --prod
```

## Customize

- Text, projects, and links: `app/page.js`
- Colours / theme tokens: `app/globals.css` (`:root` = light, `[data-theme="dark"]` = dark)
- Profile photo: replace `public/my_formalish.png`
