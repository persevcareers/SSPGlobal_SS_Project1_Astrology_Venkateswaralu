import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.qualifications, href: '#qualifications' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const serviceLinks = [
    t.services.items[0].title,
    t.services.items[1].title,
    t.services.items[2].title,
    t.services.items[3].title,
    t.services.items[4].title,
    t.services.items[5].title,
  ];

  return (
    <footer className="relative bg-spiritual-dark">
      {/* Spiritual quote banner */}
      <div className="bg-gradient-to-r from-gold-500/5 via-saffron-500/10 to-gold-500/5 py-8">
        <p className="text-center font-decorative text-lg sm:text-xl text-gold-400/80 italic max-w-3xl mx-auto px-4">
          {t.footer.quote}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-saffron-500 flex items-center justify-center text-spiritual-dark font-heading font-bold text-lg">
                V
              </div>
              <div>
                <span className="font-heading text-lg font-semibold gradient-text block">
                  {t.nav.brandName}
                </span>
                <span className="text-xs text-gold-400/60 tracking-widest uppercase">
                  {t.nav.brandSubtitle}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Hereditary astrologer with 15+ years of experience guiding lives through ancient Jyotisha wisdom.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', name: 'Twitter' },
                { icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z', name: 'Facebook' },
                { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', name: 'Instagram' },
                { icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z', name: 'YouTube' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold-500/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-400 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-gold-500/30">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-400 mb-4">
              {t.footer.services}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((name, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-gold-500/30">›</span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-400 mb-4">
              {t.contact.sectionTag}
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">📞</span>
                <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="hover:text-gold-400 transition-colors">
                  {t.contact.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">✉️</span>
                <a href={`mailto:${t.contact.email}`} className="hover:text-gold-400 transition-colors">
                  {t.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">📍</span>
                {t.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 mt-8">
        <p className="text-sm text-gold-500/60 text-center max-w-4xl mx-auto leading-relaxed border border-gold-500/10 bg-gold-500/5 p-4 rounded-lg">
          <strong className="text-gold-400">Disclaimer: </strong>
          {t.footer.disclaimer || 'Astrology requires faith and is an interpretative art based on ancient scriptures. The readings provided are indicative and for spiritual guidance only. They should not substitute for professional medical, legal, or financial advice. Results interpretation may vary.'}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-500/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>
          <p className="text-sm text-gray-500">{t.footer.designedBy}</p>
        </div>
      </div>
    </footer>
  );
}
