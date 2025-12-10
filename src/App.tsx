
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Globe } from 'lucide-react';
import { Hero, PassportSection, Info, ContactFooter, ExploreView, IntroView } from './components/Sections';
import Shop from './components/Shop';
import RedeemView from './components/RedeemView';
import AIChat from './components/AIChat';
import { TRANSLATIONS } from './constants';
import type { Language, PassportData } from './types';

interface NavLinkProps {
  children: React.ReactNode;
  isScrolled: boolean;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, isScrolled, isActive, onClick }) => (
  <button 
    className={`font-medium transition-colors relative ${
      isScrolled ? 'text-gray-700 hover:text-sea-600' : 'text-white/90 hover:text-white'
    } ${isActive ? 'font-bold' : ''}`}
    onClick={onClick}
  >
    {children}
    {isActive && (
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-sun-400 rounded-full"></span>
    )}
  </button>
);

// Custom Logo Component based on the provided image (Globe + Plane)
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Globe Circles */}
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="5" />
    <path d="M50 8 C 28 8, 28 92, 50 92" stroke="currentColor" strokeWidth="3" />
    <path d="M50 8 C 72 8, 72 92, 50 92" stroke="currentColor" strokeWidth="3" />
    <path d="M8 50 H 92" stroke="currentColor" strokeWidth="3" />
    <path d="M18 28 H 82" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M18 72 H 82" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    
    {/* Plane */}
    <g transform="translate(45, 45) rotate(-15) scale(1.2)">
      <path 
        d="M20 0 L 10 10 L -5 10 L -8 15 L -12 15 L -8 10 L -15 10 L -18 7 L -15 0 L -5 0 L -8 -5 L -12 -5 L -8 0 L 10 0 Z" 
        fill="currentColor" 
      />
    </g>
  </svg>
);

type ViewState = 'home' | 'intro' | 'explore' | 'shop' | 'redeem';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<ViewState>('home');
  const [lang, setLang] = useState<Language>('vi');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // Passport State
  const [passport, setPassport] = useState<PassportData | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleBack = () => {
    if (view === 'redeem') {
      setView('home'); // Go back to passport view logic usually implies home
    } else if (view !== 'home') {
      setView('home');
    } else {
      window.history.back();
    }
  };

  // Passport Logic Handlers
  const handleRegister = (name: string) => {
    setPassport({
      name,
      points: 0,
      visitedIds: [],
      level: 'Explorer',
      redeemedItems: []
    });
  };

  const handleCheckIn = (attractionId: string) => {
    if (!passport) return;
    if (passport.visitedIds.includes(attractionId)) return;

    const newPoints = passport.points + 50;
    let newLevel: PassportData['level'] = 'Explorer';
    if (newPoints >= 100) newLevel = 'Adventurer';
    if (newPoints >= 200) newLevel = 'Master';

    setPassport({
      ...passport,
      visitedIds: [...passport.visitedIds, attractionId],
      points: newPoints,
      level: newLevel
    });
  };

  const handleRedeemItem = (itemId: string, cost: number) => {
    if (!passport) return;
    if (passport.points < cost) return;
    if (passport.redeemedItems.includes(itemId)) return;

    setPassport({
      ...passport,
      points: passport.points - cost,
      redeemedItems: [...passport.redeemedItems, itemId]
    });
  };

  const t = TRANSLATIONS[lang];

  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero lang={lang} onNavigate={setView} />
            <PassportSection 
              lang={lang} 
              passport={passport} 
              onRegister={handleRegister} 
              onCheckIn={handleCheckIn}
              onNavigateRedeem={() => setView('redeem')}
            />
            <Info lang={lang} />
          </>
        );
      case 'intro':
        return <IntroView lang={lang} />;
      case 'explore':
        return <ExploreView lang={lang} onCheckIn={handleCheckIn} />;
      case 'shop':
        return <Shop lang={lang} />;
      case 'redeem':
        return passport ? (
          <RedeemView 
            lang={lang} 
            passport={passport} 
            onRedeem={handleRedeemItem} 
            onBack={() => setView('home')} 
          />
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500">Vui lòng tạo hộ chiếu trước.</p>
          </div>
        );
      default:
        return <Hero lang={lang} onNavigate={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || view !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Left: Back Button & Logo */}
          <div className="flex items-center gap-4">
            {/* Back Button Logic */}
            <button 
              onClick={handleBack}
              className={`p-2 rounded-full transition-all duration-300 group ${
                isScrolled || view !== 'home'
                  ? 'text-sea-900 hover:bg-sea-50' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label={t.back}
              title={t.back}
            >
              <ArrowLeft size={24} className="transform group-hover:-translate-x-1 transition-transform" />
            </button>

            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setView('home')}
            >
              {/* Logo SVG replacing the old 'N' box */}
              <Logo className={`w-12 h-12 transition-colors duration-300 ${
                 isScrolled || view !== 'home' ? 'text-sea-600' : 'text-white'
              }`} />
              
              <div className="flex flex-col">
                <span className={`font-bold text-lg md:text-xl leading-none tracking-tight transition-colors ${
                  isScrolled || view !== 'home' ? 'text-sea-900' : 'text-white'
                }`}>
                  Ngũ Hành Sơn
                </span>
                <span className={`text-xs uppercase tracking-widest font-light transition-colors ${
                   isScrolled || view !== 'home' ? 'text-sea-600' : 'text-white/80'
                }`}>
                  Travel Discovery
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink isScrolled={isScrolled || view !== 'home'} isActive={view === 'home'} onClick={() => setView('home')}>{t.home}</NavLink>
            <NavLink isScrolled={isScrolled || view !== 'home'} isActive={view === 'intro'} onClick={() => setView('intro')}>{t.intro}</NavLink>
            <NavLink isScrolled={isScrolled || view !== 'home'} isActive={view === 'explore'} onClick={() => setView('explore')}>{t.destinations}</NavLink>
            <NavLink isScrolled={isScrolled || view !== 'home'} isActive={view === 'shop'} onClick={() => setView('shop')}>{t.shop}</NavLink>
          </nav>

          {/* Right: Language & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
                   isScrolled || view !== 'home' ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Globe size={18} />
                <span className="uppercase font-bold text-xs">{lang}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-down">
                  {(['vi', 'en', 'cn', 'kr'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-sea-50 flex items-center justify-between ${
                        lang === l ? 'text-sea-600 font-bold bg-sea-50' : 'text-gray-700'
                      }`}
                    >
                      {l === 'vi' && 'Tiếng Việt'}
                      {l === 'en' && 'English'}
                      {l === 'cn' && '中文'}
                      {l === 'kr' && '한국어'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className={isScrolled || view !== 'home' ? 'text-gray-900' : 'text-white'} />
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
            <button className="text-left font-medium p-2 hover:bg-gray-50 rounded" onClick={() => { setView('home'); setMobileMenuOpen(false); }}>{t.home}</button>
            <button className="text-left font-medium p-2 hover:bg-gray-50 rounded" onClick={() => { setView('intro'); setMobileMenuOpen(false); }}>{t.intro}</button>
            <button className="text-left font-medium p-2 hover:bg-gray-50 rounded" onClick={() => { setView('explore'); setMobileMenuOpen(false); }}>{t.destinations}</button>
            <button className="text-left font-medium p-2 hover:bg-gray-50 rounded" onClick={() => { setView('shop'); setMobileMenuOpen(false); }}>{t.shop}</button>
          </div>
        )}
      </header>

      <main>
        {renderView()}
      </main>

      <ContactFooter lang={lang} onNavigate={setView} />
      <AIChat />
    </div>
  );
};

export default App;
