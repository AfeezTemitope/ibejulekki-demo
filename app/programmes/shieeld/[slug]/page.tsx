import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft, ArrowRight, Download, CheckCircle2,
  ShieldCheck, HeartPulse, Landmark, GraduationCap, Leaf, TrendingUp, Users,
} from 'lucide-react'
import Footer from '@/components/Footer'
import { PILLARS } from '@/lib/shieeld'

const ICONS = {
  security: ShieldCheck, health: HeartPulse, infrastructure: Landmark,
  education: GraduationCap, environment: Leaf, economy: TrendingUp, development: Users,
} as const

export function generateStaticParams() {
  return PILLARS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = PILLARS.find((x) => x.slug === params.slug)
  return {
    title: p
      ? `${p.title} — SHIEELD Agenda | Ibeju-Lekki Local Government`
      : 'SHIEELD Agenda | Ibeju-Lekki Local Government',
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = PILLARS.find((x) => x.slug === params.slug)
  if (!p) notFound()
  const Icon = ICONS[p.icon]

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="bg-[#111111] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-white/45 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <Link href="/programmes/shieeld" className="hover:text-white transition-colors">SHIEELD</Link>
              <span className="text-white/25">/</span>
              <span className="text-white font-semibold">{p.title}</span>
            </nav>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-[24px] font-extrabold text-black">
                {p.letter}
              </div>
              <Icon size={26} strokeWidth={1.8} className="text-white/60" />
            </div>
            <h1 className="mt-5 text-[clamp(1.9rem,5vw,3rem)] font-extrabold tracking-tight leading-tight">{p.title}</h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70">{p.summary}</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="max-w-2xl space-y-4 text-[14px] sm:text-[15px] leading-[1.85] text-black/65">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Highlights</span>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-3">
                  <CheckCircle2 size={16} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-yellow" />
                  <span className="text-[13px] leading-snug text-black/65">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-black/10 bg-[#FAFAFA] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-md text-[13px] leading-[1.7] text-black/55">
              Read the full performance report for the projects and figures behind every pillar.
            </p>
            <a
              href="/performance-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-yellow px-6 py-3.5 text-[13px] font-bold text-black transition-colors hover:bg-[#111111] hover:text-brand-yellow"
            >
              <Download size={16} strokeWidth={2.5} /> Download report (PDF)
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link href="/programmes/shieeld" className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#B26B00] transition-colors hover:text-[#111111]">
              <ArrowLeft size={14} strokeWidth={2.5} /> All pillars
            </Link>
            <Link href="/programmes/performance-report" className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#B26B00] transition-colors hover:text-[#111111]">
              Performance Report <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
