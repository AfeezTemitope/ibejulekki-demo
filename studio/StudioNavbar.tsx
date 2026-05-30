import { type NavbarProps } from 'sanity'

export default function StudioNavbar(props: NavbarProps) {
  return (
    <div style={{
      background: '#0F3D2E',
      borderBottom: '1px solid rgba(200,155,60,0.2)',
    }}>
      {/* Color stripe */}
      <div style={{ display: 'flex', height: '3px' }}>
        <div style={{ flex: 1, background: '#BE1E2D' }} />
        <div style={{ flex: 1, background: '#1A3A7A' }} />
        <div style={{ flex: 1, background: '#F5A623' }} />
        <div style={{ flex: 1, background: '#1B7A3E' }} />
      </div>
      {props.renderDefault(props)}
    </div>
  )
}
