import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import Footer from '@/components/Footer'
import type { Member } from '@/lib/cabinet'

const HONORIFICS = ['Hon.', 'Engr.', 'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Barr.', 'Alh.', 'Chief', 'Prince', 'Princess', 'Pastor', 'Arc.', 'Surv.', 'Mallam']

function initials(name: string) {
  const parts = name.split(' ').filter((w) => w && !HONORIFICS.includes(w))
  return parts.slice(0, 2).map((w) => w[0] || '').join('').toUpperCase()
}

function Avatar({ m }: { m: Member }) {
  if (m.image) {
    return (
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-black/[0.06]">
        <Image src={m.image} alt={m.name} fill className="object-cover" sizes="48px" />
      </div>
    )
  }
  if (m.name === 'To be confirmed') {
    return (
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-black/30">
        <User size={20} strokeWidth={1.8} />
      </div>
    )
  }
  return (
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[15px] font-extrabold text-black">
      {initials(m.name)}
    </div>
  )
}

export default function TeamPage({
  eyebrow, title, intro, members, group,
}: {
  eyebrow: string
  title: string
  intro: string
  members: Member[]
  group: string
}) {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#111111] transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Government</span>
              <span className="text-black/30">/</span>
              <span className="text-[#111111] font-semibold">{group}</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{eyebrow}</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold text-[#111111] tracking-tight leading-tight">{title}</h1>
            <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">{intro}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((m, i) => (
              <div key={i} className="flex items-start gap-3.5 rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
                <Avatar m={m} />
                <div className="min-w-0">
                  <div className="text-[14px] font-bold text-[#111111] leading-snug">{m.name}</div>
                  <div className="mt-0.5 text-[12.5px] font-medium text-[#B26B00] leading-snug">{m.role}</div>
                  {m.ward ? (
                    <span className="mt-2 inline-block rounded-full bg-black/[0.05] px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-black/50">
                      {m.ward}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
