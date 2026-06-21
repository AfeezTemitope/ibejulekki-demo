export type Member = {
  name: string   // put the real name here; "To be confirmed" shows a neutral avatar
  role: string
  ward?: string  // legislative councillors only
  image?: string // optional /path.webp in public/ for a photo later
}

// EDIT THESE. Roles are the standard council offices; adjust to the real cabinet.
export const EXECUTIVE: Member[] = [
  { name: 'Hon. Abdullahi Sesan Olowa', role: 'Executive Chairman' },
  { name: 'To be confirmed', role: 'Vice Chairman' },
  { name: 'To be confirmed', role: 'Council Secretary' },
  { name: 'To be confirmed', role: 'Supervisory Councillor, Works & Infrastructure' },
  { name: 'To be confirmed', role: 'Supervisory Councillor, Health' },
  { name: 'To be confirmed', role: 'Supervisory Councillor, Education' },
  { name: 'To be confirmed', role: 'Supervisory Councillor, Environment' },
  { name: 'To be confirmed', role: 'Supervisory Councillor, Agriculture & Rural Development' },
  { name: 'To be confirmed', role: 'Supervisory Councillor, Finance' },
]

export const LEGISLATIVE: Member[] = [
  { name: 'To be confirmed', role: 'Leader of the Legislative Council' },
  { name: 'To be confirmed', role: 'Deputy Leader' },
  { name: 'To be confirmed', role: 'Clerk of the House' },
  { name: 'To be confirmed', role: 'Councillor', ward: 'Ward 1' },
  { name: 'To be confirmed', role: 'Councillor', ward: 'Ward 2' },
  { name: 'To be confirmed', role: 'Councillor', ward: 'Ward 3' },
  // Duplicate the row above for each ward in Ibeju-Lekki.
]

export const MANAGEMENT: Member[] = [
  { name: 'To be confirmed', role: 'Head of Local Government Administration' },
  { name: 'To be confirmed', role: 'Council Treasurer' },
  { name: 'To be confirmed', role: 'Director, Administration & General Services' },
  { name: 'To be confirmed', role: 'Director, Finance' },
  { name: 'To be confirmed', role: 'Director, Works & Housing' },
  { name: 'To be confirmed', role: 'Director, Health Services' },
  { name: 'To be confirmed', role: 'Director, Agriculture & Rural Development' },
  { name: 'To be confirmed', role: 'Director, Budget, Planning & Statistics' },
]
