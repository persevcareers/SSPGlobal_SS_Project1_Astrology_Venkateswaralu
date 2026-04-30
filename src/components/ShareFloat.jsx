import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ShareFloat() {
  const { t } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const url = window.location.origin;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.share?.title || 'Astrologer Venkateswarlu',
          text: t.share?.text || 'Explore ancient Jyotisha wisdom.',
          url: url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-tr from-gold-500 to-saffron-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/20 text-spiritual-dark hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Share Website"
      >
        <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></span>
        <svg 
          className="w-6 h-6 relative z-10" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 bg-spiritual-dark text-gold-400 border border-gold-500/20 px-3 py-1.5 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block shadow-xl">
          {t.share?.button || 'Share Website'}
        </span>
      </button>

      {/* Toast Notification for Clipboard Copy */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-spiritual-slate text-gold-400 border border-gold-500/30 px-6 py-3 rounded-full shadow-2xl transition-all duration-500 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">{t.share?.copied || 'Link copied to clipboard!'}</span>
        </div>
      </div>
    </>
  );
}
