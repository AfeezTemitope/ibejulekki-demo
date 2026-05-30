#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# Ibeju-Lekki LGA — Sanity Studio Customisation Script
# Run from the ROOT of your project: bash setup-studio.sh
# ═══════════════════════════════════════════════════════════════════════════════

set -e

GREEN='\033[0;32m'
GOLD='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m'

log()  { echo -e "${GREEN}✓${NC} $1"; }
info() { echo -e "${GOLD}→${NC} $1"; }
err()  { echo -e "${RED}✗${NC} $1"; exit 1; }

echo ""
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo -e "${GOLD}  Ibeju-Lekki LGA — Studio Customisation${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo ""

if [ ! -f "package.json" ]; then
  err "No package.json found. Run this from the root of your project."
fi

# ── 1. CREATE STUDIO FOLDER ───────────────────────────────────────────────────
info "Creating studio assets folder..."
mkdir -p studio
log "studio/ folder ready"

# ── 2. STUDIO THEME ──────────────────────────────────────────────────────────
info "Writing studio/theme.ts..."
cat > studio/theme.ts << 'EOF'
import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white':       '#FFFFFF',
  '--my-black':       '#0A1F14',
  '--my-forest':      '#0F3D2E',
  '--my-gold':        '#C89B3C',
  '--my-bone':        '#FAF7F0',
  '--my-red':         '#BE1E2D',
  '--my-muted':       '#6B7280',
  '--my-border':      'rgba(15,61,46,0.12)',
}

export const theme = buildLegacyTheme({
  /* Base */
  '--black':     props['--my-black'],
  '--white':     props['--my-white'],

  /* Focus ring */
  '--focus-color': props['--my-gold'],

  /* Text */
  '--text-color':   props['--my-black'],
  '--muted-color':  props['--my-muted'],

  /* Brand */
  '--brand-primary': props['--my-forest'],

  /* Default button */
  '--default-button-color':            props['--my-forest'],
  '--default-button-primary-color':    props['--my-forest'],
  '--default-button-success-color':    '#1B7A3E',
  '--default-button-warning-color':    props['--my-gold'],
  '--default-button-danger-color':     props['--my-red'],

  /* State colors */
  '--state-info-color':    props['--my-forest'],
  '--state-success-color': '#1B7A3E',
  '--state-warning-color': props['--my-gold'],
  '--state-danger-color':  props['--my-red'],

  /* Navbar */
  '--main-navigation-color':            props['--my-forest'],
  '--main-navigation-color--inverted':  props['--my-white'],

  /* Top bar */
  '--top-bar-color':           props['--my-forest'],
  '--top-bar-color--inverted': props['--my-white'],

  /* Card */
  '--card-color':        props['--my-white'],
  '--card-border-color': props['--my-border'],
})
EOF
log "studio/theme.ts written"

# ── 3. STUDIO LOGO ────────────────────────────────────────────────────────────
info "Writing studio/StudioLogo.tsx..."
cat > studio/StudioLogo.tsx << 'EOF'
export default function StudioLogo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '0 4px',
    }}>
      <div style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: '#C89B3C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: '12px',
        color: '#0A1F14',
        flexShrink: 0,
        fontFamily: 'system-ui, sans-serif',
      }}>
        IL
      </div>
      <div>
        <div style={{
          fontSize: '13px',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.2,
          fontFamily: 'system-ui, sans-serif',
        }}>
          Ibeju-Lekki LGA
        </div>
        <div style={{
          fontSize: '9px',
          color: 'rgba(255,255,255,0.55)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          lineHeight: 1.2,
          fontFamily: 'system-ui, sans-serif',
        }}>
          Content Studio
        </div>
      </div>
    </div>
  )
}
EOF
log "studio/StudioLogo.tsx written"

# ── 4. STUDIO NAVBAR ─────────────────────────────────────────────────────────
info "Writing studio/StudioNavbar.tsx..."
cat > studio/StudioNavbar.tsx << 'EOF'
import { type NavbarProps } from 'sanity'

export default function StudioNavbar(props: NavbarProps) {
  return (
    <div style={{
      background: '#0F3D2E',
      borderBottom: '1px solid rgba(200,155,60,0.2)',
    }}>
      {/* Color stripe */}
      <div style={{ display: 'flex', height: '3px' }}>
        <div style={{ flex: 1, background: '#BE1E2D' }} />
        <div style={{ flex: 1, background: '#1A3A7A' }} />
        <div style={{ flex: 1, background: '#F5A623' }} />
        <div style={{ flex: 1, background: '#1B7A3E' }} />
      </div>
      {props.renderDefault(props)}
    </div>
  )
}
EOF
log "studio/StudioNavbar.tsx written"

# ── 5. STUDIO DASHBOARD (custom welcome screen) ───────────────────────────────
info "Writing studio/StudioDashboard.tsx..."
cat > studio/StudioDashboard.tsx << 'EOF'
'use client'

const QUICK_LINKS = [
  {
    label: '+ New Article',
    desc: 'Publish a news or event post',
    href: '/studio/intent/create/template=news;type=news/',
    color: '#0F3D2E',
    text: '#FFFFFF',
  },
  {
    label: 'Update Chairman Quote',
    desc: "Edit the chairman's message and stats",
    href: '/studio/intent/edit/id=chairmanMessage;type=chairmanMessage/',
    color: '#C89B3C',
    text: '#0A1F14',
  },
  {
    label: 'Manage Services',
    desc: 'Add or edit quick service links',
    href: '/studio/intent/create/template=quickService;type=quickService/',
    color: '#FFFFFF',
    text: '#0F3D2E',
  },
  {
    label: 'Site Settings',
    desc: 'Update contact details and socials',
    href: '/studio/intent/edit/id=siteSettings;type=siteSettings/',
    color: '#FFFFFF',
    text: '#0F3D2E',
  },
]

const TIPS = [
  'Always add alt text to images — it helps screen readers and Google.',
  'The Summary field is what appears on the homepage news card. Keep it under 200 characters.',
  'Tick "Featured Post" on the article you want to appear as the lead story on the homepage.',
  'Changes go live on the website within 60 seconds of publishing.',
  'You can save a draft without publishing — just click Save and come back later.',
]

export default function StudioDashboard() {
  const tip = TIPS[Math.floor(Date.now() / 86400000) % TIPS.length]
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAF7F0',
      padding: '40px 32px',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#C89B3C',
            marginBottom: '8px',
          }}>
            Ibeju-Lekki LGA · Content Studio
          </div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#0A1F14',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            {greeting} 👋
          </h1>
          <p style={{
            fontSize: '14px',
            color: 'rgba(10,31,20,0.55)',
            marginTop: '6px',
          }}>
            What would you like to update today?
          </p>
        </div>

        {/* Quick actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: '12px',
          marginBottom: '36px',
        }}>
          {QUICK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: 'block',
                background: link.color,
                border: link.color === '#FFFFFF' ? '1.5px solid rgba(15,61,46,0.15)' : 'none',
                borderRadius: '14px',
                padding: '20px',
                textDecoration: 'none',
                transition: 'transform 0.15s, box-shadow 0.15s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'none'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: '13.5px',
                fontWeight: 700,
                color: link.text,
                marginBottom: '5px',
              }}>
                {link.label}
              </div>
              <div style={{
                fontSize: '11.5px',
                color: link.text,
                opacity: 0.6,
                lineHeight: 1.5,
              }}>
                {link.desc}
              </div>
            </a>
          ))}
        </div>

        {/* Content guide */}
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid rgba(15,61,46,0.1)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
        }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#C89B3C',
            marginBottom: '16px',
          }}>
            How to publish a news article
          </div>
          {[
            ['1', 'Click "News & Events" in the left sidebar'],
            ['2', 'Click the pencil/edit icon or "+ New Article" above'],
            ['3', 'Fill in: Headline, Category, Date, Summary, and Body'],
            ['4', 'Upload a Cover Image (minimum 1200×800px)'],
            ['5', 'Tick "Featured Post" if this should lead the homepage'],
            ['6', 'Click Publish — it goes live within 60 seconds'],
          ].map(([num, step]) => (
            <div key={num} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '10px',
            }}>
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: '#0F3D2E',
                color: '#C89B3C',
                fontSize: '10px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '1px',
              }}>
                {num}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(10,31,20,0.7)',
                lineHeight: 1.55,
              }}>
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* Daily tip */}
        <div style={{
          background: 'rgba(200,155,60,0.08)',
          border: '1.5px solid rgba(200,155,60,0.25)',
          borderRadius: '12px',
          padding: '16px 20px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>💡</span>
          <div>
            <div style={{
              fontSize: '10.5px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#C89B3C',
              marginBottom: '4px',
            }}>
              Tip of the day
            </div>
            <div style={{
              fontSize: '13px',
              color: 'rgba(10,31,20,0.65)',
              lineHeight: 1.6,
            }}>
              {tip}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
EOF
log "studio/StudioDashboard.tsx written"

# ── 6. UPDATED sanity.config.ts ───────────────────────────────────────────────
info "Writing updated sanity.config.ts..."
cat > sanity.config.ts << 'EOF'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import {
  BellIcon,
  DocumentTextIcon,
  CogIcon,
  UserIcon,
  HomeIcon,
} from '@sanity/icons'

import { schemaTypes }     from './schemas'
import { theme }           from './studio/theme'
import StudioLogo          from './studio/StudioLogo'
import StudioNavbar        from './studio/StudioNavbar'
import StudioDashboard     from './studio/StudioDashboard'

export default defineConfig({
  name:    'ibeju-lekki-lga',
  title:   'Ibeju-Lekki LGA',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath:  '/studio',

  // ── Brand theme ─────────────────────────────────────────────────────────────
  theme,

  // ── Custom studio components ─────────────────────────────────────────────────
  studio: {
    components: {
      logo:    StudioLogo,
      navbar:  StudioNavbar,
    },
  },

  plugins: [
    structureTool({
      // ── Custom sidebar structure ─────────────────────────────────────────────
      structure: (S) =>
        S.list()
          .title('Ibeju-Lekki CMS')
          .items([
            // Dashboard / Home
            S.listItem()
              .title('Dashboard')
              .icon(HomeIcon)
              .child(
                S.component(StudioDashboard)
                  .title('Welcome — Ibeju-Lekki Content Studio')
              ),

            S.divider(),

            // News & Events
            S.listItem()
              .title('News & Events')
              .icon(DocumentTextIcon)
              .child(
                S.documentTypeList('news')
                  .title('All Articles')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),

            S.divider(),

            // Quick Services
            S.listItem()
              .title('Quick Services')
              .icon(BellIcon)
              .child(
                S.documentTypeList('quickService')
                  .title('Government Services')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),

            // Chairman's Message
            S.listItem()
              .title("Chairman's Message")
              .icon(UserIcon)
              .child(
                S.document()
                  .schemaType('chairmanMessage')
                  .documentId('chairmanMessage')
                  .title("Chairman's Message")
              ),

            S.divider(),

            // Site Settings
            S.listItem()
              .title('Site Settings')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings')
              ),
          ]),

      // ── Default document node (clean editor view) ──────────────────────────
      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([S.view.form()])
      },
    }),

    visionTool({
      defaultApiVersion: '2024-01-01',
    }),
  ],

  schema: { types: schemaTypes },

  // ── Friendly field titles override ────────────────────────────────────────
  document: {
    productionUrl: async (prev, { document }) => {
      const slug = (document as any)?.slug?.current
      if (document._type === 'news' && slug) {
        return `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/news/${slug}`
      }
      return prev
    },
  },
})
EOF
log "sanity.config.ts updated"

# ── 7. INSTALL @sanity/icons if not already present ───────────────────────────
info "Installing @sanity/icons..."
npm install @sanity/icons --legacy-peer-deps
log "@sanity/icons installed"

# ── 8. UPDATE NOTES.md ────────────────────────────────────────────────────────
info "Updating NOTES.md..."
cat >> NOTES.md << 'EOF'

---

## 15. Studio Customisation (added May 2026)

Files added:
- `studio/theme.ts`        — brand color theme (forest green + gold)
- `studio/StudioLogo.tsx`  — IL logo mark + name in nav bar
- `studio/StudioNavbar.tsx` — green navbar with color stripe
- `studio/StudioDashboard.tsx` — welcome screen with quick actions + how-to guide

Install script: `bash setup-studio.sh`

**Rule going forward:** every build must be packaged as a bash script.
Script naming convention: `setup-[feature].sh`
EOF
log "NOTES.md updated"

# ── DONE ─────────────────────────────────────────────────────────────────────
echo ""
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  Studio customisation complete.${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo ""
echo "  Run:  npm run dev"
echo "  Then: http://localhost:3000/studio"
echo ""
echo "  You will see:"
echo "  - Green branded navbar with IL logo"
echo "  - Color stripe at top"
echo "  - Dashboard welcome screen with quick action buttons"
echo "  - Step-by-step guide for non-developers"
echo "  - Tip of the day"
echo ""
