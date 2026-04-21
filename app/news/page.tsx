import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Link from 'next/link';

const articles = [
  { d: 'Apr 17, 2026', c: 'Governance', t: 'LASG Set To Drive Local Government Development Plan (LGDP)', e: 'Conference 57 Chairman appreciates unified plan for accelerated growth across the 57 LGAs in Lagos State.', s: 'lgdp-conference' },
  { d: 'Apr 15, 2026', c: 'Editorial', t: 'Why Ibeju-Lekki is the Future of Lagos', e: 'With over $9B in private investment across the corridor, the LGA has emerged as Lagos State\'s next urban anchor.', s: 'future-of-lagos' },
  { d: 'Apr 10, 2026', c: 'Opinion', t: 'A Decade of Growth: Ibeju-Lekki in Numbers', e: 'From a quiet coastal fishing community to the home of the world\'s largest single-train refinery.', s: 'decade-of-growth' },
  { d: 'Apr 05, 2026', c: 'Culture', t: 'The Heritage of "Omo Onigi Meta"', e: 'Tracing the Ijebu roots of Ibeju-Lekki\'s coastal communities and their oral traditions.', s: 'heritage-omo-onigi' },
  { d: 'Mar 28, 2026', c: 'Health', t: 'Free Medical Outreach Reaches 2,300 Residents', e: 'A community health initiative by the council secretariat provided screenings and treatments across five wards.', s: 'medical-outreach' },
  { d: 'Mar 20, 2026', c: 'Education', t: '150 Students Receive JAMB Form Scholarships', e: 'The Chairman\'s free JAMB forms initiative returned for another academic session, empowering indigenes.', s: 'jamb-scholarship' },
  { d: 'Mar 01, 2026', c: 'Infrastructure', t: 'Stakeholders\' Meeting on Gbadamosi Alo Street Rehabilitation', e: 'A crucial meeting convened on the rehabilitation as part of ongoing infrastructural development efforts.', s: 'gbadamosi-alo' },
  { d: 'Feb 14, 2026', c: 'Economy', t: 'Small Business Grant Programme Opens Applications', e: 'The council announces a ₦50M grant window for micro-enterprises across Ibeju-Lekki communities.', s: 'sme-grant' },
  { d: 'Jan 29, 2026', c: 'Environment', t: 'Coastal Cleanup Exercise at Eleko Beach', e: 'Over 400 volunteers joined the council-led cleanup along the Atlantic shoreline, collecting 3 tonnes of waste.', s: 'coastal-cleanup' },
  { d: 'Dec 14, 2025', c: 'Community', t: 'Chairman Hosts Baale-in-Council Year-End Dinner', e: 'Traditional rulers gathered at the secretariat for the annual reconciliation and planning dinner.', s: 'baale-dinner' },
  { d: 'Nov 30, 2025', c: 'Community', t: 'Women Empowerment Program at Council Secretariat', e: 'A transformative empowerment program organised by students of Pan-Atlantic University.', s: 'women-empowerment' },
  { d: 'Nov 22, 2025', c: 'Power', t: '33KV Overhead Power Line Rehabilitation Flag-off', e: 'The Executive Chairman led the official flag-off from Ibeju Long Bridge.', s: 'power-line' },
];

const categories = ['All', 'Governance', 'Infrastructure', 'Community', 'Editorial', 'Culture', 'Economy', 'Environment'];

export default function NewsPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <Header />
      <main>
        <section className="bg-bone pt-16 pb-12 border-b border-forest/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-2 text-sm text-ink/50 mb-8">
              <Link href="/" className="hover:text-forest">Home</Link>
              <span>/</span>
              <span className="text-ink">Blog & News</span>
            </div>
            <Reveal>
              <div className="flex items-end justify-between flex-wrap gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-forest"></div>
                    <span className="text-xs uppercase tracking-[0.25em] text-forest/70 font-medium">Blog & Newsroom</span>
                  </div>
                  <h1 className="font-display text-5xl md:text-7xl font-semibold text-ink tracking-tight leading-[1]">Stories &<br/><span className="italic text-forest">Announcements</span></h1>
                </div>
                <p className="text-ink/60 max-w-sm text-lg leading-relaxed">Official updates from the Office of the Executive Chairman, Council departments, and community programs.</p>
              </div>
              <div className="mt-12 flex items-center gap-3 overflow-x-auto pb-2">
                {categories.map((c, i) => (
                  <button key={c} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${i === 0 ? 'bg-forest text-bone' : 'border border-forest/20 text-ink/70 hover:border-forest hover:text-forest'}`}>{c}</button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURED */}
        <section className="py-16 bg-bone">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <Link href={`/news/${featured.s}`} className="group block">
                <article className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 aspect-[16/10] rounded-2xl bg-gradient-to-br from-forest via-moss to-ink relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="font-display text-[160px] font-bold text-bone/10 italic">LGDP</div>
                    </div>
                    <div className="absolute top-6 left-6 px-3 py-1 bg-gold text-ink text-xs uppercase tracking-wider rounded-full font-semibold">Latest · Featured</div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 text-xs text-ink/50 uppercase tracking-wider mb-4">
                      <span>{featured.d}</span><span>·</span><span className="text-forest font-semibold">{featured.c}</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-[1.1] mb-5 group-hover:text-forest transition-colors">{featured.t}</h2>
                    <p className="text-ink/70 leading-relaxed mb-6">{featured.e}</p>
                    <span className="inline-flex items-center gap-2 text-forest font-medium link-hover">Read article →</span>
                  </div>
                </article>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* GRID */}
        <section className="pb-32 bg-bone">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="border-t border-forest/10 pt-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {rest.map((a, i) => (
                  <Reveal key={a.s} delay={i * 60}>
                    <Link href={`/news/${a.s}`} className="group block">
                      <article>
                        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-moss/90 via-forest to-ink mb-5 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="font-display text-6xl font-bold text-bone/10 italic">{a.c.slice(0, 3).toUpperCase()}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-ink/50 uppercase tracking-wider mb-3">
                          <span>{a.d}</span><span>·</span><span className="text-forest font-semibold">{a.c}</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-ink leading-snug mb-3 group-hover:text-forest transition-colors">{a.t}</h3>
                        <p className="text-sm text-ink/60 leading-relaxed line-clamp-2">{a.e}</p>
                      </article>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="mt-20 flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-ink/50 hover:border-forest transition-colors">←</button>
              <button className="w-10 h-10 rounded-full bg-forest text-bone font-medium">1</button>
              <button className="w-10 h-10 rounded-full text-ink/70 hover:bg-forest/10">2</button>
              <button className="w-10 h-10 rounded-full text-ink/70 hover:bg-forest/10">3</button>
              <span className="px-2 text-ink/30">…</span>
              <button className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-ink/50 hover:border-forest transition-colors">→</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
