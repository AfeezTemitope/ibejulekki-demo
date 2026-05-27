'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  X,
  Menu,
  Phone,
  Mail,
  Clock,
  Circle,
  CreditCard,
} from 'lucide-react';

// ── Nav structure ─────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Government',
    href: '#',
    children: [
      { label: 'Vision & Mission',    href: '/government/vision' },
      { label: 'Executive Chairman',  href: '/government/chairman' },
      { label: 'Executive Council',   href: '/government/executive-council' },
      { label: 'Legislative Council', href: '/government/legislative-council' },
      { label: 'Management Team',     href: '/government/management-team' },
    ],
  },
  {
    label: 'Programmes',
    href: '#',
    children: [
      { label: 'SHIEELD Agenda',      href: '/programmes/shieeld' },
      { label: '2025 Budget Summary', href: '/programmes/budget' },
      { label: 'Programme Delivery',  href: '/programmes/delivery' },
      { label: 'Agenda 2029',         href: '/programmes/agenda-2029' },
    ],
  },
  {
    label: 'About',
    href: '#',
    children: [
      { label: 'Historic Background',        href: '/about/history' },
      { label: 'The People, Arts & Culture', href: '/about/culture' },
      { label: 'Traditional Rulers',         href: '/about/traditional-rulers' },
    ],
  },
  { label: 'News & Events', href: '/news' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Revenue Portal',   href: '/resources/revenue' },
      { label: 'Waste Collection', href: '/resources/waste' },
      { label: 'Career & Jobs',    href: '/resources/careers' },
    ],
  },
];

// ── Desktop dropdown ──────────────────────────────────────────────────────────
function DesktopNavItem({ item }: { item: (typeof NAV_ITEMS)[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="
          relative text-[11.5px] font-semibold tracking-[0.1em] uppercase
          text-[#0A1F14]/75 hover:text-[#0F3D2E] transition-colors duration-150
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
          after:bg-[#C89B3C] after:rounded-full after:transition-all after:duration-250
          hover:after:w-full
        "
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="
          flex items-center gap-1 text-[11.5px] font-semibold tracking-[0.1em]
          uppercase text-[#0A1F14]/75 hover:text-[#0F3D2E] transition-colors
          duration-150 cursor-pointer select-none
        "
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={12}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2
          min-w-[220px] bg-white border border-[#0F3D2E]/10
          border-t-[3px] border-t-[#C89B3C]
          rounded-b-xl shadow-xl shadow-black/10 z-50 overflow-hidden
          transition-all duration-200 origin-top
          ${open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}
        `}
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={() => setOpen(false)}
            className="
              flex items-center gap-2.5 px-5 py-3 text-[12px] font-medium
              text-[#0A1F14]/70 border-b border-[#0F3D2E]/06 last:border-0
              hover:bg-[#0F3D2E]/04 hover:text-[#0F3D2E] hover:pl-6
              transition-all duration-150
            "
          >
            <span className="w-1 h-1 rounded-full bg-[#C89B3C] flex-shrink-0" />
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Mobile accordion item ─────────────────────────────────────────────────────
function MobileNavItem({
  item,
  onClose,
}: {
  item: (typeof NAV_ITEMS)[number];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="
          block px-5 py-4 text-[13px] font-semibold tracking-[0.08em]
          uppercase text-[#0A1F14] border-b border-[#0F3D2E]/08
          hover:text-[#0F3D2E] hover:bg-[#0F3D2E]/03 transition-colors
        "
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-[#0F3D2E]/08">
      <button
        onClick={() => setOpen((o) => !o)}
        className="
          flex items-center justify-between w-full px-5 py-4
          text-[13px] font-semibold tracking-[0.08em] uppercase
          text-[#0A1F14] hover:text-[#0F3D2E] transition-colors
        "
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-250 text-[#0F3D2E]/50 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="
              flex items-center gap-2.5 px-8 py-3 text-[12.5px] font-medium
              text-[#0A1F14]/60 hover:text-[#0F3D2E] hover:bg-[#0F3D2E]/04
              border-b border-[#0F3D2E]/04 last:border-0 transition-all
            "
          >
            <span className="w-1 h-1 rounded-full bg-[#C89B3C] flex-shrink-0" />
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <div
        className={`sticky top-0 z-[200] transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/08' : ''
        }`}
      >
        {/* 1 ── Color stripe */}
        <div className="flex h-[5px]" aria-hidden="true">
          <div className="flex-1 bg-[#BE1E2D]" />
          <div className="flex-1 bg-[#1A3A7A]" />
          <div className="flex-1 bg-[#F5A623]" />
          <div className="flex-1 bg-[#1B7A3E]" />
        </div>

        {/* 2 ── Utility bar */}
        <div className="bg-[#0F3D2E]">
          {/* Mobile: single line */}
          <div className="flex items-center justify-center gap-3 px-4 py-[7px] md:hidden">
            <Phone size={10} className="text-[#C89B3C]" strokeWidth={2.5} />
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white/70">
              Emergency Lines:
            </span>
            <a href="tel:767" className="text-[10px] font-bold text-[#C89B3C] hover:text-white transition-colors">767</a>
            <span className="text-white/25 text-[10px]">|</span>
            <a href="tel:112" className="text-[10px] font-bold text-[#C89B3C] hover:text-white transition-colors">112</a>
          </div>

          {/* Desktop: three columns */}
          <div className="hidden md:grid grid-cols-3 items-center max-w-7xl mx-auto px-6 lg:px-10 py-[9px]">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-[10.5px] text-white/55 font-medium">
                <Clock size={11} strokeWidth={2} className="text-white/35" />
                Mon – Fri · 8:00am – 6:00pm
              </span>
              <span className="text-white/20">|</span>
              <a
                href="mailto:info@ibejulekki.lg.gov.ng"
                className="flex items-center gap-1.5 text-[10.5px] text-white/55 font-medium hover:text-[#C89B3C] transition-colors"
              >
                <Mail size={11} strokeWidth={2} className="text-white/35" />
                info@ibejulekki.lg.gov.ng
              </a>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <Phone size={11} strokeWidth={2.5} className="text-[#C89B3C]" />
              <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/70">
                Toll-Free Emergency (LASEMA)
              </span>
              <a href="tel:767" className="text-[10.5px] font-bold text-[#C89B3C] hover:text-white transition-colors">767</a>
              <span className="text-white/25">|</span>
              <a href="tel:112" className="text-[10.5px] font-bold text-[#C89B3C] hover:text-white transition-colors">112</a>
            </div>

            <div className="flex items-center justify-end gap-4">
              <span className="flex items-center gap-1.5 text-[10.5px] text-white/55 font-medium">
                <Circle size={7} className="fill-emerald-400 text-emerald-400 animate-pulse" />
                All services operational
              </span>
              <span className="text-white/20">|</span>
              <button className="text-[10.5px] font-semibold tracking-[0.14em] text-white/55 hover:text-[#C89B3C] transition-colors">
                EN · YO
              </button>
            </div>
          </div>
        </div>

        {/* 3 ── Main nav */}
        <div className="bg-white border-b border-[#0F3D2E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-[66px] md:h-[74px]">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
                <div className="relative w-[46px] h-[46px] md:w-[52px] md:h-[52px] flex-shrink-0">
                  <Image
                    src="/ibeju-lekki-logo.webp"
                    alt="Ibeju-Lekki Local Government"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-[14.5px] font-bold text-[#0F3D2E] leading-tight tracking-tight">
                    Ibeju-Lekki LGA
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0A1F14]/45 leading-tight">
                    Local Government · Lagos State
                  </div>
                </div>
              </Link>

              {/* Desktop links */}
              <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main navigation">
                {NAV_ITEMS.map((item) => (
                  <DesktopNavItem key={item.label} item={item} />
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/resources/revenue"
                  className="
                    inline-flex items-center gap-2 px-5 py-2.5
                    text-[11.5px] font-bold tracking-[0.08em] uppercase
                    bg-[#0F3D2E] text-white rounded-full
                    hover:bg-[#C89B3C] hover:text-[#0A1F14]
                    transition-all duration-200
                  "
                >
                  <CreditCard size={13} strokeWidth={2.5} />
                  Pay Levies
                </Link>
              </div>

              {/* Mobile controls */}
              <div className="flex items-center gap-2 lg:hidden">
                <Link
                  href="/resources/revenue"
                  className="
                    hidden sm:inline-flex items-center gap-1.5 px-4 py-2
                    text-[11px] font-bold tracking-[0.08em] uppercase
                    bg-[#0F3D2E] text-white rounded-full
                    hover:bg-[#C89B3C] hover:text-[#0A1F14]
                    transition-all duration-200
                  "
                >
                  <CreditCard size={12} strokeWidth={2.5} />
                  Pay Levies
                </Link>

                <button
                  onClick={() => setMobileOpen((o) => !o)}
                  aria-expanded={mobileOpen}
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#0F3D2E]/06 transition-colors"
                >
                  {mobileOpen
                    ? <X size={20} strokeWidth={2} className="text-[#0F3D2E]" />
                    : <Menu size={20} strokeWidth={2} className="text-[#0F3D2E]" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 ── Mobile backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`
          fixed inset-0 z-[190] bg-black/35 backdrop-blur-sm lg:hidden
          transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* 5 ── Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 z-[195] h-full w-[85vw] max-w-[340px]
          bg-white shadow-2xl shadow-black/20 lg:hidden flex flex-col
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#0F3D2E]/10">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image src="/ibeju-lekki-logo-sm.webp" alt="" fill className="object-contain" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#0F3D2E] leading-tight">
                Ibeju-Lekki LGA
              </div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-[#0A1F14]/40">
                Official Website
              </div>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0F3D2E]/06 hover:bg-[#0F3D2E]/12 transition-colors"
          >
            <X size={16} strokeWidth={2} className="text-[#0F3D2E]" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="p-5 border-t border-[#0F3D2E]/10 space-y-3">
          <Link
            href="/resources/revenue"
            onClick={() => setMobileOpen(false)}
            className="
              flex items-center justify-center gap-2 w-full py-3
              text-[12px] font-bold tracking-[0.1em] uppercase
              bg-[#0F3D2E] text-white rounded-full
              hover:bg-[#C89B3C] hover:text-[#0A1F14]
              transition-all duration-200
            "
          >
            <CreditCard size={14} strokeWidth={2.5} />
            Pay Levies
          </Link>
          <div className="flex items-center justify-center gap-3 text-[10.5px] text-[#0A1F14]/45">
            <Phone size={11} className="text-[#0F3D2E]/50" strokeWidth={2} />
            <span>Emergency:</span>
            <a href="tel:767" className="font-bold text-[#0F3D2E] hover:text-[#C89B3C] transition-colors">767</a>
            <span className="text-[#0A1F14]/20">|</span>
            <a href="tel:112" className="font-bold text-[#0F3D2E] hover:text-[#C89B3C] transition-colors">112</a>
          </div>
        </div>
      </div>
    </>
  );
}