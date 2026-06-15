import Link from 'next/link'
import {
  ArrowRight, ShieldCheck, HeartPulse, Landmark,
  GraduationCap, Leaf, TrendingUp, Users,
} from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The SHIEELD Agenda | Ibeju-Lekki Local Government',
  description:
    'The seven pillars of the SHIEELD Agenda guiding Ibeju-Lekki Local Government.',
}

const PILLARS = [
  { letter: 'S', title: 'Security',        Icon: ShieldCheck,   body: 'Strengthening the local security architecture and fostering community cooperation, so residents and businesses operate in a safe and stable environment.' },
  { letter: 'H', title: 'Health',          Icon: HeartPulse,    body: 'Rehabilitating and expanding primary health centres and recruiting more doctors and health workers to widen access to quality, affordable care.' },
  { letter: 'I', title: 'Infrastructure',  Icon: Landmark,      body: 'Investing in roads, a modern council secretariat, ICT automation and public works that connect communities and improve service delivery.' },
  { letter: 'E', title: 'Education',        Icon: GraduationCap, body: 'Free JAMB and WASSCE forms, bursaries and scholarships, and weekend coaching with Pan-Atlantic University to lift student outcomes.' },
  { letter: 'E', title: 'Environment',     Icon: Leaf,          body: 'Daily street sweeping, the Cleaner Ibeju-Lekki initiative, de-flooding of canals and channels, and sustainable waste management.' },
  { letter: 'L', title: 'Local Economy',   Icon: TrendingUp,    body: 'Reforming revenue administration, with roughly 500 percent growth in internally generated revenue, and supporting markets, traders and small enterprise.' },
  { letter: 'D', title: 'Development',      Icon: Users,         body: 'Inclusive social intervention, including conditional cash transfers to vulnerable households, and planned, balanced growth across every ward.' },
]

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#111111] transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Programmes</span>
              <span className="text-black/30">/</span>
              <span className="text-[#111111] font-semibold">SHIEELD Agenda</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#F5A623]" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Programmes · Agenda 2029</span>
            </div>
            <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold text-[#111111] tracking-tight leading-tight">
              The <span className="text-[#B26B00]">SHIEELD</span> Agenda
            </h1>
            <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">
              Seven commitments shaping Ibeju-Lekki under the leadership of Hon. Abdullahi Sesan Olowa,
              Executive Chairman. Each letter stands for a focus area that guides the projects and
              policies of the council.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {PILLARS.map((p, i) => {
              const Icon = p.Icon
              return (
                <div key={i} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 sm:p-6 hover:border-[#F5A623]/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5A623] text-black flex items-center justify-center font-extrabold text-[20px]">
                    {p.letter}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon size={15} strokeWidth={2} className="text-[#111111]" />
                      <h2 className="text-[15px] font-bold text-[#111111]">{p.title}</h2>
                    </div>
                    <p className="text-[13px] text-black/55 leading-[1.75]">{p.body}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-[#111111] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5A623] mb-1.5">Performance Report 2021 – 2025</div>
              <p className="text-[14px] text-white/70 leading-relaxed max-w-md">
                See how the SHIEELD Agenda has been delivered across the local government.
              </p>
            </div>
            <Link href="/programmes/performance-report" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F5A623] text-black text-[13px] font-bold rounded-full hover:bg-white transition-colors whitespace-nowrap">
              View the Report <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
