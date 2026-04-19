import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Article({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <main>
        <article className="pt-16 pb-24 bg-bone">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-2 text-sm text-ink/50 mb-10">
              <Link href="/" className="hover:text-forest">Home</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-forest">News</Link>
              <span>/</span>
              <span className="text-ink truncate">Article</span>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] mb-6">
              <span className="text-forest font-semibold">Governance</span>
              <span className="w-1 h-1 rounded-full bg-ink/30"></span>
              <span className="text-ink/50">Apr 17, 2026</span>
              <span className="w-1 h-1 rounded-full bg-ink/30"></span>
              <span className="text-ink/50">4 min read</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05] mb-8">
              LASG Set To Drive Local Government Development Plan (LGDP)
            </h1>
            <p className="text-xl text-ink/70 leading-relaxed mb-12 font-light">
              Conference 57 Chairman appreciates unified plan for accelerated growth across Lagos State's 57 Local Governments.
            </p>
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-forest via-moss to-ink mb-12 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center"><div className="font-display text-[200px] font-bold text-bone/10 italic">LGDP</div></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-ink/80 mb-6">The Executive Chairman of Ibeju-Lekki Local Government, <strong className="text-forest">Hon. Abdullahi Sesan Olowa</strong>, who also doubles as the Chairman of Conference 57 League of Chairmen, attended the inauguration of the Technical Working Committee (TWC) on the LGDP at the Ministry of Local Government, Chieftaincy Affairs and Rural Development.</p>
              <p className="text-lg leading-relaxed text-ink/80 mb-6">The Lagos State Government, through the Ministry, is set to cascade the Local Government Development Plan (LGDP) across the 57 Local Government Areas and Local Council Development Areas in the State.</p>
              <blockquote className="my-10 pl-8 border-l-4 border-gold">
                <p className="font-display italic text-2xl text-forest leading-snug">"The purpose of the Technical Working Committee is to identify priorities, set targets, guide budgeting, attract development partners, and strengthen citizen participation at the grassroots level."</p>
                <footer className="mt-4 text-sm text-ink/60 uppercase tracking-wider">— Mrs. Kikelomo Bolarinwa, Permanent Secretary</footer>
              </blockquote>
              <p className="text-lg leading-relaxed text-ink/80 mb-6">At the inauguration, the Chairman of Conference 57 and Executive Chairman of Ibeju-Lekki LGA, Engr. Sesan Olowa, expressed appreciation to the Lagos State Government for the initiative.</p>
              <p className="text-lg leading-relaxed text-ink/80 mb-6">He noted that the LGDP would help harmonise the various development plans of all Local Governments into a unified working document for infrastructural growth, and assured that members of the committee would collaborate effectively with the Technical Working Committee.</p>
              <h2 className="font-display text-3xl font-semibold text-ink mt-12 mb-5">What this means for Ibeju-Lekki</h2>
              <p className="text-lg leading-relaxed text-ink/80 mb-6">The LGDP provides a framework through which Ibeju-Lekki can align its infrastructure, economy, social services, and security priorities with a statewide strategy — creating clearer budget visibility and stronger partner engagement for the Council's flagship initiatives.</p>
            </div>
            {/* Share */}
            <div className="mt-16 pt-8 border-t border-forest/10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 text-sm text-ink/60">
                <span className="uppercase tracking-wider text-xs">Share</span>
                {['X', 'WhatsApp', 'LinkedIn', 'Copy Link'].map((p) => (
                  <button key={p} className="px-3 py-1.5 rounded-full border border-forest/20 hover:border-forest hover:text-forest transition-colors text-xs">{p}</button>
                ))}
              </div>
              <Link href="/news" className="text-forest font-medium link-hover">← All news</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
