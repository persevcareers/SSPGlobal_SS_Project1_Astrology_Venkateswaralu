import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ServiceIcon({ title }) {
  const common = {
    className: 'w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
  };

  switch (title) {
    case 'Horoscope Reading':
    case 'జాతక చదవడం':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.2" />
          <path strokeWidth="1.2" strokeLinecap="round" d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7L4.9 19.1" />
        </svg>
      );
    case 'Marriage Matching':
    case 'వివాహ అనుకూలత':
      return (
        <svg {...common}>
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M8.5 6.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm7 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M10.5 11.5 13.5 14.5M8 15.5l4 4 4-4" />
        </svg>
      );
    case 'Career Guidance':
    case 'వృత్తి మార్గదర్శనం':
      return (
        <svg {...common}>
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 19V9.5l5-3 5 3V19M10 11.5h4" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M9.5 6.8V5a2.5 2.5 0 0 1 5 0v1.8" />
        </svg>
      );
    case 'Vastu Consultation':
    case 'వాస్తు సంప్రదింపు':
      return (
        <svg {...common}>
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8v9H3v-9z" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6M8 11h8" />
        </svg>
      );
    case 'Dosha Analysis':
    case 'దోష విశ్లేషణ':
      return (
        <svg {...common}>
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c2 2.4 4.8 5.6 4.8 9a4.8 4.8 0 0 1-9.6 0c0-3.4 2.8-6.6 4.8-9Z" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M9.3 12.6c.8.2 1.6-.1 2.2-.8.8-.9 1.6-1.2 3-1" />
        </svg>
      );
    case 'Personal Consultation':
    case 'వ్యక్తిగత సంప్రదింపు':
      return (
        <svg {...common}>
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M12 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm-6 13c1-3 3-4.5 6-4.5s5 1.5 6 4.5" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M18 9h3M19.5 7.5v3M3 9h3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" strokeWidth="1.2" />
          <path strokeWidth="1.2" strokeLinecap="round" d="M12 7v5l3 2" />
        </svg>
      );
  }
}

function ServiceCard({ service, index }) {
  const [cardRef, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={cardRef}
      className={`h-full transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <article className="group relative h-full flex flex-col rounded-[28px] bg-gradient-to-br from-[#0a1122]/80 to-[#040812]/90 backdrop-blur-xl border border-gold-500/20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_50px_-12px_rgba(234,179,8,0.25)] hover:border-gold-500/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        {/* Shine Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
        
        {/* Sacred Glow */}
        <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-20 flex flex-col h-full p-8 sm:p-10">
          <div className="mb-8 relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out shadow-[0_0_20px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] text-gold-400 shrink-0">
            <ServiceIcon title={service.title} />
          </div>

          <h3 className="font-heading text-2xl sm:text-[1.6rem] tracking-wide font-bold bg-gradient-to-r from-gold-400 to-saffron-400 bg-clip-text text-transparent mb-5 transition-all duration-300 drop-shadow-sm">
            {service.title}
          </h3>

          <div className="h-px w-12 bg-gradient-to-r from-gold-500/60 to-transparent mb-6 transition-all duration-500 group-hover:w-24 group-hover:from-gold-400" />

          <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-light flex-1">
            {service.description}
          </p>
        </div>
      </article>
    </div>
  );
}

export default function Services() {
  const { language, t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const sectionCopy = language === 'te'
    ? {
        title: 'మా దివ్య జ్యోతిష సేవలు',
        subtitle: 'ప్రాచీన వేద జ్ఞానం మరియు గ్రహ దర్శనంతో మీ జీవితానికి మార్గదర్శనం',
        cta: 'సంప్రదింపు బుక్ చేయండి',
      }
    : {
        title: 'OUR DIVINE ASTROLOGY SERVICES',
        subtitle: 'Guiding your life through ancient Vedic wisdom and cosmic insights',
        cta: 'Book Sacred Consultation',
      };

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#030612] via-[#09152b] to-[#030612]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040815] via-[#091022]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div
          ref={sectionRef}
          className={`mx-auto mb-20 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="inline-flex flex-col items-center justify-center gap-4 mb-6">
            <span className="px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-gold-500/40 text-gold-400 bg-gold-500/10 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              {t.services.sectionTag}
            </span>
          </span>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-6">
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)]">
              {sectionCopy.title}
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm">
            {sectionCopy.subtitle}
          </p>

          <div className="mx-auto mt-10 w-full flex justify-center items-center gap-4">
            <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-gold-500/50" />
            <svg viewBox="0 0 120 24" className="h-7 w-36 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor">
              <path strokeWidth="1.5" strokeLinecap="round" d="M4 12h32m48 0h32M43 12c4-6 10-8 17-8s13 2 17 8c-4 6-10 8-17 8s-13-2-17-8Z" />
              <circle cx="60" cy="12" r="3" strokeWidth="1.5" fill="currentColor" />
            </svg>
            <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="glow-button inline-flex items-center gap-3 text-lg sm:text-xl font-bold !py-5 !px-10 shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all">
            <span className="relative z-10">{sectionCopy.cta}</span>
            <svg className="relative z-10 h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
