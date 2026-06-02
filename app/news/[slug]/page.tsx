import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { newsPostBySlugQuery, allNewsSlugsQuery } from '@/lib/queries'
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const revalidate = 60

const CATEGORY_LABELS: Record<string, string> = {
  governance:'Governance', infrastructure:'Infrastructure', health:'Health',
  education:'Education', environment:'Environment', economy:'Economy',
  security:'Security', community:'Community', events:'Events',
}

const PLACEHOLDER_POSTS: Record<string, any> = {
  'lasg-local-government-development-plan': {
    _id:'n1', title:'LASG Set To Drive Local Government Development Plan Across All 57 LGAs',
    slug:{ current:'lasg-local-government-development-plan' }, category:'governance',
    publishedAt:'2026-04-17T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:'Conference 57 Chairman Hon. Abdullahi Sesan Olowa appreciates a unified Lagos State plan for accelerated growth and service delivery across all 57 local government areas.',
    body: null, coverImage: null,
  },
  'gbadamosi-alo-street-rehabilitation': {
    _id:'n2', title:'Stakeholders Meeting on Gbadamosi Alo Street Rehabilitation',
    slug:{ current:'gbadamosi-alo-street-rehabilitation' }, category:'infrastructure',
    publishedAt:'2026-03-01T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:'Council convenes stakeholders to discuss plans for the rehabilitation of Gbadamosi Alo Street and surrounding access roads.',
    body: null, coverImage: null,
  },
  'women-empowerment-programme': {
    _id:'n3', title:'Women Empowerment Programme Holds at Council Secretariat',
    slug:{ current:'women-empowerment-programme' }, category:'community',
    publishedAt:'2025-11-30T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:"Over 300 women from across Ibeju-Lekki participated in the quarterly empowerment programme organised by the council's social development department.",
    body: null, coverImage: null,
  },
  '33kv-power-line-rehabilitation': {
    _id:'n4', title:'33KV Overhead Power Line Rehabilitation Flag-off at Ibeju Long Bridge',
    slug:{ current:'33kv-power-line-rehabilitation' }, category:'infrastructure',
    publishedAt:'2025-11-22T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:'The Executive Chairman flags off rehabilitation of the 33KV overhead power line, a project expected to improve electricity supply across major corridors.',
    body: null, coverImage: null,
  },
  'akodo-market-stalls-commissioning': {
    _id:'n5', title:'Executive Chairman Commissions New Market Stalls at Akodo',
    slug:{ current:'akodo-market-stalls-commissioning' }, category:'economy',
    publishedAt:'2025-10-14T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:'Hon. Abdullahi Sesan Olowa commissions 120 new market stalls at Akodo market, boosting local trade and providing new livelihoods for residents.',
    body: null, coverImage: null,
  },
  'free-medical-outreach-2025': {
    _id:'n6', title:'Free Medical Outreach Reaches Over 2,000 Residents in Ibeju-Lekki',
    slug:{ current:'free-medical-outreach-2025' }, category:'health',
    publishedAt:'2025-09-05T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:"The council's health department conducts a free medical outreach covering malaria, hypertension, diabetes, and eye care.",
    body: null, coverImage: null,
  },
  'inter-ward-security-summit': {
    _id:'n7', title:'Ibeju-Lekki Hosts Inter-Ward Security Summit',
    slug:{ current:'inter-ward-security-summit' }, category:'security',
    publishedAt:'2025-08-20T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:'Ward leaders, community heads, and security agencies gather at the council secretariat to align on a joint security framework.',
    body: null, coverImage: null,
  },
  'free-jamb-forms-distribution': {
    _id:'n8', title:'Council Begins Distribution of Free JAMB Forms to SS3 Students',
    slug:{ current:'free-jamb-forms-distribution' }, category:'education',
    publishedAt:'2025-07-10T09:00:00Z', author:'Ibeju-Lekki LGA Communications',
    summary:"Over 150 SS3 students across public schools in Ibeju-Lekki receive free JAMB registration forms as part of the chairman's education empowerment initiative.",
    body: null, coverImage: null,
  },
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(allNewsSlugsQuery)
    const placeholderSlugs = Object.keys(PLACEHOLDER_POSTS).map((s) => ({ slug: s }))
    return [...(slugs ?? []), ...placeholderSlugs]
  } catch {
    return Object.keys(PLACEHOLDER_POSTS).map((s) => ({ slug: s }))
  }
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' })

export default async function NewsPost({ params }: { params: { slug: string } }) {
  let post = null
  try {
    post = await client.fetch(newsPostBySlugQuery, { slug: params.slug })
  } catch {}

  // Fall back to placeholder if not in CMS
  if (!post) post = PLACEHOLDER_POSTS[params.slug] ?? null
  if (!post) notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">

        {/* Hero banner */}
        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#1B5E3F] py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[11.5px] font-semibold text-white/60 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={14} strokeWidth={2} /> Back to News
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] bg-[#C89B3C] text-[#0A1F14] px-3 py-1 rounded-full">
                {CATEGORY_LABELS[post.category] ?? post.category}
              </span>
            </div>
            <h1 className="text-[clamp(1.5rem,4vw,2.6rem)] font-extrabold text-white leading-[1.15] tracking-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[11.5px] text-white/55">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} strokeWidth={2} />
                {formatDate(post.publishedAt)}
              </span>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <Tag size={12} strokeWidth={2} />
                  {post.author}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">

          {/* Summary / lead paragraph */}
          <p className="text-[16px] sm:text-[17px] text-[#0A1F14]/70 leading-[1.8] font-medium border-l-[3px] border-[#C89B3C] pl-5 mb-10">
            {post.summary}
          </p>

          {/* Full body — shows when added in CMS */}
          {post.body ? (
            <div className="prose prose-lg max-w-none text-[#0A1F14]/75">
              <p className="text-[14px] text-[#0A1F14]/45 italic">
                Full article content coming soon.
              </p>
            </div>
          ) : (
            <div className="bg-[#FAFAF8] border border-[#0F3D2E]/08 rounded-2xl p-8 text-center">
              <div className="text-[13px] text-[#0A1F14]/40 mb-2">Full article content</div>
              <div className="text-[12px] text-[#0A1F14]/30">
                The complete article will appear here once published in the CMS.
              </div>
            </div>
          )}

          {/* Share + back */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-[#0F3D2E]/08">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold text-[#0F3D2E] hover:text-[#C89B3C] transition-colors"
            >
              <ArrowLeft size={14} strokeWidth={2.5} /> All News & Events
            </Link>
            <button
              onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#0A1F14]/50 hover:text-[#0F3D2E] transition-colors"
            >
              <Share2 size={13} strokeWidth={2} /> Share this article
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
