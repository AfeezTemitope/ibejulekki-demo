import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const FOOTER_NAV = [
  { heading:'Government', links:[{ label:'Executive Chairman', href:'/government/chairman' },{ label:'Executive Council', href:'/government/executive-council' },{ label:'Management Team', href:'/government/management-team' },{ label:'Vision & Mission', href:'/government/vision' }] },
  { heading:'Programmes', links:[{ label:'SHIEELD Agenda', href:'/programmes/shieeld' },{ label:'Agenda 2029', href:'/programmes/agenda-2029' },{ label:'2025 Budget', href:'/programmes/budget' },{ label:'Programme Delivery', href:'/programmes/delivery' }] },
  { heading:'Services',   links:[{ label:'Pay Levies', href:'/resources/revenue' },{ label:'Career & Jobs', href:'/resources/careers' },{ label:'Waste Collection', href:'/resources/waste' },{ label:'Download Forms', href:'/resources/forms' },{ label:'Report an Issue', href:'/report' }] },
  { heading:'Information',links:[{ label:'News & Events', href:'/news' },{ label:'About Ibeju-Lekki', href:'/about/history' },{ label:'Traditional Rulers', href:'/about/traditional-rulers' },{ label:'Arts & Culture', href:'/about/culture' },{ label:'Contact Us', href:'/contact' }] },
]

const SETTINGS = {
  address:  'Local Government Secretariat,\nIbeju-Lekki, Lagos State, Nigeria',
  phone:    '+234 (0) 813 000 0000',
  email:    'info@ibejulekki.lg.gov.ng',
  socials:  { twitter:'#', facebook:'#', instagram:'#', youtube:'#' },
}

export default function Footer() {
  return (
    <footer className="bg-[#060F09] text-white/45">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-16 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/05">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/ibeju-lekki-logo-sm.webp" alt="Ibeju-Lekki LGA" fill className="object-contain" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white/90 leading-tight">Ibeju-Lekki LGA</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">Official Government Website</div>
              </div>
            </Link>
            <p className="text-[12.5px] leading-[1.8] mb-5 max-w-[240px]">The official website of Ibeju-Lekki Local Government Area, Lagos State, Nigeria.</p>
            <div className="space-y-2.5 text-[12px] mb-6">
              <div className="flex items-start gap-2.5"><MapPin size={13} strokeWidth={1.8} className="text-[#C89B3C] mt-0.5 flex-shrink-0" /><span className="leading-snug whitespace-pre-line">{SETTINGS.address}</span></div>
              <a href={`tel:${SETTINGS.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors"><Phone size={13} strokeWidth={1.8} className="text-[#C89B3C] flex-shrink-0" />{SETTINGS.phone}</a>
              <a href={`mailto:${SETTINGS.email}`} className="flex items-center gap-2.5 hover:text-[#C89B3C] transition-colors"><Mail size={13} strokeWidth={1.8} className="text-[#C89B3C] flex-shrink-0" />{SETTINGS.email}</a>
            </div>
            <div className="flex items-center gap-2">
              {[{ Icon:Twitter, href:SETTINGS.socials.twitter, label:'X / Twitter' },{ Icon:Facebook, href:SETTINGS.socials.facebook, label:'Facebook' },{ Icon:Instagram, href:SETTINGS.socials.instagram, label:'Instagram' },{ Icon:Youtube, href:SETTINGS.socials.youtube, label:'YouTube' }].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/06 flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#0A1F14] transition-all duration-200">
                  <Icon size={14} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C89B3C] mb-4">{col.heading}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-[12.5px] hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-block">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-[10.5px]">
          <span>© 2026 Ibeju-Lekki Local Government Area. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <a href="https://lagosstate.gov.ng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">Lagos State Govt <ExternalLink size={10} /></a>
          </div>
        </div>
      </div>
      <div className="flex h-[5px]" aria-hidden="true">
        <div className="flex-1 bg-[#BE1E2D]" /><div className="flex-1 bg-[#1A3A7A]" /><div className="flex-1 bg-[#F5A623]" /><div className="flex-1 bg-[#1B7A3E]" />
      </div>
    </footer>
  )
}
