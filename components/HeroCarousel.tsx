'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const slides = [
  {
    category: 'Infrastructure',
    eyebrow: 'Pillar I · Infrastructure',
    title: ['Building the', 'foundations of', 'tomorrow.'],
    subtitle: 'Road networks in Lakowe and Ayeteju-Igando, a modernised Secretariat, and a new Legislative Complex — infrastructure worthy of the New Lagos.',
    gradient: 'from-ink via-forest to-moss',
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format&fit=crop',
  },
  {
    category: 'Office of the Chairman',
    eyebrow: 'Executive Leadership',
    title: ['Leadership', 'that delivers', 'for the people.'],
    subtitle: 'Hon. Abdullahi Sesan Olowa — Executive Chairman, Ibeju-Lekki Local Government. Chairman of Conference 57 League of Chairmen, Lagos State.',
    gradient: 'from-forest via-moss to-ink',
    bgImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&q=80&auto=format&fit=crop',
    showChairman: true,
  },
  {
    category: 'Economy',
    eyebrow: 'Pillar VI · Local Economy',
    title: ['Home of the', 'New Lagos', 'economy.'],
    subtitle: 'Dangote Refinery, Lekki Free Trade Zone, Lekki Deep Seaport — Ibeju-Lekki powers Nigeria\'s economic future.',
    gradient: 'from-moss via-ink to-forest',
    bgImage: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1920&q=80&auto=format&fit=crop',
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => setActive((p) => (p + 1) % slides.length), 6000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused]);

  return (
    <section
      className="relative h-[92vh] min-h-[640px] overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Text-first fallback for slow networks */}
      <noscript>
        <div className="absolute inset-0 z-40 bg-ink text-bone flex items-center justify-center p-8">
          <div className="max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Ibeju-Lekki Local Government</div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">Hon. Abdullahi Sesan Olowa</h1>
            <p className="text-bone/70">Executive Chairman · SHIEELD Agenda: Security · Health · Infrastructure · Education · Environment · Local Economy · Development</p>
          </div>
        </div>
      </noscript>

      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${active === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`}
            style={{
              backgroundImage: `linear-gradient(rgba(10,31,20,0.58), rgba(10,31,20,0.78)), url('${s.bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: active === i ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 7s ease-out',
            }}
          />
          {/* Chairman image on slide 2 */}
          {s.showChairman && (
            <div className={`absolute right-0 bottom-0 hidden lg:block h-[85%] transition-all duration-1000 ${active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img src="/chairman.webp" alt="Hon. Abdullahi Sesan Olowa" className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(200,155,60,0.2)]" />
            </div>
          )}
        </div>
      ))}

      {/* Award ribbon badge top-right (sujimoto-inspired) */}
      <div className="absolute top-28 right-6 lg:right-10 z-30 hidden md:block">
        <div className="bg-ink/80 backdrop-blur border border-gold/40 rounded-sm px-5 py-4 text-center max-w-[180px]">
          <div className="w-8 h-8 mx-auto mb-2 rounded-full border border-gold/50 flex items-center justify-center">
            <span className="font-display text-gold text-xs italic">IL</span>
          </div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-gold mb-1">Lagos State</div>
          <div className="font-display text-bone text-xs leading-tight mb-2">Local Government Awards</div>
          <div className="flex items-center justify-center gap-0.5 text-gold text-[8px] mb-1">★★★★★</div>
          <div className="text-[8px] text-bone/60 uppercase tracking-wider">Performing LGA<br/>2024 · 2025</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div key={active} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 fade-up">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">{slides[active].eyebrow}</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-bone font-semibold tracking-tight mb-8">
              {slides[active].title.map((line, i) => (
                <span key={`${active}-${i}`} className="block fade-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  {i === 1 ? <span className="italic text-gold">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-bone/85 max-w-xl leading-relaxed mb-10 fade-up" style={{ animationDelay: '0.4s' }}>
              {slides[active].subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 fade-up" style={{ animationDelay: '0.5s' }}>
              <Link href="#shieeld" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-ink rounded-full hover:bg-bone transition-colors font-medium">
                Explore the SHIEELD Agenda
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-bone/30 text-bone rounded-full hover:bg-bone/10 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                Install as App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots bottom right */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-30 flex items-center gap-3">
        <button onClick={() => setActive((active - 1 + slides.length) % slides.length)} className="w-10 h-10 rounded-full border border-bone/30 hover:border-gold flex items-center justify-center text-bone/70 hover:text-gold transition-colors">←</button>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className="group relative" aria-label={`Go to slide ${i + 1}`}>
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${active === i ? 'border-gold bg-gold/10' : 'border-bone/40 hover:border-bone'}`}>
              <span className={`font-display text-sm ${active === i ? 'text-gold' : 'text-bone/70'}`}>{i + 1}</span>
            </div>
            {active === i && !paused && (
              <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" strokeDasharray="138.2" strokeDashoffset="138.2" style={{ animation: 'ringProgress 6s linear forwards' }} />
              </svg>
            )}
          </button>
        ))}
        <button onClick={() => setActive((active + 1) % slides.length)} className="w-10 h-10 rounded-full border border-bone/30 hover:border-gold flex items-center justify-center text-bone/70 hover:text-gold transition-colors">→</button>
      </div>

      {/* Bottom left slide label */}
      <div className="absolute bottom-10 left-6 lg:left-10 z-30 hidden md:block">
        <div className="flex items-center gap-4 text-bone/60 text-xs uppercase tracking-[0.2em]">
          <span className="font-display text-gold text-2xl">0{active + 1}</span>
          <div className="h-px w-12 bg-bone/30"></div>
          <span>{slides[active].category}</span>
        </div>
      </div>
    </section>
  );
}
