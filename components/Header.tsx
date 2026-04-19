import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
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
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-11 h-11 transition-transform group-hover:rotate-[-4deg]" />
            <div>
              <div className="font-display text-[17px] font-semibold leading-tight text-forest">Ibeju-Lekki</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-ink/60 leading-tight">Local Government · Lagos State</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-ink/80">
            <Link href="/" className="link-hover">Home</Link>
            <Link href="/news" className="link-hover text-forest font-semibold">News</Link>
            <Link href="#" className="link-hover">Services</Link>
            <Link href="#" className="link-hover">Executive</Link>
            <Link href="#" className="link-hover">About</Link>
            <Link href="#" className="link-hover">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-4 py-2 text-sm border border-forest/20 rounded-full hover:bg-forest hover:text-bone hover:border-forest transition-all">
              Search
            </button>
            <button className="px-5 py-2 text-sm bg-forest text-bone rounded-full hover:bg-ink transition-colors">
              Pay Taxes
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
