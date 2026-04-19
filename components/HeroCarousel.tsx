'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const slides = [
  {
    category: 'Infrastructure',
    title: ['Building the', 'foundations of', 'tomorrow.'],
    subtitle: 'Roads, secretariats, and public infrastructure driving Ibeju-Lekki\'s next chapter.',
    gradient: 'from-ink via-forest to-moss',
    accent: 'Infrastructure',
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format&fit=crop',
  },
  {
    category: 'Community',
    title: ['Serving the', 'people of', 'Ibeju-Lekki.'],
    subtitle: 'From empowerment programs to stakeholder engagement — governance built on participation.',
    gradient: 'from-forest via-moss to-ink',
    accent: 'Community',
    bgImage: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1920&q=80&auto=format&fit=crop',
  },
  {
    category: 'Economy',
    title: ['Home of the', 'New Lagos', 'economy.'],
    subtitle: 'Dangote Refinery, Lekki Free Trade Zone, Lekki Deep Seaport — Nigeria\'s economic engine.',
    gradient: 'from-moss via-ink to-forest',
    accent: 'Economy',
    bgImage: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1920&q=80&auto=format&fit=crop',
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused]);

  const goTo = (i: number) => {
    setActive(i);
  };

  return (
    <section
      className="relative h-[92vh] min-h-[640px] overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            active === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background layer */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`}
            style={{
              backgroundImage: `linear-gradient(rgba(10,31,20,0.55), rgba(10,31,20,0.75)), url('${s.bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: active === i ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-out',
            }}
          />
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF7F0 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div key={active} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 fade-up">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                {slides[active].accent} · Lagos State
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-bone font-semibold tracking-tight mb-8">
              {slides[active].title.map((line, i) => (
                <span
                  key={`${active}-${i}`}
                  className="block fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  {i === 1 ? <span className="italic text-gold">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p
              className="text-lg md:text-xl text-bone/85 max-w-xl leading-relaxed mb-10 fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              {slides[active].subtitle}
            </p>
            <div
              className="flex flex-wrap items-center gap-4 fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              <Link
                href="/news"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-ink rounded-full hover:bg-bone transition-colors font-medium"
              >
                Latest Announcements
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-bone/30 text-bone rounded-full hover:bg-bone/10 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Install as App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-30 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                active === i
                  ? 'border-gold bg-gold/10'
                  : 'border-bone/40 hover:border-bone'
              }`}
            >
              <span
                className={`font-display text-sm ${
                  active === i ? 'text-gold' : 'text-bone/70'
                }`}
              >
                {i + 1}
              </span>
            </div>
            {/* Progress ring */}
            {active === i && !paused && (
              <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#C89B3C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="138.2"
                  strokeDashoffset="138.2"
                  style={{ animation: 'ringProgress 5s linear forwards' }}
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Slide label bottom left */}
      <div className="absolute bottom-10 left-6 lg:left-10 z-30 hidden md:block">
        <div className="flex items-center gap-4 text-bone/60 text-xs uppercase tracking-[0.2em]">
          <span className="font-display text-gold text-2xl">0{active + 1}</span>
          <div className="h-px w-12 bg-bone/30"></div>
          <span>{slides[active].category}</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-2 text-bone/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-bone/50 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
