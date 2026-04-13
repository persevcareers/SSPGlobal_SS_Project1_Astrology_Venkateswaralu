import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Qualifications() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="qualifications" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-spiritual-dark via-spiritual-deeper to-spiritual-dark" />
      
      {/* Decorative mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02]">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#FFC526" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#FFC526" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#FFC526" strokeWidth="0.3" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              stroke="#FFC526"
              strokeWidth="0.2"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 text-gold-400 bg-gold-500/5 mb-4">
            {t.qualifications.sectionTag}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.qualifications.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.qualifications.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.qualifications.items.map((item, i) => (
            <QualificationCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QualificationCard({ item, index }) {
  const [cardRef, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden text-center">
        {/* Hover glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-semibold text-gold-300 mb-2">
          {item.title}
        </h3>

        {/* Issuer */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {item.issuer}
        </p>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-12 h-12 opacity-5">
          <svg viewBox="0 0 40 40" fill="none">
            <path d="M40 0L0 40V0H40Z" fill="#FFC526" />
          </svg>
        </div>
      </div>
    </div>
  );
}
