#!/bin/bash
# Ibeju-Lekki LGA Mockup — Single-command setup
# Usage: bash setup-ibeju-lekki.sh
# After running, copy chairman.webp and ibeju-lekki-logo.webp into ./public/

set -e
PROJECT_NAME="ibeju-lekki-mockup"
mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"
mkdir -p app app/news "app/news/[slug]" public components

echo "📦 Creating config files..."

cat > package.json << 'PKGEOF'
{
  "name": "ibeju-lekki-mockup",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
PKGEOF

cat > next.config.js << 'NCEOF'
/** @type {import('next').NextConfig} */
const nextConfig = { images: { unoptimized: true } };
module.exports = nextConfig;
NCEOF

cat > tsconfig.json << 'TSEOF'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
TSEOF

cat > tailwind.config.ts << 'TWEOF'
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0A1F14',
        forest: '#0F3D2E',
        moss: '#1B5E3F',
        sage: '#7BA889',
        gold: '#C89B3C',
        cream: '#F6F1E7',
        bone: '#FAF7F0',
      }
    },
  },
  plugins: [],
};
export default config;
TWEOF

cat > postcss.config.js << 'PCEOF'
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
PCEOF

echo "🎨 Creating global styles..."

cat > app/globals.css << 'CSSEOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: #FAF7F0;
  color: #0A1F14;
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }

.link-hover { position: relative; display: inline-block; }
.link-hover::after {
  content: ''; position: absolute; left: 0; bottom: -2px; width: 0; height: 1px;
  background: currentColor; transition: width 0.3s ease;
}
.link-hover:hover::after { width: 100%; }

.marquee { display: flex; gap: 3rem; animation: scroll 40s linear infinite; }
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes ringProgress {
  from { stroke-dashoffset: 138.2; }
  to { stroke-dashoffset: 0; }
}

.reveal {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }

.line-clamp-2 {
  display: -webkit-box; -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box; -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; overflow: hidden;
}

@keyframes barProgress { from { width: 0%; } to { width: 100%; } }

html { scroll-behavior: smooth; }
img { max-width: 100%; height: auto; }
CSSEOF

cat > app/layout.tsx << 'LAYEOF'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibeju-Lekki Local Government | Official Website",
  description: "The official website of Ibeju-Lekki Local Government Area, Lagos State — home to Dangote Refinery and Lekki Free Trade Zone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
LAYEOF

echo "🧩 Creating components..."

cat > components/Logo.tsx << 'LOGOEOF'
export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src="/ibeju-lekki-logo-sm.webp"
      alt="Ibeju-Lekki Local Government"
      className={className}
      loading="eager"
      onError={(e) => { (e.target as HTMLImageElement).src = '/ibeju-lekki-logo.webp'; }}
    />
  );
}
LOGOEOF

cat > components/Reveal.tsx << 'REVEOF'
'use client';
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
REVEOF

cat > components/Header.tsx << 'HDREOF'
'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-bone/85 border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="hidden lg:flex items-center justify-between py-2 text-xs text-ink/60 border-b border-forest/5">
          <div className="flex items-center gap-6">
            <span>Mon–Fri · 8am–6pm</span>
            <span>info@ibejulekki.lg.gov.ng</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse"></span>
              All services operational
            </span>
            <span>EN · YO</span>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 lg:py-5">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 lg:w-11 lg:h-11 transition-transform group-hover:rotate-[-4deg]" />
            <div>
              <div className="font-display text-[15px] lg:text-[17px] font-semibold leading-tight text-forest">Ibeju-Lekki</div>
              <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.18em] text-ink/60 leading-tight">Local Government · Lagos State</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-ink/80">
            <Link href="/" className="link-hover">Home</Link>
            <Link href="/#shieeld" className="link-hover">SHIEELD</Link>
            <Link href="/news" className="link-hover">News & Blog</Link>
            <Link href="#" className="link-hover">Services</Link>
            <Link href="#" className="link-hover">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-4 py-2 text-sm border border-forest/20 rounded-full hover:bg-forest hover:text-bone hover:border-forest transition-all">Search</button>
            <button className="hidden lg:block px-5 py-2 text-sm bg-forest text-bone rounded-full hover:bg-ink transition-colors">Pay Taxes</button>
            <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Toggle menu">
              <span className={`w-5 h-0.5 bg-ink transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-ink transition-all ${open ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
        <div className={`lg:hidden overflow-hidden transition-all ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-1 pt-2">
            {[
              { h: '/', l: 'Home' },
              { h: '/#shieeld', l: 'SHIEELD Agenda' },
              { h: '/news', l: 'News & Blog' },
              { h: '#', l: 'Services' },
              { h: '#', l: 'Contact' },
            ].map((n) => (
              <Link key={n.l} href={n.h} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-forest/5 font-medium text-ink">{n.l}</Link>
            ))}
            <button className="mt-3 mx-4 py-3 bg-forest text-bone rounded-full font-medium">Pay Taxes</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
HDREOF

cat > components/Footer.tsx << 'FTREOF'
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone/80 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-12 h-12" />
              <div>
                <div className="font-display text-lg text-bone font-semibold">Ibeju-Lekki</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-bone/50">Local Government</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-bone/60">Secretariat, Igando-Oloja, Ibeju-Lekki, Lagos State, Nigeria.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-bone mb-5 text-sm uppercase tracking-wider">Government</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Executive Arms</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Legislative Arms</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Departments</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Budget & Finance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-bone mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Pay Taxes</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Birth Registration</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Business Permits</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Report an Issue</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-bone mb-5 text-sm uppercase tracking-wider">Emergency</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-bone/50">Chairman</span><span>0808 347 2704</span></li>
              <li className="flex justify-between"><span className="text-bone/50">Council Mgr</span><span>0807 979 2040</span></li>
              <li className="flex justify-between"><span className="text-bone/50">Info Officer</span><span>0802 341 7422</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-bone/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bone/40">
          <div>© 2026 Ibeju-Lekki Local Government Area. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
FTREOF

cat > components/HeroCarousel.tsx << 'HCEOF'
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
    <section className="relative h-[92vh] min-h-[640px] overflow-hidden bg-ink" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
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
        <div key={i} className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${active === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
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
          {s.showChairman && (
            <div className={`absolute right-0 bottom-0 hidden lg:block h-[85%] transition-all duration-1000 ${active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img src="/chairman.webp" alt="Hon. Abdullahi Sesan Olowa" className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(200,155,60,0.2)]" />
            </div>
          )}
        </div>
      ))}

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
            <p className="text-lg md:text-xl text-bone/85 max-w-xl leading-relaxed mb-10 fade-up" style={{ animationDelay: '0.4s' }}>{slides[active].subtitle}</p>
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
HCEOF

cat > components/ShieeldAgenda.tsx << 'SHEOF'
'use client';
import { useState, useEffect, useRef } from 'react';

const pillars = [
  { letter: 'S', title: 'Security', shortDesc: 'Safer communities through cooperation.', longDesc: 'Strengthening local security architecture and fostering community cooperation to ensure a safe environment for residents and businesses.', accent: 'from-red-900/80 to-forest', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L4 5v6.5c0 5.4 3.4 10.1 8 11.5 4.6-1.4 8-6.1 8-11.5V5l-8-3z"/></svg>) },
  { letter: 'H', title: 'Health', shortDesc: 'Primary healthcare that scales.', longDesc: 'Improving primary healthcare facilities and services to meet the needs of the expanding population.', accent: 'from-emerald-900/80 to-forest', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2v20M2 12h20" strokeLinecap="round"/></svg>) },
  { letter: 'I', title: 'Infrastructure', shortDesc: 'Roads, secretariats, complexes.', longDesc: 'Massive investment in road networks (Lakowe, Ayeteju-Igando), modernising the Council Secretariat, and building new legislative complexes.', accent: 'from-amber-900/80 to-forest', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg>) },
  { letter: 'E', title: 'Education', shortDesc: 'Learning that empowers.', longDesc: 'Enhancing social services and supporting educational programs, including collaborations with institutions like Pan-Atlantic University.', accent: 'from-blue-900/80 to-forest', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 3L2 9l10 6 10-6-10-6zM6 11v6l6 4 6-4v-6"/></svg>) },
  { letter: 'E', title: 'Environment', shortDesc: '"Keke Jaja" clean future.', longDesc: 'Promoting sustainability through initiatives like the "Keke Jaja" waste collection system and reintroducing monthly sanitation exercises.', accent: 'from-green-900/80 to-forest', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2v20M7 7c0 3 2 5 5 5s5-2 5-5M7 17c0-3 2-5 5-5s5 2 5 5"/></svg>) },
  { letter: 'L', title: 'Local Economy', shortDesc: 'Markets, traders, prosperity.', longDesc: 'Strengthening the grassroots economy through shop enumeration, market development, and revenue generation strategies.', accent: 'from-yellow-900/80 to-forest', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M3 9l2-5h14l2 5M3 9v11h18V9M3 9h18M8 13h8"/></svg>) },
  { letter: 'D', title: 'Development', shortDesc: '4,000 households uplifted.', longDesc: 'Implementing social intervention programs such as the Renewed Hope Conditional Cash Transfer — financial relief to 4,000 vulnerable households.', accent: 'from-purple-900/80 to-forest', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"/></svg>) },
];

export default function ShieeldAgenda() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hovered !== null) return;
    autoplayRef.current = setTimeout(() => setActive((p) => (p + 1) % pillars.length), 4000);
    return () => { if (autoplayRef.current) clearTimeout(autoplayRef.current); };
  }, [active, hovered]);

  const current = hovered !== null ? pillars[hovered] : pillars[active];

  return (
    <section id="shieeld" className="relative py-24 md:py-32 bg-ink text-bone overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${current.accent} transition-all duration-[1200ms] opacity-40`}></div>
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #FAF7F0 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
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

        <div className="hidden lg:grid grid-cols-7 gap-3 mb-16">
          {pillars.map((p, i) => {
            const isActive = (hovered !== null ? hovered === i : active === i);
            return (
              <button key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} onClick={() => setActive(i)}
                className={`group relative aspect-[3/4] rounded-2xl border overflow-hidden transition-all duration-500 text-left ${isActive ? 'border-gold bg-gold/10 scale-[1.03] shadow-2xl shadow-gold/20' : 'border-bone/10 bg-bone/[0.03] hover:border-bone/30'}`}>
                <div className="absolute inset-0 p-5 flex flex-col">
                  <div className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-gold' : 'text-bone/40'}`}>0{i + 1}</div>
                  <div className={`font-display text-7xl xl:text-8xl font-bold leading-none my-auto transition-colors ${isActive ? 'text-gold' : 'text-bone/90'}`}>{p.letter}</div>
                  <div>
                    <div className={`text-[11px] uppercase tracking-[0.15em] mb-1 transition-colors ${isActive ? 'text-gold/80' : 'text-bone/50'}`}>Pillar</div>
                    <div className={`font-display text-base font-semibold leading-tight transition-colors ${isActive ? 'text-bone' : 'text-bone/80'}`}>{p.title}</div>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gold transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <div key={current.title + (hovered ?? active)} className="bg-bone/[0.04] backdrop-blur border border-bone/10 rounded-3xl p-10 fade-up">
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-2">
                <div className="w-24 h-24 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold p-5">{current.icon}</div>
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

        <div className="lg:hidden space-y-3">
          {pillars.map((p, i) => {
            const isActive = active === i;
            return (
              <button key={i} onClick={() => setActive(i)} className={`w-full text-left rounded-2xl border overflow-hidden transition-all duration-500 ${isActive ? 'border-gold bg-gold/5' : 'border-bone/10 bg-bone/[0.03]'}`}>
                <div className="p-5 flex items-start gap-4">
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-display text-3xl font-bold transition-all ${isActive ? 'bg-gold text-ink' : 'bg-bone/10 text-bone/70'}`}>{p.letter}</div>
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
SHEOF

echo "📄 Creating pages..."

cat > app/page.tsx << 'HMEOF'
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

        <section className="py-24 md:py-32 bg-bone">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <Reveal className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative">
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

        <ShieeldAgenda />

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
HMEOF

cat > app/news/page.tsx << 'NEWSEOF'
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
NEWSEOF

cat > "app/news/[slug]/page.tsx" << 'ARTEOF'
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
ARTEOF

cat > README.md << 'RMEOF'
# Ibeju-Lekki LGA — Mockup

## Setup
```bash
npm install
npm run dev
```

## Images needed in /public/
- `chairman.webp` — Hon. Abdullahi Sesan Olowa photo (transparent background recommended)
- `ibeju-lekki-logo.webp` — Council logo
- `ibeju-lekki-logo-sm.webp` — Smaller version for header

## Deploy to Vercel
```bash
npx vercel
```
RMEOF

echo ""
echo "✅ All files created in $PROJECT_NAME/"
echo ""
echo "📌 NEXT STEPS:"
echo "   1. cd $PROJECT_NAME"
echo "   2. Copy your images to public/:"
echo "      - public/chairman.webp"
echo "      - public/ibeju-lekki-logo.webp"
echo "      - public/ibeju-lekki-logo-sm.webp"
echo "   3. npm install"
echo "   4. npm run dev"
echo "   5. Open http://localhost:3000"
