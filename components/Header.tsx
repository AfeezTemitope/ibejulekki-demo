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
            <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
              <span className={`w-5 h-0.5 bg-ink transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-ink transition-all ${open ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
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
