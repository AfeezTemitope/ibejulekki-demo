'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Newspaper, CreditCard, ShieldCheck, Phone } from 'lucide-react'

const TABS = [
  { href: '/',                   label: 'Home',    Icon: Home },
  { href: '/news',               label: 'News',    Icon: Newspaper },
  { href: '/resources/revenue',  label: 'Pay',     Icon: CreditCard, primary: true },
  { href: '/programmes/shieeld', label: 'SHIEELD', Icon: ShieldCheck },
  { href: '/contact',            label: 'Contact', Icon: Phone },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function BottomNav() {
  const pathname = usePathname() || '/'

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-[180] bg-white border-t border-black/10 shadow-[0_-2px_14px_rgba(0,0,0,0.07)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="grid grid-cols-5">
        {TABS.map(({ href, label, Icon, primary }) => {
          const active = isActive(pathname, href)
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className="flex flex-col items-center justify-center gap-1 py-2"
              >
                <span
                  className={
                    primary
                      ? 'flex items-center justify-center w-11 h-11 -mt-5 rounded-full bg-[#F5A623] text-black shadow-md border-4 border-white'
                      : `flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                          active ? 'text-[#111111]' : 'text-black/45'
                        }`
                  }
                >
                  <Icon size={primary ? 21 : 19} strokeWidth={2} />
                </span>
                <span
                  className={`text-[9.5px] font-semibold tracking-wide ${
                    active ? 'text-[#111111]' : 'text-black/45'
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
