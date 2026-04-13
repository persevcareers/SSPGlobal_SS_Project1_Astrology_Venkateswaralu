import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);

  const highlights = [
    { text: t.about.highlight1, icon: '🕉️' },
    { text: t.about.highlight2, icon: '🤝' },
    { text: t.about.highlight3, icon: '🔬' },
    { text: t.about.highlight4, icon: '📿' },
  ];

  const stats = [
    { title: t.about.stat1Title, label: t.about.stat1Label, color: 'from-gold-400 to-saffron-500' },
    { title: t.about.stat2Title, label: t.about.stat2Label, color: 'from-sacred-green to-green-400' },
    { title: t.about.stat3Title, label: t.about.stat3Label, color: 'from-sacred-blue to-blue-400' },
  ];

  return (
    <section id="about" className="relative py-24 bg-cosmic overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 text-gold-400 bg-gold-500/5 mb-4">
            {t.about.sectionTag}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-200 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Background decorative */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 to-saffron-500/5 rounded-3xl blur-xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/20">
                <img
                  src="/images/venkateswarlu-traditional.jpg"
                  alt="Astrologer Venkateswarlu - Traditional"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-dark/60 via-transparent to-transparent" />
              </div>

              {/* Stats overlaid on image */}
              <div className="absolute -bottom-6 left-4 right-4 flex gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 glass-card rounded-xl p-4 text-center"
                  >
                    <div className={`font-heading text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t.about.description}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              {t.about.description2}
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Second image (formal) */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500/30 flex-shrink-0">
                <img
                  src="/images/venkateswarlu-formal.jpg"
                  alt="Venkateswarlu - Formal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="font-heading text-lg font-semibold text-gold-400">Venkateswarlu</div>
                <div className="text-sm text-gray-400">Hereditary Astrologer & Jyotisha Acharya</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
