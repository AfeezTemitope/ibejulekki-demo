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
    summary: 'Working with residents and security agencies to keep neighbourhoods, markets and businesses safe across every ward.',
    body: [
      "Security underpins everything else the council sets out to do. The administration works closely with residents, community leaders and the Lagos State security framework to protect lives, property and livelihoods across the wards.",
      "To ease the heavy traffic and reduce risk along the Lekki-Epe expressway during its reconstruction, the council established the Ibeju-Lekki Traffic Managers corps, working alongside LASTMA and the FRSC to keep the corridor moving. Schools have been made safer with new perimeter fences, gates and security houses, and street lighting has been extended across the secretariat and surrounding areas.",
    ],
    highlights: [
      'Ibeju-Lekki Traffic Managers corps supporting LASTMA and FRSC on the Lekki-Epe expressway',
      'New perimeter fences, gates and security houses at several primary schools',
      'Street lighting extended across the council perimeter',
      'Close cooperation with state security agencies and community leaders',
    ],
  },
  {
    slug: 'health',
    letter: 'H',
    title: 'Health',
    icon: 'health',
    summary: 'Bringing quality, affordable primary healthcare closer to home and strengthening the local health workforce.',
    body: [
      "Health sits at the centre of the agenda. Three primary health centres have been comprehensively rehabilitated, renewed and expanded over the past three years, so more residents can receive care within their own communities.",
      "The local health workforce was strengthened by recruiting doctors and additional health personnel, improving the quality of care delivered. Public facilities, including schools, markets, primary health centres, the secretariat and the Ibeju-Lekki General Hospital, are fumigated and disinfected every quarter to curb the spread of disease.",
    ],
    highlights: [
      'Three primary health centres rehabilitated, renewed and expanded',
      'Doctors and additional health personnel recruited',
      'Quarterly fumigation and disinfection of health and public facilities',
      'Ongoing health awareness and preventive-care campaigns',
    ],
  },
  {
    slug: 'infrastructure',
    letter: 'I',
    title: 'Infrastructure',
    icon: 'infrastructure',
    summary: 'Rebuilding roads, drainage, power and public buildings after years of decay, and automating council services.',
    body: [
      "Infrastructure is the bedrock of development. The council graded and stabilised about 20 kilometres of community roads and built new ones, including a 200-metre flexible-pavement road at Idado-Badore, a 450-metre secretariat road and a 750-metre Ocean View road at Orimedu, alongside box culverts that improve drainage.",
      "After the 2020 secretariat fire, the administration began a modern Executive Building Complex and a new Legislative Building, remodelled the Vocational Skills Centre, and re-equipped offices with furniture, vehicles and new ICT computers to support automation. Power supply was boosted with several 500KVA installations and a 1000KVA refurbishment at the Council Secretariat.",
    ],
    highlights: [
      'About 20km of roads graded and stabilised, plus new road construction',
      'Modern Executive Complex and Legislative Building under construction',
      'Several 500KVA installations and a 1000KVA upgrade at the secretariat',
      'Box culverts and drainage works across communities',
      'New ICT computers and office equipment for faster, automated services',
    ],
  },
  {
    slug: 'education',
    letter: 'E',
    title: 'Education',
    icon: 'education',
    summary: 'Removing barriers to learning with free exam forms, bursaries, scholarships and university-backed coaching.',
    body: [
      "Education is a key pillar. In partnership with Pan-Atlantic University, the council runs weekend coaching and tutorial classes that prepare final-year students for common entrance, UTME and WASSCE, a programme that has run for over two years with strong results.",
      "Each year the council provides hundreds of free JAMB and GCE forms, pays bursaries to over 250 indigent students, and awards scholarships to pupils admitted to federal and state institutions. Head teachers across the 27 primary schools receive a monthly running cost, and initiatives such as the Annual Science Quiz and the Mentors Platform widen opportunity, alongside renovated classrooms, libraries and toilets in several schools.",
    ],
    highlights: [
      'Weekend coaching with Pan-Atlantic University (common entrance, UTME, WASSCE)',
      'Around 400 free JAMB and 350 free GCE forms every year',
      'Bursaries to 250+ students and scholarships at multiple levels',
      'Monthly running-cost support to all 27 primary schools',
      'Annual Science Quiz Competition and the Mentors Platform',
      'Renovated classrooms, libraries and toilets across several primary schools',
    ],
  },
  {
    slug: 'environment',
    letter: 'E',
    title: 'Environment',
    icon: 'environment',
    summary: 'Daily cleaning, waste management and large-scale de-flooding to keep Ibeju-Lekki clean, green and resilient.',
    body: [
      "Environmental sustainability has been a priority from day one. The Cleaner Ibeju-Lekki Initiative created around 480 jobs, about 420 street sweepers, 30 gardeners and a 30-strong environmental taskforce, keeping streets and public institutions tidy every day.",
      "Because Ibeju-Lekki lies at one of the lowest points in the state, the council carries out an annual de-flooding and channelization of primary canals and desilts drainage across communities. A garbage-collection tricycle fleet, waste-policing, quarterly fumigation and tree planting complete the programme.",
    ],
    highlights: [
      'Cleaner Ibeju-Lekki Initiative: about 480 jobs (sweepers, gardeners, taskforce)',
      'Annual de-flooding and channelization of primary canals',
      'Garbage-collection tricycle fleet and waste-policing',
      'Quarterly fumigation of schools, markets, health centres and offices',
      'Tree planting and removal of illegal dump sites',
    ],
  },
  {
    slug: 'local-economy',
    letter: 'L',
    title: 'Local Economy',
    icon: 'economy',
    summary: 'A revenue overhaul that grew IGR over 500 percent, funding markets, credit for traders, tourism and agriculture.',
    body: [
      "A self-reliant local economy funds the projects residents see around them. An automated revenue-collection system and a major reform of administration grew internally generated revenue by over 500 percent, from under 30 million to over 150 million, with more than 70,000 new payers captured into the database.",
      "That growth is reinvested across the wards: zero-interest MSME loans and non-refundable grants for traders and artisans, new markets at Abule Parapo (80 lock-up shops) and Eleko (250 shops), the inaugural Ibeju-Lekki Beach Carnival that drew around 5,000 visitors, and agricultural schemes including a 10-hectare cassava and plantain out-grower programme at Idi-Ori.",
    ],
    highlights: [
      'IGR grown by over 500 percent (from under 30 million to over 150 million)',
      '70,000+ new payers captured through an automated revenue system',
      'Zero-interest MSME loans and grants for traders and artisans',
      'New markets at Abule Parapo (80 shops) and Eleko (250 shops)',
      'Inaugural Ibeju-Lekki Beach Carnival drew around 5,000 visitors',
      '10-hectare cassava and plantain out-grower scheme at Idi-Ori',
    ],
  },
  {
    slug: 'development',
    letter: 'D',
    title: 'Development',
    icon: 'development',
    summary: 'Inclusive social development so the area rapid growth reaches every community, family and ward.',
    body: [
      "Development is pursued so that rapid growth reaches everyone. Free food palliatives have supported over 20,000 residents, and council-backed community markets and price-discount programmes have eased the cost of living for thousands more.",
      "Investment in young people runs through the Mentors Platform, the Annual Science Quiz and youth tutorials, alongside women empowerment, staff welfare and community engagement, building an equitable, integrated community as Ibeju-Lekki grows around the Dangote Refinery, the Lekki Free Trade Zone and the Deep Seaport.",
    ],
    highlights: [
      'Free food palliatives reaching over 20,000 residents',
      'Community markets and price-discount programmes easing living costs',
      'Mentors Platform and youth development initiatives',
      'Women empowerment, staff welfare and community engagement',
      'Balanced, inclusive growth across every ward',
    ],
  },
]
