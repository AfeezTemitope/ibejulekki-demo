import TeamPage from '@/components/TeamPage'
import { MANAGEMENT } from '@/lib/cabinet'

export const metadata = {
  title: 'Management Team | Ibeju-Lekki Local Government',
  description:
    'The management team of Ibeju-Lekki Local Government: the career civil service that delivers council services day to day.',
}

export default function Page() {
  return (
    <TeamPage
      group="Management Team"
      eyebrow="Government &middot; Management"
      title="Management Team"
      intro="The management team is the career civil service that delivers council services day to day, led by the Head of Local Government Administration and the directors of each department."
      members={MANAGEMENT}
    />
  )
}
