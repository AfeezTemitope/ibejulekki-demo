export type Pillar = {
  slug: string
  letter: string
  title: string
  tagline: string
  icon: 'security' | 'health' | 'infrastructure' | 'environment' | 'education' | 'economy' | 'digital'
  cover: string
  summary: string
  body: string[]
  highlights: string[]
}

// Source: "Making Ibeju-Lekki Great for Everyone" 2025-2029 Manifesto.
// Acronym order: S H I E E L D
export const PILLARS: Pillar[] = [
  {
    slug: 'security',
    letter: 'S',
    title: 'Security',
    tagline: 'Securing our future: a safer, stronger Ibeju-Lekki.',
    icon: 'security',
    cover: '/shieeld/shieeld-security.webp',
    summary: 'A 24/7 security command centre, deeper collaboration with security agencies, a better-equipped community corps, and the area first fire service unit.',
    body: [
      'At the heart of the plan is a 24/7 Central Security Command Centre for surveillance, emergency response and coordination. It enables timely incident reporting, strategic intelligence gathering and smart crime mapping, backed by community-centred surveillance for early detection and swift intervention.',
      'The council will deepen collaboration with the police, civil defence and local outfits, align local operations with the Lagos State Security Trust Fund model, equip the Ibeju-Lekki Community Corps (Folumo) with patrol motorbikes, and establish a dedicated fire service unit for disaster response.',
    ],
    highlights: [
      '24/7 Central Security Command Centre with smart crime mapping',
      'Closer joint operations with police, civil defence and local security',
      'Ibeju-Lekki Community Corps (Folumo) equipped with patrol motorbikes',
      'A dedicated Ibeju-Lekki Fire Service Unit',
    ],
  },
  {
    slug: 'health',
    letter: 'H',
    title: 'Health',
    tagline: 'Expanding healthcare access.',
    icon: 'health',
    cover: '/shieeld/shieeld-health.webp',
    summary: 'Upgrading every primary health centre, a flagship Maternal and Child Hospital, mobile clinics, and community health insurance under Ilera Eko.',
    body: [
      'Ibeju-Lekki has 14 primary health centres, 9 of them already fully upgraded. The next term completes the rest, including Iberekodo, Otunla, Oko Oba and Debojo, so every facility meets one standard of care, safety and accessibility, with priority for underserved and riverine areas.',
      'Plans include a flagship Maternal and Child Hospital, rapid-response mobile clinics, solar-powered centres, more frontline health workers, and a Community Health Insurance Scheme aligned with the Lagos State Ilera Eko initiative for indigent and vulnerable residents.',
    ],
    highlights: [
      'All 14 primary health centres upgraded to one standard',
      'A flagship Maternal and Child Hospital',
      'Rapid-response mobile clinics and solar-powered health centres',
      'Community health insurance aligned with Ilera Eko',
    ],
  },
  {
    slug: 'infrastructure',
    letter: 'I',
    title: 'Infrastructure',
    tagline: 'Deepening infrastructure renewal.',
    icon: 'infrastructure',
    cover: '/shieeld/shieeld-infrastructure.webp',
    summary: 'More roads with a dedicated maintenance agency, affordable housing, reliable power, drainage, clean water and solar street lighting.',
    body: [
      'Building on first-term roads in Orimedu, Idado, Igando and Lakowe, the Rural-Urban Linkage Expansion Programme will upgrade strategic roads of at least 500 metres across at least 10 wards, each with functional drainage, durable surfacing and solar street lighting, protected by a new Ibeju-Lekki Road Maintenance Agency.',
      'A Build-and-Lease Housing Initiative with private developers targets affordable home ownership and rental, while a Power Sector Renewal Drive distributes transformers, pursues stalled transmission lines and coastal electrification, alongside clean water, tertiary drainage and a first-ever fire station.',
    ],
    highlights: [
      'Rural-Urban Linkage road programme across at least 10 wards',
      'A dedicated Ibeju-Lekki Road Maintenance Agency',
      'Build-and-Lease affordable housing with private developers',
      'Transformers, coastal electrification and clean water',
    ],
  },
  {
    slug: 'environment',
    letter: 'E',
    title: 'Environmental Sustainability',
    tagline: 'Community-driven environmental initiatives.',
    icon: 'environment',
    cover: '/shieeld/shieeld-environment.webp',
    summary: 'Scaling waste collection, recycling and flood control, more green workers, tree planting and eco-friendly parks.',
    body: [
      'First-term efforts, including monthly sanitation drives, the Keke Jaja waste tricycles, the Cleaner Waterways Campaign and over 400 environmental workers, will scale up. From 12,000 bags cleared monthly with 20 tricycles, the goal is 40,000 bags, by procuring 3 high-capacity compactors, 4 industrial Dino bins and 20 more Keke Jaja tricycles.',
      'Through public-private partnerships the council will set up Transfer Loading Stations and recycling, run scheduled desilting and market sanitation, build modern public toilets, and launch the Green Ibeju Project for tree planting, coastal protection and waste-to-wealth programmes.',
    ],
    highlights: [
      'Waste collection scaling toward 40,000 bags monthly',
      '3 compactors, 4 Dino bins and 20 more Keke Jaja tricycles',
      'Transfer Loading Stations and recycling (waste-to-wealth)',
      'Green Ibeju Project: tree planting and coastal protection',
    ],
  },
  {
    slug: 'education',
    letter: 'E',
    title: 'Education & Youth Development',
    tagline: 'Empowering the next generation.',
    icon: 'education',
    cover: '/shieeld/shieeld-education.webp',
    summary: 'Digitally enabled model schools, the Ibeju Digital Learning Initiative, scholarships, innovation hubs and youth skills.',
    body: [
      'First-term classroom rehabilitation, learning materials, scholarships and bursaries continue, anchored by new digitally enabled Ibeju-Lekki Model Schools designed for 21st-century learning.',
      'The Ibeju Digital Learning Initiative and Digital Innovation Hubs offer short, high-impact training in digital marketing, content creation, 2D/3D animation, web, coding and app development, and music production, aiming to make youth job-ready in 1 to 3 months, with vocational starter kits and regular employment and entrepreneurship fairs.',
    ],
    highlights: [
      'Digitally enabled Ibeju-Lekki Model Schools',
      'Ibeju Digital Learning Initiative and Innovation Hubs',
      'Job-ready training in 1 to 3 months',
      'Scholarships, bursaries and vocational starter kits',
    ],
  },
  {
    slug: 'local-economy',
    letter: 'L',
    title: 'Local Economy',
    tagline: 'Economic empowerment and enterprise support.',
    icon: 'economy',
    cover: '/shieeld/shieeld-local-economy.webp',
    summary: 'A cooperative development fund, structured market hubs, agriculture, SME support and tourism-led growth.',
    body: [
      'Building on first-term grants, cooperative loans and agricultural processing for cassava and plantain farmers, a Regional Cooperative Development Fund, seeded by the council and structured to grow toward a 100 million naira portfolio, will provide flexible finance and advisory services to community enterprises.',
      'A Market Restructuring Programme develops specialised markets such as cattle markets, auto-parts hubs and foodstuff clusters, plus structured motor parks and bus terminals, quarterly trade fairs and expos, and tourism-led growth through entertainment hubs, beach resorts, cultural heritage centres and seasonal festivals.',
    ],
    highlights: [
      'Regional Cooperative Development Fund (toward 100m naira)',
      'Specialised market hubs and structured motor parks',
      'Quarterly trade fairs and business expos',
      'Tourism-led growth: resorts, festivals and heritage',
    ],
  },
  {
    slug: 'digital-governance',
    letter: 'D',
    title: 'Digital Governance & Civic Participation',
    tagline: 'Build a smarter and participatory governance.',
    icon: 'digital',
    cover: '/shieeld/shieeld-digital-governance.webp',
    summary: 'An Ibeju-Lekki Digital Civic Centre app, automated revenue, town halls, participatory budgeting and a transparency dashboard.',
    body: [
      'First-term digital transformation, including business registration and enumeration systems that boosted internally generated revenue, leads to the Ibeju-Lekki Digital Civic Centre on web, Android and iOS: lodge complaints, track capital projects by ward, join community polls and get service updates, backed by a Local Government Response Team.',
      'Quarterly Public Town Halls and ward-based Community Budget Councils will make budgeting a community affair, with simplified budget summaries in English and Yoruba, and a Monitoring, Evaluation and Transparency Dashboard tracking response times, top-requested projects, and resolved versus pending issues.',
    ],
    highlights: [
      'Ibeju-Lekki Digital Civic Centre app (web, Android, iOS)',
      'Quarterly public town halls in every ward',
      'Participatory budgeting in English and Yoruba',
      'Transparency dashboard on complaints and projects',
    ],
  },
]
