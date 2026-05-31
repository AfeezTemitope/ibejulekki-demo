# Ibeju-Lekki LGA — Project Notes
> Last updated: May 2026  
> Developer: Afeez Temitope  
> Repo: github.com/AfeezTemitope/ibejulekki-demo  
> Live: Vercel (connected to main branch — auto-deploys on push)

---

## 1. What This Project Is

The official website for Ibeju-Lekki Local Government Area, Lagos State, Nigeria.  
Built to replace the existing 2014 WordPress site at the current domain.  
Reference design: lagosstate.gov.ng — but better in every way.

---

## 2. Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Speed, SEO, SSR, PWA-ready |
| Styling | Tailwind CSS | Utility-first, fast, responsive |
| Font | Poppins (Google Fonts) | Official LGA brand font |
| Icons | lucide-react | Clean, consistent icon set |
| CMS | Sanity v3 | Headless CMS — staff can update without a developer |
| Hosting | Vercel | Auto-deploy from GitHub main branch |
| Domain | Connected via Vercel → NIRA (pending) |
| Language | TypeScript |

---

## 3. Brand Tokens

| Name | Value | Usage |
|---|---|---|
| forest | #0F3D2E | Primary green — nav utility bar, buttons, accents |
| moss | #1B5E3F | Secondary green |
| ink | #0A1F14 | Body text, dark backgrounds |
| gold | #C89B3C | Accent — highlights, active states, CTA hover |
| red | #BE1E2D | Alerts, danger states |
| bone | #FAF7F0 | Off-white background |
| cream | #EDE8DC | Subtle section backgrounds |

**Color stripe** (top of header + bottom of footer):  
Red `#BE1E2D` · Blue `#1A3A7A` · Yellow `#F5A623` · Green `#1B7A3E`

---

## 4. Project Structure

```
ibejulekki-demo/
│
├── app/
│   ├── layout.tsx              # Root layout — Poppins font, boot loader, Header
│   ├── page.tsx                # Homepage — fetches from Sanity, falls back to placeholders
│   ├── globals.css             # Base styles, animations, scroll, marquee
│   └── studio/[[...tool]]/
│       └── page.tsx            # Sanity CMS studio (route: /studio)
│
├── components/
│   ├── Header.tsx              # Sticky header — stripe, utility bar, nav, mobile drawer
│   ├── Hero.tsx                # Hero section — headline, chairman card, SHIEELD tiles, ticker
│   ├── QuickServices.tsx       # 6-card services grid
│   ├── ChairmanSection.tsx     # Chairman photo, pull quote, stats
│   ├── NewsSection.tsx         # Featured + 3 secondary news posts from CMS
│   ├── SubscribeSection.tsx    # Email subscribe + push notification opt-in
│   └── Footer.tsx              # Full footer — nav, contact, socials, stripe
│
├── schemas/                    # Sanity CMS content schemas
│   ├── index.ts                # Exports all schemas
│   ├── news.ts                 # News & Events document type
│   ├── quickService.ts         # Quick Services document type
│   ├── chairmanMessage.ts      # Chairman's Message (singleton)
│   └── siteSettings.ts         # Site-wide settings — address, socials, emergency lines
│
├── lib/
│   ├── sanity.ts               # Sanity client + urlFor() image helper
│   └── queries.ts              # All GROQ queries for the site
│
├── public/
│   ├── ibeju-lekki-logo.webp   # Main logo (used in header)
│   ├── ibeju-lekki-logo-sm.webp # Small logo (used in mobile drawer + footer)
│   └── chairman.webp           # Hon. Abdullahi Sesan Olowa — converted from JPG, 66KB
│
├── sanity.config.ts            # Sanity studio configuration
├── tailwind.config.ts          # Tailwind config — brand color tokens + Poppins
├── .env.local                  # Secrets — NOT committed to git
├── setup.sh                    # One-command setup script
└── reset.sh                    # Resets codebase to clean foundation (keeps boot loader)
```

---

## 5. Environment Variables

File: `.env.local` (never commit this — already in .gitignore)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

Get these from: https://sanity.io/manage → your project → API tab

---

## 6. CMS — Sanity

### How to log in

**Step 1 — Create your Sanity account (one time)**
1. Go to https://sanity.io
2. Sign up / log in with GitHub or Google
3. Create a new project — name it "Ibeju-Lekki LGA"
4. Choose dataset name: `production`
5. Copy the **Project ID** shown on the dashboard

**Step 2 — Add Project ID to .env.local**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=paste_your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**Step 3 — Access the studio locally**
```bash
npm run dev
# Then visit: http://localhost:3000/studio
```

**Step 4 — Access the studio on live site**
```
https://your-vercel-url.vercel.app/studio
```

**Step 5 — Add environment variables to Vercel**
1. Go to Vercel dashboard → your project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
3. Redeploy

### Adding a staff member to the CMS
1. Go to https://sanity.io/manage
2. Select the Ibeju-Lekki project
3. Members → Invite → enter their email
4. Set role: Editor (can add/edit content, cannot change schemas)

### What staff can manage in the CMS
- **News & Events** — add/edit/delete articles, set featured post
- **Quick Services** — update service links and descriptions
- **Chairman's Message** — update quote, photo, stats
- **Site Settings** — update address, phone, email, social handles

---

## 7. Content Schemas

### News & Events
Fields: title, slug (auto-generated), category, publishedAt, featured (boolean),  
coverImage (with alt text), summary (max 200 chars), body (rich text), author, tags

Categories: Governance, Infrastructure, Health, Education, Environment,  
Economy, Security, Community, Events

### Quick Services
Fields: label, description, icon (Lucide icon name), href, external (boolean),  
order (display position), active (boolean)

### Chairman's Message
Singleton document — only one exists.  
Fields: name, title, photo, pullQuote, fullMessage (rich text), stats (max 4)

### Site Settings
Singleton document — only one exists.  
Fields: siteName, tagline, address, phone, email, officeHours, socials  
(twitter, facebook, instagram, youtube), emergencyLines

---

## 8. Homepage Sections (in order)

1. **Hero** — headline, chairman card with photo, SHIEELD 7-tile grid, investment ticker
2. **Quick Services** — 6 service cards (CMS → falls back to placeholder)
3. **Chairman's Message** — full photo, pull quote, 4 stats (CMS → falls back to placeholder)
4. **News & Events** — 1 featured + 3 secondary posts (CMS → falls back to placeholder)
5. **Subscribe** — email + push notification opt-in (client component)
6. **Footer** — 4-column nav, contact details, socials, color stripe

**Data flow:**  
`app/page.tsx` runs 3 parallel Sanity fetches (news, services, chairman).  
If Sanity is not yet seeded or returns an error, each section falls back silently  
to hardcoded placeholder data. No broken pages.

Revalidation: every 60 seconds (`export const revalidate = 60`)

---

## 9. Key Design Decisions

- **White backgrounds only** — no green section backgrounds. Green/gold used on text, borders, icons, active states only
- **Mobile-first** — every component built small-screen first, then scaled up
- **Boot loader** — minimum 3.5s display, cycles all 7 SHIEELD pillars with letter animation. Lives in `app/layout.tsx` inline styles so it fires before any CSS loads
- **Lucide icons only** — no system emojis, no other icon libraries
- **Poppins throughout** — loaded via Google Fonts in layout.tsx head, declared as default sans in tailwind.config.ts

---

## 10. What Is Still Pending

### Homepage
- [ ] SHIEELD Agenda standalone section (below hero teaser)
- [ ] Language switcher (EN / YO / IG / HA / Pidgin) — Google Translate API for first four, manual JSON for Pidgin

### Inner Pages (not yet built)
- [ ] /government/chairman
- [ ] /government/executive-council
- [ ] /programmes/shieeld
- [ ] /news (listing page)
- [ ] /news/[slug] (individual article)
- [ ] /about/history
- [ ] /contact
- [ ] /resources/revenue, /resources/careers, /resources/waste

### Backend / Infrastructure
- [ ] PWA setup (manifest.json, service worker)
- [ ] Push notification API route (store subscriptions, send on new post)
- [ ] Email subscription API route
- [ ] WordPress XML migration script (waiting for XML export from ICT)
- [ ] Image scraper (download all media from old site before it goes offline)

### Content (waiting on team)
- [ ] Official quick services list (6 confirmed services + URLs)
- [ ] Chairman's approved pull quote
- [ ] Real social media handles
- [ ] Official secretariat address + phone number
- [ ] Minimum 3 news articles with cover images
- [ ] WordPress admin credentials (for XML export)
- [ ] Domain registrar access (for DNS switch on go-live day)

---

## 11. Content Team Request (outstanding)

Sent to: Content & Communications Team  
Status: Pending  

Items requested:
1. 6 quick services with names, descriptions, URLs
2. Minimum 3 news articles (headline, date, category, summary, cover image 1200×800px+)
3. Chairman's approved official quote (max 3 sentences, cleared by chairman's office)
4. Verified social media handles (X, Facebook, Instagram, YouTube)
5. Full official secretariat contact details (address, phone, email, hours)

---

## 12. Migration Plan (WordPress → Sanity)

1. Get WordPress admin login from ICT department
2. WordPress Admin → Tools → Export → All Content → Download XML
3. Immediately run image scraper on old site to download all media files
4. Run migration script (to be written) to import XML into Sanity
5. Verify all content transferred correctly
6. Old site stays live until go-live day
7. On go-live: switch DNS from old host to Vercel

**No database access needed. XML file is sufficient.**

---

## 13. Useful Commands

```bash
# Start dev server
npm run dev

# Access CMS locally
open http://localhost:3000/studio

# Deploy to production (auto — just push to main)
git add . && git commit -m "your message" && git push origin main

# Run full setup from scratch
bash setup.sh

# Reset codebase to clean foundation (keeps boot loader)
bash reset.sh
```

---

## 14. Contacts

| Role | Name | Contact |
|---|---|---|
| Developer | Afeez Temitope | GitHub: AfeezTemitope |
| Concept & Supervision | CTA Communications | — |
| UI/UX Design | Ikreate Ltd | — |
| Content | Gbenga, Dimeji | — |
| CMS Management | Gbenga, HOU Information | — |
| Website Management | ICT & Information Depts | — |

---

*To resume work in a new Claude session: paste this entire NOTES.md file as your first message.*
