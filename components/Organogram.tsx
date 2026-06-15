const DIRECT: { role: string; note?: string; sub?: string; highlight?: boolean }[] = [
  { role: 'Vice Chairman' },
  { role: 'Council Manager', note: 'Oversees all departments & units', highlight: true },
  { role: 'SLG', sub: 'Supervisors' },
  { role: 'Legislative Arm', sub: 'Clerk of the House' },
]

const DEPARTMENTS = [
  'Admin & Human Resources',
  'Finance & Accounts',
  'Works & Infrastructure',
  'Agric & Social Services',
  'Education & Library Services',
  'Planning, Budget, Research & Statistics',
  'WAPA',
  'Primary Health Care Services',
  'Environmental Services',
]

const UNITS = ['Audit', 'Legal Service', 'Public Affairs', 'Tourism', 'ICT', 'Procurement']

function Connector() {
  return <div className="mx-auto w-px h-7 sm:h-9 bg-black/15" aria-hidden="true" />
}

export default function Organogram() {
  return (
    <section
      className="bg-[#FAFAFA] py-16 sm:py-20 lg:py-24 border-t border-black/06"
      aria-labelledby="org-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#F5A623]" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">
              Government · Structure
            </span>
            <span className="h-px w-8 bg-[#F5A623]" aria-hidden="true" />
          </div>
          <h2
            id="org-heading"
            className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold text-[#111111] tracking-tight leading-tight"
          >
            Council Organogram
          </h2>
          <p className="mt-3 text-[14px] text-black/55 leading-[1.8]">
            How Ibeju-Lekki Local Government is organised — from the Executive Chairman
            to the departments and units that deliver services to residents.
          </p>
        </div>

        {/* Tier 0 — Executive Chairman */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs text-center rounded-2xl bg-[#111111] text-white px-6 py-5 shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5A623] mb-1">
              Executive Chairman
            </div>
            <div className="text-[15px] font-bold leading-tight">Hon. Abdullahi Sesan Olowa</div>
          </div>
        </div>

        <Connector />

        {/* Tier 1 — Reports to the Chairman */}
        <div className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
          Reports to the Executive Chairman
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {DIRECT.map((d) => (
            <div key={d.role} className="flex flex-col">
              <div
                className={`rounded-xl border px-4 py-4 text-center ${
                  d.highlight ? 'border-[#F5A623] bg-[#F5A623]/10' : 'border-black/12 bg-white'
                }`}
              >
                <div className="text-[13px] font-bold text-[#111111] leading-tight">{d.role}</div>
                {d.note && <div className="mt-1 text-[10.5px] text-black/50 leading-snug">{d.note}</div>}
              </div>
              {d.sub && (
                <>
                  <div className="mx-auto w-px h-4 bg-black/12" aria-hidden="true" />
                  <div className="rounded-lg border border-black/10 bg-white px-3 py-2 text-center">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40">
                      Reports
                    </div>
                    <div className="text-[11.5px] font-semibold text-[#111111]">{d.sub}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <Connector />

        {/* Tier 2 — Office of the Council Manager */}
        <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-8 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              Office of the Council Manager
            </span>
          </div>

          {/* Departments */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-black/08" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#111111]">Departments</span>
            <span className="h-px flex-1 bg-black/08" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {DEPARTMENTS.map((name) => (
              <div
                key={name}
                className="flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 hover:border-[#F5A623]/50 transition-colors"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40">Head</div>
                  <div className="text-[12.5px] font-semibold text-[#111111] leading-snug">{name}</div>
                  <div className="text-[10px] text-black/40">Department</div>
                </div>
              </div>
            ))}
          </div>

          {/* Units */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-black/08" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#111111]">Units</span>
            <span className="h-px flex-1 bg-black/08" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {UNITS.map((name) => (
              <div
                key={name}
                className="rounded-xl border border-black/10 bg-white px-3 py-3 text-center hover:border-[#F5A623]/50 transition-colors"
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40 mb-0.5">Head</div>
                <div className="text-[12px] font-semibold text-[#111111] leading-tight">{name}</div>
                <div className="text-[9.5px] text-black/40 mt-0.5">Unit</div>
              </div>
            ))}
          </div>

          {/* Area Officers */}
          <div className="rounded-xl border border-dashed border-black/20 bg-[#FAFAFA] px-4 py-3 text-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40">Field</span>
            <span className="ml-2 text-[12.5px] font-semibold text-[#111111]">Area Officers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
