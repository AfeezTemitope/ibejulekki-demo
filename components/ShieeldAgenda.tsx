'use client';
import { useState, useEffect, useRef } from 'react';

const pillars = [
  {
    letter: 'S',
    title: 'Security',
    shortDesc: 'Safer communities through cooperation.',
    longDesc: 'Strengthening local security architecture and fostering community cooperation to ensure a safe environment for residents and businesses.',
    accent: 'from-red-900/80 to-forest',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L4 5v6.5c0 5.4 3.4 10.1 8 11.5 4.6-1.4 8-6.1 8-11.5V5l-8-3z"/></svg>),
  },
  {
    letter: 'H',
    title: 'Health',
    shortDesc: 'Primary healthcare that scales.',
    longDesc: 'Improving primary healthcare facilities and services to meet the needs of the expanding population.',
    accent: 'from-emerald-900/80 to-forest',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2v20M2 12h20" strokeLinecap="round"/></svg>),
  },
  {
    letter: 'I',
    title: 'Infrastructure',
    shortDesc: 'Roads, secretariats, complexes.',
    longDesc: 'Massive investment in road networks (Lakowe, Ayeteju-Igando), modernising the Council Secretariat, and building new legislative complexes.',
    accent: 'from-amber-900/80 to-forest',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg>),
  },
  {
    letter: 'E',
    title: 'Education',
    shortDesc: 'Learning that empowers.',
    longDesc: 'Enhancing social services and supporting educational programs, including collaborations with institutions like Pan-Atlantic University.',
    accent: 'from-blue-900/80 to-forest',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 3L2 9l10 6 10-6-10-6zM6 11v6l6 4 6-4v-6"/></svg>),
  },
  {
    letter: 'E',
    title: 'Environment',
    shortDesc: '"Keke Jaja" clean future.',
    longDesc: 'Promoting sustainability through initiatives like the "Keke Jaja" waste collection system and reintroducing monthly sanitation exercises.',
    accent: 'from-green-900/80 to-forest',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2v20M7 7c0 3 2 5 5 5s5-2 5-5M7 17c0-3 2-5 5-5s5 2 5 5"/></svg>),
  },
  {
    letter: 'L',
    title: 'Local Economy',
    shortDesc: 'Markets, traders, prosperity.',
    longDesc: 'Strengthening the grassroots economy through shop enumeration, market development, and revenue generation strategies.',
    accent: 'from-yellow-900/80 to-forest',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M3 9l2-5h14l2 5M3 9v11h18V9M3 9h18M8 13h8"/></svg>),
  },
  {
    letter: 'D',
    title: 'Development',
    shortDesc: '4,000 households uplifted.',
    longDesc: 'Implementing social intervention programs such as the Renewed Hope Conditional Cash Transfer — financial relief to 4,000 vulnerable households.',
    accent: 'from-purple-900/80 to-forest',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"/></svg>),
  },
];

export default function ShieeldAgenda() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate on mobile
  useEffect(() => {
    if (hovered !== null) return;
    autoplayRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % pillars.length);
    }, 4000);
    return () => { if (autoplayRef.current) clearTimeout(autoplayRef.current); };
  }, [active, hovered]);

  const current = hovered !== null ? pillars[hovered] : pillars[active];

  return (
    <section id="shieeld" className="relative py-24 md:py-32 bg-ink text-bone overflow-hidden">
      {/* Ambient background — changes color with active pillar */}
      <div className={`absolute inset-0 bg-gradient-to-br ${current.accent} transition-all duration-[1200ms] opacity-40`}></div>
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF7F0 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">7 Pillars · Governance Framework</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-6">
            The <span className="italic text-gold">SHIEELD</span><br/>Agenda.
          </h2>
          <p className="text-lg md:text-xl text-bone/70 max-w-2xl mx-auto leading-relaxed">
            Seven commitments shaping Ibeju-Lekki under the leadership of <br className="hidden md:block"/>Hon. Abdullahi Sesan Olowa.
          </p>
        </div>

        {/* DESKTOP: side-by-side grid of letter boxes */}
        <div className="hidden lg:grid grid-cols-7 gap-3 mb-16">
          {pillars.map((p, i) => {
            const isActive = (hovered !== null ? hovered === i : active === i);
            return (
              <button
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(i)}
                className={`group relative aspect-[3/4] rounded-2xl border overflow-hidden transition-all duration-500 text-left ${
                  isActive
                    ? 'border-gold bg-gold/10 scale-[1.03] shadow-2xl shadow-gold/20'
                    : 'border-bone/10 bg-bone/[0.03] hover:border-bone/30'
                }`}
              >
                <div className="absolute inset-0 p-5 flex flex-col">
                  <div className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-gold' : 'text-bone/40'}`}>0{i + 1}</div>
                  <div className={`font-display text-7xl xl:text-8xl font-bold leading-none my-auto transition-colors ${isActive ? 'text-gold' : 'text-bone/90'}`}>
                    {p.letter}
                  </div>
                  <div>
                    <div className={`text-[11px] uppercase tracking-[0.15em] mb-1 transition-colors ${isActive ? 'text-gold/80' : 'text-bone/50'}`}>Pillar</div>
                    <div className={`font-display text-base font-semibold leading-tight transition-colors ${isActive ? 'text-bone' : 'text-bone/80'}`}>
                      {p.title}
                    </div>
                  </div>
                </div>
                {/* Active indicator bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gold transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </button>
            );
          })}
        </div>

        {/* DESKTOP: active detail panel */}
        <div className="hidden lg:block">
          <div key={current.title + (hovered ?? active)} className="bg-bone/[0.04] backdrop-blur border border-bone/10 rounded-3xl p-10 fade-up">
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-2">
                <div className="w-24 h-24 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold p-5">
                  {current.icon}
                </div>
              </div>
              <div className="col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-gold text-2xl italic">{current.letter}</span>
                  <span className="text-bone/30">·</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gold/80">Pillar {pillars.findIndex(p => p.title === current.title) + 1} of 7</span>
                </div>
                <h3 className="font-display text-4xl font-semibold text-bone mb-4">{current.title}</h3>
                <p className="text-bone/70 text-lg leading-relaxed">{current.longDesc}</p>
              </div>
              <div className="col-span-3 text-right">
                <div className="font-display text-[120px] text-gold/20 italic leading-none">{current.letter}</div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: stacked cards with auto-rotate */}
        <div className="lg:hidden space-y-3">
          {pillars.map((p, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-2xl border overflow-hidden transition-all duration-500 ${
                  isActive ? 'border-gold bg-gold/5' : 'border-bone/10 bg-bone/[0.03]'
                }`}
              >
                <div className="p-5 flex items-start gap-4">
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-display text-3xl font-bold transition-all ${isActive ? 'bg-gold text-ink' : 'bg-bone/10 text-bone/70'}`}>
                    {p.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-gold/70">0{i + 1}</span>
                        <span className="text-bone/30 text-xs">·</span>
                        <h3 className="font-display text-lg font-semibold text-bone">{p.title}</h3>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${isActive ? 'bg-gold text-ink rotate-0' : 'bg-bone/10 text-bone/50 rotate-[-90deg]'}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
                      </div>
                    </div>
                    <div className={`grid transition-all duration-500 ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-sm text-bone/70 leading-relaxed">{p.longDesc}</p>
                      </div>
                    </div>
                    {!isActive && <p className="text-sm text-bone/50 mt-1">{p.shortDesc}</p>}
                  </div>
                </div>
                {isActive && (
                  <div className="h-0.5 bg-bone/10 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-gold" style={{animation: 'barProgress 4s linear forwards'}}></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
