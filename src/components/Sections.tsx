
import React, { useState } from 'react';
import { MOUNTAINS, ATTRACTIONS, TRANSLATIONS } from '../constants';
import type { Language, PassportData, Attraction } from '../types';
import { ArrowRight, Clock, MapPin, Phone, Mail, Calendar, ChevronRight, X, Star, Mountain as MountainIcon } from 'lucide-react';
import DigitalPassport from './DigitalPassport';

interface SectionProps {
  lang: Language;
  onNavigate?: (view: 'home' | 'intro' | 'explore' | 'shop' | 'redeem') => void;
  onCheckIn?: (id: string) => void;
}

interface PassportSectionProps extends SectionProps {
  passport: PassportData | null;
  onRegister: (name: string) => void;
  onCheckIn: (id: string) => void;
  onNavigateRedeem: () => void;
}

const TechDreamsLogo: React.FC = () => (
  <div className="flex flex-col items-start leading-none select-none transform hover:scale-105 transition-transform duration-300">
     <div className="bg-white/90 border-2 border-dashed border-gray-300 shadow-sm px-2 py-1 rounded-lg transform -rotate-2">
      <div className="flex flex-col items-center">
        <div className="flex text-[14px] font-black tracking-widest font-sans mb-0.5 drop-shadow-sm">
          <span className="text-[#0EA5E9]">T</span>
          <span className="text-[#F59E0B]">E</span>
          <span className="text-[#10B981]">C</span>
          <span className="text-[#EF4444]">H</span>
        </div>
        <div className="flex text-[16px] font-black tracking-widest font-sans drop-shadow-sm">
          <span className="text-[#8B5CF6]">D</span>
          <span className="text-[#F472B6]">R</span>
          <span className="text-[#3B82F6]">E</span>
          <span className="text-[#10B981]">A</span>
          <span className="text-[#F59E0B]">M</span>
          <span className="text-[#06B6D4]">S</span>
        </div>
      </div>
     </div>
  </div>
);

export const Hero: React.FC<SectionProps> = ({ lang, onNavigate }) => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://danangfantasticity.com/wp-content/uploads/2025/08/danh-thang-ngu-hanh-son-da-nang-002.jpg" 
        alt="Ngũ Hành Sơn" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-sea-900/90"></div>
    </div>

    <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
      <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-6 animate-fade-in-up">
        <span className="text-sun-400 font-medium tracking-wider text-sm uppercase">{TRANSLATIONS[lang].heritage}</span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg max-w-5xl mx-auto">
        {TRANSLATIONS[lang].heroTitle}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 font-light">
        {TRANSLATIONS[lang].heroDesc}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => onNavigate?.('explore')}
          className="bg-sun-500 hover:bg-sun-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-sun-500/30 flex items-center justify-center gap-2"
        >
          {TRANSLATIONS[lang].exploreNow} <ArrowRight size={20} />
        </button>
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=Ngũ+Hành+Sơn+Đà+Nẵng"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <MapPin size={20} /> {TRANSLATIONS[lang].getDirections}
        </a>
      </div>
    </div>
  </section>
);

export const IntroView: React.FC<SectionProps> = ({ lang }) => (
  <section className="bg-stone-50 min-h-screen pb-20">
    {/* Header Section with Background Image */}
    <div className="relative h-[60vh] min-h-[400px] mb-16 flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://danangfantasticity.com/wp-content/uploads/2025/08/danh-thang-ngu-hanh-son-da-nang-chua-quan-the-am.jpg"
          alt="Chùa Quan Thế Âm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center mt-10">
         <span className="inline-block bg-white/10 backdrop-blur-md text-sun-400 border border-sun-400/50 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-4 shadow-lg animate-fade-in-up">
            {TRANSLATIONS[lang].intro}
         </span>
         <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up delay-100">
           {TRANSLATIONS[lang].legendTitle}
         </h2>
         <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
           {TRANSLATIONS[lang].legendDesc}
         </p>
      </div>
    </div>

    <div className="container mx-auto px-4">
      {/* 5 Mountains Grid */}
      <div className="mb-12">
         <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-4">
           <span className="h-0.5 w-12 bg-sea-200 rounded-full"></span>
           {TRANSLATIONS[lang].mountainsTitle}
           <span className="h-0.5 w-12 bg-sea-200 rounded-full"></span>
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {MOUNTAINS.map((mountain) => (
             <div key={mountain.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 ${mountain.color.replace('text', 'bg')}`}></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 ${mountain.color} group-hover:scale-110 transition-transform shadow-inner`}>
                    <MountainIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-sea-600 transition-colors">{mountain.name[lang]}</h4>
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{mountain.element[lang]}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {mountain.description[lang]}
                </p>
             </div>
           ))}
         </div>
      </div>
    </div>
  </section>
);

export const PassportSection: React.FC<PassportSectionProps> = ({ 
  lang, 
  passport, 
  onRegister, 
  onCheckIn, 
  onNavigateRedeem 
}) => (
  <section className="py-20 bg-sea-50 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="text-sea-600 font-bold tracking-wider uppercase mb-2 block">Digital Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{TRANSLATIONS[lang].passportTitle}</h2>
          <p className="text-gray-600 mb-8 text-lg">
            {TRANSLATIONS[lang].passportDesc}
          </p>
          <DigitalPassport 
            lang={lang}
            passport={passport}
            onRegister={onRegister}
            onCheckIn={onCheckIn}
            onRedeemClick={onNavigateRedeem}
          />
        </div>
        <div className="lg:w-1/2">
           <img 
             src="https://www.vietnamairlines.com/in/vi/useful-information/travel-guide/~/media/SEO-images/2025%20SEO/Traffic%20TV/ngu-hanh-son-da-nang/gia-ve-tham-quan-ngu-hanh-son-da-nang.jpg?la=vi-VN" 
             alt="Experience" 
             className="rounded-2xl shadow-2xl"
            />
        </div>
      </div>
    </div>
  </section>
);

export const Info: React.FC<SectionProps> = ({ lang }) => (
  <section className="py-20 bg-sea-900 text-white relative">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <Clock className="w-10 h-10 text-sun-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">{TRANSLATIONS[lang].openTime}</h3>
          <p className="text-gray-300">7:00 - 17:30</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <MapPin className="w-10 h-10 text-sun-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">{TRANSLATIONS[lang].ticketPrice}</h3>
          <p className="text-gray-300">40.000đ - 20.000đ</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <Calendar className="w-10 h-10 text-sun-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">{TRANSLATIONS[lang].bestTime}</h3>
          <p className="text-gray-300">03 - 09 (March - Sept)</p>
        </div>
      </div>
    </div>
  </section>
);

export const ExploreView: React.FC<SectionProps> = ({ lang, onCheckIn }) => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  const handleViewDetail = (attr: Attraction) => {
    setSelectedAttraction(attr);
    if (onCheckIn) {
      onCheckIn(attr.id);
    }
  };

  return (
    <section className="py-24 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sea-900 mb-6">{TRANSLATIONS[lang].exploreTitle}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{TRANSLATIONS[lang].exploreDesc}</p>
        </div>

        <div className="space-y-24">
          {ATTRACTIONS.map((attr, idx) => (
            <div key={attr.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}>
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img 
                    src={attr.image} 
                    alt={attr.name[lang]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                {/* Decorative Offset Box */}
                <div className={`absolute -z-10 top-8 ${idx % 2 === 0 ? '-left-8' : '-right-8'} w-full h-full border-2 border-sea-200 rounded-3xl hidden lg:block`}></div>
              </div>

              <div className="lg:w-1/2">
                <div className="flex gap-2 mb-4">
                  {attr.features.map((f, i) => (
                     <span key={i} className="bg-sea-100 text-sea-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                       {f}
                     </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{attr.name[lang]}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 border-l-4 border-sun-400 pl-4">
                  {attr.description[lang]}
                </p>
                <button 
                  onClick={() => handleViewDetail(attr)}
                  className="flex items-center gap-2 text-sea-600 font-bold hover:text-sea-800 transition-colors group/btn"
                >
                  {TRANSLATIONS[lang].viewDetail} <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedAttraction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedAttraction(null)}
          ></div>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative z-10 animate-fade-in-up flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img 
                src={selectedAttraction.image} 
                alt={selectedAttraction.name[lang]} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                <h3 className="text-2xl font-bold text-white">{selectedAttraction.name[lang]}</h3>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 overflow-y-auto">
              <div className="hidden md:block mb-4">
                <h3 className="text-3xl font-bold text-sea-900">{selectedAttraction.name[lang]}</h3>
                <div className="h-1 w-20 bg-sun-400 mt-2 rounded-full"></div>
              </div>
              
              <div className="flex gap-2 mb-6">
                 {selectedAttraction.features.map((f, i) => (
                     <span key={i} className="bg-sea-50 text-sea-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
                       {f}
                     </span>
                  ))}
              </div>

              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">{selectedAttraction.details[lang]}</p>
                <p className="italic text-sm text-gray-400 border-t pt-4 mt-6">
                  * {TRANSLATIONS[lang].exploreDesc}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setSelectedAttraction(null)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {TRANSLATIONS[lang].close || 'Đóng'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const ContactFooter: React.FC<SectionProps> = ({ lang, onNavigate }) => (
  <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-white font-bold text-xl mb-6">Ngũ Hành Sơn</h3>
          <p className="text-sm leading-relaxed mb-4">
            {TRANSLATIONS[lang].footerAddress}
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">{TRANSLATIONS[lang].contact}</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-sea-500" />
              <span>+84 06444921</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-sea-500" />
              <span>techdreamersnhs@gmail.com</span>
            </li>
          </ul>
          {/* Techdreamers Section */}
          <div className="mt-6 pt-4 border-t border-stone-800">
             <div className="flex items-center gap-3">
               <p className="text-stone-400 text-sm font-medium">Power by:</p>
             </div>
             <div className="flex items-center gap-3 mt-2 group cursor-default">
               <TechDreamsLogo />
               <p className="text-white font-bold tracking-wide group-hover:text-sun-400 transition-colors">Techdreamers</p>
             </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Link</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => onNavigate?.('home')} className="hover:text-sea-500">{TRANSLATIONS[lang].home}</button></li>
            <li><button onClick={() => onNavigate?.('explore')} className="hover:text-sea-500">{TRANSLATIONS[lang].destinations}</button></li>
            <li><button onClick={() => onNavigate?.('shop')} className="hover:text-sea-500">{TRANSLATIONS[lang].shop}</button></li>
          </ul>
        </div>
        <div>
           <h4 className="text-white font-bold mb-6">Map</h4>
           <div className="w-full h-40 bg-stone-800 rounded-lg flex items-center justify-center border border-stone-700 hover:border-sea-500 transition-colors cursor-pointer overflow-hidden group">
             <div className="text-center">
                <MapPin size={32} className="text-sea-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-stone-500">Xem bản đồ</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  </footer>
);
