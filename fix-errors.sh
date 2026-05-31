#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# Ibeju-Lekki LGA — Fix: social icons + NewsSection crash
# Run from root: bash fix-errors.sh
# ═══════════════════════════════════════════════════════════════════════════════

set -e
GREEN='\033[0;32m'; GOLD='\033[0;33m'; NC='\033[0m'
log()  { echo -e "${GREEN}✓${NC} $1"; }
info() { echo -e "${GOLD}→${NC} $1"; }

echo ""
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo -e "${GOLD}  Fix: social icons + NewsSection crash${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo ""

# ── 1. Install react-icons for social media icons ─────────────────────────────
info "Installing react-icons..."
npm install react-icons --legacy-peer-deps
log "react-icons installed"

# ── 2. Fix Footer.tsx — swap lucide social icons for react-icons ──────────────
info "Fixing components/Footer.tsx..."
cat > components/Footer.tsx << 'EOF'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'

const FOOTER_NAV = [
  {
    heading: 'Government',
    links: [
      { label: 'Executive Chairman',  href: '/government/chairman' },
      { label: 'Executive Council',   href: '/government/executive-council' },
      { label: 'Management Team',     href: '/government/management-team' },
      { label: 'Vision & Mission',    href: '/government/vision' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'SHIEELD Agenda',      href: '/programmes/shieeld' },
      { label: 'Agenda 2029',         href: '/programmes/agenda-2029' },
      { label: '2025 Budget',         href: '/programmes/budget' },
      { label: 'Programme Delivery',  href: '/programmes/delivery' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Pay Levies',          href: '/resources/revenue' },
      { label: 'Career & Jobs',       href: '/resources/careers' },
      { label: 'Waste Collection',    href: '/resources/waste' },
      { label: 'Download Forms',      href: '/resources/forms' },
      { label: 'Report an Issue',     href: '/report' },
    ],
  },
  {
    heading: 'Information',
    links: [
      { label: 'News & Events',       href: '/news' },
      { label: 'About Ibeju-Lekki',   href: '/about/history' },
      { label: 'Traditional Rulers',  href: '/about/traditional-rulers' },
      { label: 'Arts & Culture',      href: '/about/culture' },
      { label: 'Contact Us',          href: '/contact' },
    ],
  },
]

const SETTINGS = {
  address:  'Local Government Secretariat,\nIbeju-Lekki, Lagos State, Nigeria',
  phone:    '+234 (0) 813 000 0000',
  email:    'info@ibejulekki.lg.gov.ng',
  socials:  { twitter: '#', facebook: '#', instagram: '#', youtube: '#' },
}

const SOCIALS = [
  { Icon: FaXTwitter,   href: SETTINGS.socials.twitter,   label: 'X / Twitter' },
  { Icon: FaFacebookF,  href: SETTINGS.socials.facebook,  label: 'Facebook' },
  { Icon: FaInstagram,  href: SETTINGS.socials.instagram, label: 'Instagram' },
  { Icon: FaYoutube,    href: SETTINGS.socials.youtube,   label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060F09] text-white/45">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-16 pb-0">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/05">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/ibeju-lekki-logo-sm.webp" alt="Ibeju-Lekki LGA" fill className="object-contain" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white/90 leading-tight">Ibeju-Lekki LGA</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">Official Government Website</div>
              </div>
            </Link>

            <p className="text-[12.5px] leading-[1.8] mb-5 max-w-[240px]">
              The official website of Ibeju-Lekki Local Government Area, Lagos State, Nigeria.
            </p>

            <div className="space-y-2.5 text-[12px] mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} strokeWidth={1.8} className="text-[#C89B3C] mt-0.5 flex-shrink-0" />
                <span className="leading-snug whitespace-pre-line">{SETTINGS.address}</span>
              </div>
              <a href={`tel:${SETTINGS.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={13} strokeWidth={1.8} className="text-[#C89B3C] flex-shrink-0" />
                {SETTINGS.phone}
              </a>
              <a href={`mailto:${SETTINGS.email}`} className="flex items-center gap-2.5 hover:text-[#C89B3C] transition-colors">
                <Mail size={13} strokeWidth={1.8} className="text-[#C89B3C] flex-shrink-0" />
                {SETTINGS.email}
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/06 flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#0A1F14] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C89B3C] mb-4">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12.5px] hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-[10.5px]">
          <span>© 2026 Ibeju-Lekki Local Government Area. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <a href="https://lagosstate.gov.ng" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors">
              Lagos State Govt <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* Color stripe */}
      <div className="flex h-[5px]" aria-hidden="true">
        <div className="flex-1 bg-[#BE1E2D]" />
        <div className="flex-1 bg-[#1A3A7A]" />
        <div className="flex-1 bg-[#F5A623]" />
        <div className="flex-1 bg-[#1B7A3E]" />
      </div>
    </footer>
  )
}
EOF
log "Footer.tsx fixed"

# ── 3. Fix NewsSection.tsx — guard against empty posts array ──────────────────
info "Fixing components/NewsSection.tsx..."
cat > components/NewsSection.tsx << 'EOF'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Calendar, Tag } from 'lucide-react'

const PLACEHOLDER_NEWS = [
  {
    _id: 'n1',
    title: 'LASG Set To Drive Local Government Development Plan Across All 57 LGAs',
    slug: { current: 'lasg-local-government-development-plan' },
    category: 'governance',
    publishedAt: '2026-04-17T09:00:00Z',
    featured: true,
    summary: 'Conference 57 Chairman Hon. Abdullahi Sesan Olowa appreciates a unified Lagos State plan for accelerated growth and service delivery across all 57 local government areas.',
    coverImage: null,
  },
  {
    _id: 'n2',
    title: 'Stakeholders Meeting on Gbadamosi Alo Street Rehabilitation',
    slug: { current: 'gbadamosi-alo-street-rehabilitation' },
    category: 'infrastructure',
    publishedAt: '2026-03-01T09:00:00Z',
    featured: false,
    summary: 'Council convenes stakeholders to discuss plans for the rehabilitation of Gbadamosi Alo Street and surrounding access roads.',
    coverImage: null,
  },
  {
    _id: 'n3',
    title: 'Women Empowerment Programme Holds at Council Secretariat',
    slug: { current: 'women-empowerment-programme' },
    category: 'community',
    publishedAt: '2025-11-30T09:00:00Z',
    featured: false,
    summary: "Over 300 women from across Ibeju-Lekki participated in the quarterly empowerment programme organised by the council's social development department.",
    coverImage: null,
  },
  {
    _id: 'n4',
    title: '33KV Overhead Power Line Rehabilitation Flag-off at Ibeju Long Bridge',
    slug: { current: '33kv-power-line-rehabilitation' },
    category: 'infrastructure',
    publishedAt: '2025-11-22T09:00:00Z',
    featured: false,
    summary: 'The Executive Chairman flags off rehabilitation of the 33KV overhead power line, a project expected to improve electricity supply across major corridors.',
    coverImage: null,
  },
]

const CATEGORY_LABELS: Record<string, string> = {
  governance: 'Governance', infrastructure: 'Infrastructure', health: 'Health',
  education: 'Education', environment: 'Environment', economy: 'Economy',
  security: 'Security', community: 'Community', events: 'Events',
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

interface NewsPost {
  _id: string
  title: string
  slug: { current: string }
  category: string
  publishedAt: string
  featured: boolean
  summary: string
  coverImage: null | { asset: any; alt?: string }
}

interface Props { posts?: NewsPost[] }

export default function NewsSection({ posts }: Props) {
  // Always fall back to placeholder if posts is empty, null, or undefined
  const data = (posts && posts.length > 0) ? posts : PLACEHOLDER_NEWS

  const featured  = data.find((p) => p.featured) ?? data[0]
  const secondary = data.filter((p) => p._id !== featured._id).slice(0, 3)

  // Safety check — should never hit this but prevents crash
  if (!featured) return null

  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24 border-t border-[#0F3D2E]/06"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C89B3C]" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#0A1F14]/45">Newsroom</span>
            </div>
            <h2
              id="news-heading"
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold text-[#0A1F14] tracking-tight leading-tight"
            >
              What&apos;s happening<br />
              <span className="text-[#0F3D2E]">in the council.</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[12.5px] font-bold text-[#0F3D2E] hover:text-[#C89B3C] transition-colors whitespace-nowrap"
          >
            All Stories <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-5">

          {/* Featured */}
          <Link
            href={`/news/${featured.slug.current}`}
            className="group block border border-[#0F3D2E]/10 rounded-2xl overflow-hidden hover:border-[#C89B3C]/40 hover:shadow-lg transition-all duration-200"
          >
            <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0F3D2E] to-[#1B5E3F] flex items-center justify-center overflow-hidden">
              <span className="text-[clamp(3rem,8vw,5rem)] font-extrabold text-white/06 italic tracking-tighter select-none">
                {CATEGORY_LABELS[featured.category] ?? featured.category}
              </span>
              <span className="absolute top-4 left-4 bg-[#C89B3C] text-[#0A1F14] text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full">
                {CATEGORY_LABELS[featured.category] ?? featured.category}
              </span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-2 text-[10.5px] text-[#0A1F14]/40 mb-3">
                <Calendar size={11} strokeWidth={2} />
                {formatDate(featured.publishedAt)}
              </div>
              <h3 className="text-[clamp(1rem,2.2vw,1.3rem)] font-bold text-[#0A1F14] leading-[1.3] mb-3 group-hover:text-[#0F3D2E] transition-colors">
                {featured.title}
              </h3>
              <p className="text-[13px] text-[#0A1F14]/50 leading-[1.7] line-clamp-3">
                {featured.summary}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0F3D2E] group-hover:text-[#C89B3C] transition-colors">
                Read more <ChevronRight size={13} strokeWidth={2.5} />
              </div>
            </div>
          </Link>

          {/* Secondary */}
          <div className="flex flex-col gap-4">
            {secondary.map((post) => (
              <Link
                key={post._id}
                href={`/news/${post.slug.current}`}
                className="group flex gap-4 border border-[#0F3D2E]/10 rounded-2xl p-4 sm:p-5 hover:border-[#C89B3C]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#0F3D2E]/10 to-[#C89B3C]/15 flex items-center justify-center">
                  <Tag size={18} strokeWidth={1.5} className="text-[#0F3D2E]/50" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#C89B3C]">
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                    <span className="text-[#0A1F14]/20">·</span>
                    <span className="text-[10px] text-[#0A1F14]/35">{formatDate(post.publishedAt)}</span>
                  </div>
                  <h3 className="text-[13px] font-bold text-[#0A1F14] leading-[1.4] line-clamp-2 group-hover:text-[#0F3D2E] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}

            <Link
              href="/news"
              className="flex items-center justify-center gap-2 border border-dashed border-[#0F3D2E]/20 rounded-2xl p-5 text-[12.5px] font-bold text-[#0F3D2E]/60 hover:border-[#0F3D2E]/40 hover:text-[#0F3D2E] transition-all duration-200"
            >
              View all news & events <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
EOF
log "NewsSection.tsx fixed"

echo ""
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  All errors fixed.${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo ""
echo "  Run: npm run dev"
echo ""
