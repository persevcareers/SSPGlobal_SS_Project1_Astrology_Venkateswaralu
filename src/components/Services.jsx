import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="services" className="relative py-24 bg-cosmic overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-5 animate-float" style={{ animationDelay: '1s' }}>☀️</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-5 animate-float" style={{ animationDelay: '3s' }}>🌙</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 text-gold-400 bg-gold-500/5 mb-4">
            {t.services.sectionTag}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="glow-button inline-flex items-center gap-2 text-lg"
          >
            <span className="relative z-10">{t.nav.bookNow}</span>
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [cardRef, isVisible] = useScrollAnimation(0.1);

  // Color accents for each card
  const accents = [
    'hover:shadow-gold-500/10',
    'hover:shadow-sacred-red/10',
    'hover:shadow-sacred-blue/10',
    'hover:shadow-sacred-green/10',
    'hover:shadow-saffron-500/10',
    'hover:shadow-gold-500/10',
  ];

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`glass-card rounded-2xl p-8 h-full relative overflow-hidden ${accents[index]}`}>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-saffron-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-saffron-500/5 border border-gold-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:border-gold-500/30 transition-all duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-gold-300 mb-3 group-hover:text-gold-200 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-gold-500/0 group-hover:text-gold-400 transition-all duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Background icon */}
        <div className="absolute -bottom-4 -right-4 text-8xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
          {service.icon}
        </div>
      </div>
    </div>
  );
}
