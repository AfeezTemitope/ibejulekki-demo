import Link from 'next/link'
import { client } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react'
import Footer from '@/components/Footer'

export const revalidate = 60

export const metadata = {
  title: 'News & Events | Ibeju-Lekki Local Government',
  description: 'Latest news, announcements and events from Ibeju-Lekki Local Government Area.',
}

const allNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) [0...50] {
    _id, title, slug, category, publishedAt, featured, summary,
    "coverImage": coverImage { asset, alt, hotspot }
  }
`

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
    summary: 'Over 300 women from across Ibeju-Lekki participated in the quarterly empowerment programme organised by the council social development department.',
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
  {
    _id: 'n5',
    title: 'Executive Chairman Commissions New Market Stalls at Akodo',
    slug: { current: 'akodo-market-stalls-commissioning' },
    category: 'economy',
    publishedAt: '2025-10-14T09:00:00Z',
    featured: false,
    summary: 'Hon. Abdullahi Sesan Olowa commissions 120 new market stalls at Akodo market, boosting local trade and providing new livelihoods for residents.',
    coverImage: null,
  },
  {
    _id: 'n6',
    title: 'Free Medical Outreach Reaches Over 2,000 Residents in Ibeju-Lekki',
    slug: { current: 'free-medical-outreach-2025' },
    category: 'health',
    publishedAt: '2025-09-05T09:00:00Z',
    summary: 'The council health department, in partnership with private hospitals, conducts a free medical outreach covering malaria, hypertension, diabetes, and eye care.',
    featured: false,
    coverImage: null,
  },
  {
    _id: 'n7',
    title: 'Ibeju-Lekki Hosts Inter-Ward Security Summit',
    slug: { current: 'inter-ward-security-summit' },
    category: 'security',
    publishedAt: '2025-08-20T09:00:00Z',
    featured: false,
    summary: 'Ward leaders, community heads, and security agencies gather at the council secretariat to align on a joint security framework for the local government area.',
    coverImage: null,
  },
  {
    _id: 'n8',
    title: 'Council Begins Distribution of Free JAMB Forms to SS3 Students',
    slug: { current: 'free-jamb-forms-distribution' },
    category: 'education',
    publishedAt: '2025-07-10T09:00:00Z',
    featured: false,
    summary: 'Over 150 SS3 students across public schools in Ibeju-Lekki receive free JAMB registration forms as part of the chairman education empowerment initiative.',
    coverImage: null,
  },
]

const CATEGORY_LABELS: Record<string, string> = {
  governance: 'Governance', infrastructure: 'Infrastructure', health: 'Health',
  education: 'Education', environment: 'Environment', economy: 'Economy',
  security: 'Security', community: 'Community', events: 'Events',
}

const CATEGORY_COLORS: Record<string, string> = {
  governance:     'bg-[#111111] text-white',
  infrastructure: 'bg-[#1A3A7A] text-white',
  health:         'bg-emerald-700 text-white',
  education:      'bg-brand-yellow text-black',
  environment:    'bg-green-700 text-white',
  economy:        'bg-amber-600 text-white',
  security:       'bg-[#BE1E2D] text-white',
  community:      'bg-purple-700 text-white',
  events:         'bg-teal-700 text-white',
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function NewsPage() {
  const fetched = await client.fetch(allNewsQuery).catch(() => null)
  const posts   = (fetched && fetched.length > 0) ? fetched : PLACEHOLDER_NEWS
  const featured  = posts.find((p: any) => p.featured) ?? posts[0]
  const rest      = posts.filter((p: any) => p._id !== featured._id)

  return (
    <>

      <main className="min-h-screen bg-white">

        {/* Page header */}
        <div className="border-b border-[#111111]/08 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#111111]/45">Newsroom</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-[#111111] tracking-tight leading-tight">
                News &amp; Events
              </h1>
              <div className="relative max-w-xs w-full">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#111111]/35" strokeWidth={2} />
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full pl-9 pr-4 py-2.5 text-[13px] border border-[#111111]/15 rounded-full focus:outline-none focus:border-brand-yellow/50 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">

          {/* Featured */}
          <div className="mb-12">
            <div className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#111111]/35 mb-5">Featured Story</div>
            <Link
              href={`/news/${featured.slug.current}`}
              className="group grid grid-cols-1 lg:grid-cols-[3fr_2fr] border border-[#111111]/10 rounded-2xl overflow-hidden hover:border-brand-yellow/40 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[280px] bg-gradient-to-br from-brand-yellow to-[#E08E0B] flex items-center justify-center overflow-hidden">
                <span className="text-[clamp(4rem,10vw,7rem)] font-extrabold text-black/10 italic tracking-tighter select-none">
                  {CATEGORY_LABELS[featured.category] ?? featured.category}
                </span>
                <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full ${CATEGORY_COLORS[featured.category] ?? 'bg-brand-yellow text-black'}`}>
                  Featured
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[10.5px] text-[#111111]/40 mb-3">
                  <Calendar size={11} strokeWidth={2} />
                  {formatDate(featured.publishedAt)}
                </div>
                <h2 className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-bold text-[#111111] leading-[1.3] mb-3 group-hover:text-[#B26B00] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[13.5px] text-[#111111]/55 leading-[1.75] mb-5 line-clamp-3">
                  {featured.summary}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#111111] group-hover:text-[#B26B00] transition-colors">
                  Read full article <ArrowRight size={13} strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          </div>

          {/* All articles */}
          <div>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#111111]/35 mb-5">
              All Articles ({rest.length})
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/news/${post.slug.current}`}
                  className="group flex flex-col border border-[#111111]/10 rounded-2xl overflow-hidden hover:border-brand-yellow/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-brand-yellow/12 to-brand-yellow/10 flex items-center justify-center overflow-hidden">
                    <Tag size={28} strokeWidth={1} className="text-[#111111]/20" />
                    <span className={`absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? 'bg-[#111111] text-white'}`}>
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#111111]/40 mb-2.5">
                      <Calendar size={10} strokeWidth={2} />
                      {formatDate(post.publishedAt)}
                    </div>
                    <h3 className="text-[13.5px] font-bold text-[#111111] leading-[1.4] mb-2 line-clamp-2 group-hover:text-[#B26B00] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-[12px] text-[#111111]/50 leading-[1.65] line-clamp-2 mb-4">
                      {post.summary}
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#111111] group-hover:text-[#B26B00] transition-colors mt-auto">
                      Read more <ArrowRight size={12} strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
