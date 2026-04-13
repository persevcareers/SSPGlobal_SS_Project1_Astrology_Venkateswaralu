import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg-dark)', transition: 'background-color 0.5s ease' }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Qualifications />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFloat />
          <ThemeSwitcher />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
