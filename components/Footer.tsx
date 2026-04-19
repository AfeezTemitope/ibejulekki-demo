import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone/80 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-12 h-12" />
              <div>
                <div className="font-display text-lg text-bone font-semibold">Ibeju-Lekki</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-bone/50">Local Government</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-bone/60">Secretariat, Igando-Oloja, Ibeju-Lekki, Lagos State, Nigeria.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-bone mb-5 text-sm uppercase tracking-wider">Government</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Executive Arms</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Legislative Arms</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Departments</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Budget & Finance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-bone mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Pay Taxes</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Birth Registration</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Business Permits</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Report an Issue</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-bone mb-5 text-sm uppercase tracking-wider">Emergency</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-bone/50">Chairman</span><span>0808 347 2704</span></li>
              <li className="flex justify-between"><span className="text-bone/50">Council Mgr</span><span>0807 979 2040</span></li>
              <li className="flex justify-between"><span className="text-bone/50">Info Officer</span><span>0802 341 7422</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-bone/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bone/40">
          <div>© 2026 Ibeju-Lekki Local Government Area. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
