import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ShieeldAgenda from '@/components/ShieeldAgenda';
import Reveal from '@/components/Reveal';
import Link from 'next/link';

const blogs = [
  { cat: 'Governance', d: 'Apr 17, 2026', t: 'LASG Set To Drive Local Government Development Plan (LGDP)', e: 'Conference 57 Chairman appreciates unified plan for accelerated growth across the 57 LGAs.', s: 'lgdp-conference', featured: true },
  { cat: 'Infrastructure', d: 'Mar 01, 2026', t: 'Stakeholders\' Meeting on Gbadamosi Alo Street', e: 'A crucial meeting on the rehabilitation as part of ongoing infrastructural efforts.', s: 'gbadamosi-alo' },
  { cat: 'Community', d: 'Nov 30, 2025', t: 'Women Empowerment Program at Council Secretariat', e: 'A transformative program organised by students of Pan-Atlantic University.', s: 'women-empowerment' },
  { cat: 'Power', d: 'Nov 22, 2025', t: '33KV Overhead Power Line Rehabilitation Flag-off', e: 'The Executive Chairman led the official flag-off from Ibeju Long Bridge.', s: 'power-line' },
];

const spotlight = [
  { cat: 'Editorial', d: 'Apr 15, 2026', t: 'Why Ibeju-Lekki is the Future of Lagos', e: 'With $9B+ in private investment, the LGA is positioned as Lagos\'s next urban anchor.', s: 'future-of-lagos' },
  { cat: 'Opinion', d: 'Apr 10, 2026', t: 'A Decade of Growth: Ibeju-Lekki in Numbers', e: 'From a quiet fishing community to the home of the world\'s largest single-train refinery.', s: 'decade-of-growth' },
  { cat: 'Culture', d: 'Apr 05, 2026', t: 'The Heritage of "Omo Onigi Meta"', e: 'Tracing the Ijebu roots of Ibeju-Lekki\'s coastal communities and their oral traditions.', s: 'heritage-omo-onigi' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroCarousel />

        {/* Marquee */}
        <div className="py-6 border-y border-forest/10 overflow-hidden bg-bone">
          <div className="marquee whitespace-nowrap font-display italic text-ink/40 text-2xl">
            {Array(2).fill(0).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>Dangote Refinery</span><span className="text-gold">●</span>
                <span>Lekki Free Trade Zone</span><span className="text-gold">●</span>
                <span>Lekki Deep Seaport</span><span className="text-gold">●</span>
                <span>Pan-Atlantic University</span><span className="text-gold">●</span>
                <span>Lekki International Airport</span><span className="text-gold">●</span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Chairman with real photo */}
        <section className="py-24 md:py-32 bg-bone">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <Reveal className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative">
                  {/* Photo card */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-forest via-moss to-forest rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(200,155,60,0.35), transparent 55%)'}}></div>
                    <img src="/chairman.webp" alt="Hon. Abdullahi Sesan Olowa" className="absolute inset-x-0 bottom-0 w-full object-contain object-bottom h-full" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Executive Chairman</div>
                      <div className="font-display text-2xl font-semibold text-bone leading-tight">Hon. Abdullahi<br/>Sesan Olowa</div>
                    </div>
                    <div className="absolute top-6 right-6">
                      <img src="/ibeju-lekki-logo.webp" alt="" className="w-16 h-16 opacity-90 bg-bone/90 rounded-full p-1" />
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-gold text-ink px-5 py-3 rounded-xl shadow-xl">
                    <div className="text-[10px] uppercase tracking-wider mb-0.5">Conference 57</div>
                    <div className="font-display font-semibold">Chairman</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150} className="lg:col-span-7 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-gold"></div>
                  <span className="text-xs uppercase tracking-[0.25em] text-forest/70 font-medium">Office of the Executive Chairman</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-ink font-semibold leading-[1.1] tracking-tight mb-8">
                  "Our dedication is rooted in the <span className="italic text-forest">comprehensive advancement</span> of Ibeju-Lekki."
                </h2>
                <p className="text-lg text-ink/70 leading-relaxed mb-8">
                  Hon. Abdullahi Sesan Olowa leads the Ibeju-Lekki Local Government with a clear blueprint — the SHIEELD Agenda — translating policy into visible change across communities.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { n: '4,000', t: 'Households Uplifted', d: 'Renewed Hope Conditional Cash Transfer' },
                    { n: '150+', t: 'JAMB Scholarships', d: 'Free JAMB forms programme' },
                    { n: '57', t: 'Conference Chairman', d: 'League of LG Chairmen, Lagos State' },
                    { n: '7', t: 'Cardinal Pillars', d: 'The SHIEELD governance framework' },
                  ].map((item, i) => (
                    <div key={i} className="border-t border-forest/20 pt-4">
                      <div className="font-display text-gold text-3xl font-semibold mb-1">{item.n}</div>
                      <div className="font-semibold text-ink mb-1 text-sm">{item.t}</div>
                      <div className="text-xs text-ink/60">{item.d}</div>
                    </div>
                  ))}
                </div>
                <Link href="#shieeld" className="inline-flex items-center gap-2 text-forest font-medium link-hover">
                  Explore the SHIEELD Agenda →
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SHIEELD AGENDA — the star of the show */}
        <ShieeldAgenda />

        {/* NEWS GRID */}
        <section className="py-32 bg-forest text-bone relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF7F0 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
            <Reveal>
              <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-gold"></div>
                    <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Newsroom</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                    What's happening<br/><span className="italic text-gold">in the council.</span>
                  </h2>
                </div>
                <Link href="/news" className="group inline-flex items-center gap-2 text-bone hover:text-gold transition-colors">
                  All stories
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </Reveal>
            <div className="grid lg:grid-cols-12 gap-8">
              <Reveal delay={100} className="lg:col-span-7">
                <Link href={`/news/${blogs[0].s}`} className="group block">
                  <article className="bg-ink/40 backdrop-blur rounded-2xl overflow-hidden border border-bone/5 hover:border-gold/30 transition-all h-full">
                    <div className="aspect-[16/10] bg-gradient-to-br from-moss to-ink relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center"><div className="font-display text-[120px] font-bold text-bone/10 italic">LGDP</div></div>
                      <div className="absolute top-6 left-6 px-3 py-1 bg-gold text-ink text-xs uppercase tracking-wider rounded-full font-semibold">Featured</div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 text-xs text-bone/50 uppercase tracking-wider mb-4">
                        <span>{blogs[0].d}</span><span>·</span><span>{blogs[0].cat}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-4 group-hover:text-gold transition-colors">{blogs[0].t}</h3>
                      <p className="text-bone/60 leading-relaxed">{blogs[0].e}</p>
                    </div>
                  </article>
                </Link>
              </Reveal>
              <div className="lg:col-span-5 flex flex-col gap-6">
                {blogs.slice(1).map((n, i) => (
                  <Reveal key={n.s} delay={200 + i * 100}>
                    <Link href={`/news/${n.s}`} className="group block p-6 rounded-xl border border-bone/10 hover:border-gold/30 hover:bg-ink/40 transition-all">
                      <div className="flex items-center gap-3 text-xs text-bone/50 uppercase tracking-wider mb-3">
                        <span>{n.d}</span><span>·</span><span className="text-gold">{n.cat}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-gold transition-colors">{n.t}</h3>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLOG / SPOTLIGHT */}
        <section className="py-32 bg-bone">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-forest"></div>
                    <span className="text-xs uppercase tracking-[0.25em] text-forest/70 font-medium">Blog · Stories & Insights</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-[1.05]">
                    Voices from<br/><span className="italic text-forest">the council.</span>
                  </h2>
                </div>
                <p className="max-w-sm text-ink/60 leading-relaxed">Long-form stories, opinion pieces, and editorials on the growth and culture of Ibeju-Lekki.</p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {spotlight.map((p, i) => (
                <Reveal key={p.s} delay={i * 120}>
                  <Link href={`/news/${p.s}`} className="group block h-full">
                    <article className="h-full flex flex-col">
                      <div className="aspect-[4/5] rounded-2xl mb-6 relative overflow-hidden bg-gradient-to-br from-moss via-forest to-ink">
                        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(200,155,60,0.6), transparent 60%)'}}></div>
                        <div className="absolute top-6 left-6 px-3 py-1.5 bg-gold/90 text-ink text-xs uppercase tracking-wider rounded-full font-semibold">{p.cat}</div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="font-display text-[60px] font-bold text-bone/10 italic leading-none">{String(i + 1).padStart(2, '0')}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-ink/50 uppercase tracking-wider mb-3">
                        <span>{p.d}</span><span>·</span><span>5 min read</span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold leading-snug text-ink group-hover:text-forest transition-colors mb-3">{p.t}</h3>
                      <p className="text-ink/60 leading-relaxed line-clamp-2 mb-5">{p.e}</p>
                      <div className="mt-auto inline-flex items-center gap-2 text-forest font-medium link-hover self-start">Read story →</div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="py-24 bg-ink text-bone">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <div className="grid md:grid-cols-4 gap-8 md:gap-0">
                {[
                  { n: '$9B', l: 'Dangote Refinery' },
                  { n: '646', l: 'km² land area' },
                  { n: '4,000', l: 'Households uplifted' },
                  { n: '7', l: 'SHIEELD Pillars' },
                ].map((s, i) => (
                  <div key={i} className={`px-6 ${i !== 3 ? 'md:border-r border-bone/10' : ''}`}>
                    <div className="font-display text-5xl md:text-6xl font-semibold text-gold mb-2">{s.n}</div>
                    <div className="text-sm uppercase tracking-wider text-bone/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 bg-bone">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-forest"></div>
                <span className="text-xs uppercase tracking-[0.25em] text-forest/70 font-medium">Stay connected</span>
                <div className="h-px w-12 bg-forest"></div>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-[1.1] mb-6">
                Council announcements,<br/><span className="italic text-forest">delivered to you.</span>
              </h2>
              <p className="text-lg text-ink/60 leading-relaxed mb-10 max-w-xl mx-auto">Subscribe to receive news updates, emergency alerts, and community programs.</p>
              <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="your@email.com" className="flex-1 px-6 py-4 rounded-full border border-forest/20 bg-transparent focus:outline-none focus:border-forest transition-colors text-ink placeholder:text-ink/40" />
                <button type="submit" className="px-7 py-4 bg-forest text-bone rounded-full hover:bg-ink transition-colors font-medium whitespace-nowrap">Subscribe</button>
              </form>
              <p className="text-xs text-ink/40 mt-4">We respect your privacy. Unsubscribe anytime.</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
