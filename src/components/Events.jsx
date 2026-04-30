import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Events() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // We are using the generated placeholder images
  const events = [
    {
      id: 1,
      image: '/assets/event_seminar_1776496432283.png',
      alt: 'Astrology Seminar',
      description: 'Sharing Jyotisha wisdom with seekers'
    },
    {
      id: 2,
      image: '/assets/event_pooja_1776496486338.png',
      alt: 'Traditional Pooja',
      description: 'Performing sacred rituals for spiritual harmony'
    },
    {
      id: 3,
      image: '/assets/event_consultation_1776496503119.png',
      alt: 'Personal Consultation',
      description: 'One-on-one astrology chart reading'
    },
    {
      id: 4,
      image: '/assets/event_temple_1776496447824.png',
      alt: 'Temple Visit',
      description: 'Divine gatherings at sacred temples'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  // Optional auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="events" className="relative py-24 overflow-hidden bg-cosmic">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040815] via-[#091022]/70 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 text-gold-400 bg-gold-500/5 mb-4">
            {t.events?.sectionTag || 'Gallery'}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.events?.title || 'Spiritual Journey & Events'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.events?.subtitle || 'Glimpses of our spiritual ceremonies, astrology seminars, and divine gatherings.'}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl group">
          
          {/* Images Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out h-[400px] md:h-[600px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0 relative">
                <img 
                  src={event.image} 
                  alt={event.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-dark via-spiritual-dark/25 to-transparent flex items-end">
                  <div className="p-8 md:p-12 w-full text-center md:text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-gold-400 font-heading text-2xl md:text-3xl font-bold mb-2">
                      {event.alt}
                    </h3>
                    <p className="text-gray-300 md:text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500/20 hover:scale-110 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500/20 hover:scale-110 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-gold-400 w-8' 
                    : 'bg-gray-400/50 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
