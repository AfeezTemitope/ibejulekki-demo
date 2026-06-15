export type Pillar = {
  slug: string
  letter: string
  title: string
  icon: 'security' | 'health' | 'infrastructure' | 'education' | 'environment' | 'economy' | 'development'
  summary: string
  body: string[]
  highlights: string[]
}

export const PILLARS: Pillar[] = [
  {
    slug: 'security',
    letter: 'S',
    title: 'Security',
    icon: 'security',
    summary: 'Strengthening the local security architecture and fostering community cooperation, so residents and businesses operate in a safe and stable environment.',
    body: [
      'Security underpins everything else the council sets out to do. The administration works closely with residents, community leaders and the Lagos State security framework to keep neighbourhoods, markets and businesses safe across the wards.',
      'To ease movement and reduce risk along the busy Lekki-Epe corridor, the council established the Ibeju-Lekki Traffic Managers corps, complementing LASTMA and the FRSC, while continuing to support the agencies responsible for community safety.',
    ],
    highlights: [
      'Ibeju-Lekki Traffic Managers corps established for the Lekki-Epe corridor',
      'Close cooperation with state security agencies and community leaders',
      'A safer environment for residents, traders and investors',
    ],
  },
  {
    slug: 'health',
    letter: 'H',
    title: 'Health',
    icon: 'health',
    summary: 'Rehabilitating and expanding primary health centres and recruiting more doctors and health workers to widen access to quality, affordable care.',
    body: [
      'Bringing quality healthcare closer to home has been a clear priority. Three primary health centres have been rehabilitated and expanded so that more residents can receive care within their own communities.',
      'Alongside the upgraded facilities, more doctors and health personnel have been recruited, and outreach and wellness activities help residents access preventive care.',
    ],
    highlights: [
      'Three primary health centres rehabilitated and expanded',
      'More doctors and health personnel recruited',
      'Outreach and wellness programmes for residents',
    ],
  },
  {
    slug: 'infrastructure',
    letter: 'I',
    title: 'Infrastructure',
    icon: 'infrastructure',
    summary: 'Investing in roads, a modern council secretariat, ICT automation and public works that connect communities and improve service delivery.',
    body: [
      'The council is rebuilding the physical and digital backbone that keeps local government running. A modern secretariat is under construction to replace the building lost in 2020, and offices have been re-equipped to serve residents better.',
      'ICT systems are being automated to speed up day-to-day services, while road and public-works projects improve how communities connect.',
    ],
    highlights: [
      'Modern council secretariat under construction',
      'Offices re-equipped and ICT systems automated',
      'Road and public-works improvements across the wards',
    ],
  },
  {
    slug: 'education',
    letter: 'E',
    title: 'Education',
    icon: 'education',
    summary: 'Free JAMB and WASSCE forms, bursaries and scholarships, and weekend coaching with Pan-Atlantic University to lift student outcomes.',
    body: [
      'Removing barriers to learning gives young people in Ibeju-Lekki a fairer shot at opportunity. Each year the council provides hundreds of free JAMB and WASSCE forms to eligible students.',
      'Weekend coaching delivered in partnership with Pan-Atlantic University prepares UTME and WASSCE candidates, while bursaries and scholarships support students from primary through tertiary level.',
    ],
    highlights: [
      'Hundreds of free JAMB and WASSCE forms every year',
      'Weekend coaching with Pan-Atlantic University',
      'Bursaries and scholarships at every level',
    ],
  },
  {
    slug: 'environment',
    letter: 'E',
    title: 'Environment',
    icon: 'environment',
    summary: 'Daily street sweeping, the Cleaner Ibeju-Lekki initiative, de-flooding of canals, and sustainable waste management.',
    body: [
      'Keeping Ibeju-Lekki clean, green and resilient is a daily effort. Hundreds of street sweepers work across the local government, and the Cleaner Ibeju-Lekki initiative clears weeds around schools and health centres.',
      'A large-scale de-flooding exercise has cleared blocked canals and reopened access roads, reducing the impact of heavy rains on communities.',
    ],
    highlights: [
      'Hundreds of street sweepers working daily',
      'Cleaner Ibeju-Lekki clean-up initiative',
      'De-flooding of canals and channels to reduce flooding',
    ],
  },
  {
    slug: 'local-economy',
    letter: 'L',
    title: 'Local Economy',
    icon: 'economy',
    summary: 'Reforming revenue administration, with roughly 500 percent growth in internally generated revenue, and supporting markets, traders and small enterprise.',
    body: [
      'A stronger, more self-reliant local economy funds the projects residents see around them. A complete overhaul of revenue collection and administration delivered roughly 500 percent growth in internally generated revenue.',
      'That growth is reinvested across the wards, while markets, traders and small enterprises are supported to expand and create jobs.',
    ],
    highlights: [
      'Around 500 percent growth in internally generated revenue',
      'Transparent, reformed revenue administration',
      'Support for markets, traders and small enterprise',
    ],
  },
  {
    slug: 'development',
    letter: 'D',
    title: 'Development',
    icon: 'development',
    summary: 'Inclusive social intervention, including conditional cash transfers to vulnerable households, and planned, balanced growth across every ward.',
    body: [
      'Development is pursued so that rapid growth reaches everyone. Conditional cash transfers support vulnerable households, helping residents who need it most.',
      'Planned, balanced development across every ward keeps pace with the activity around the Dangote Refinery, the Lekki Free Trade Zone and the Deep Seaport, so communities share in the area\'s rise.',
    ],
    highlights: [
      'Conditional cash transfers for vulnerable households',
      'Balanced, planned growth across every ward',
      'Local communities sharing in the area\'s rapid development',
    ],
  },
]
