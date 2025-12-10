
import React from 'react';
import { Gift, Check, ArrowLeft, Coins } from 'lucide-react';
import { REDEEM_ITEMS, TRANSLATIONS } from '../constants';
import type { Language, PassportData } from '../types';

interface RedeemViewProps {
  lang: Language;
  passport: PassportData;
  onRedeem: (itemId: string, cost: number) => void;
  onBack: () => void;
}

const RedeemView: React.FC<RedeemViewProps> = ({ lang, passport, onRedeem, onBack }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="py-24 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="bg-sea-900 rounded-3xl p-8 mb-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
            <Gift size={200} />
          </div>
          
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sea-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={18} /> {t.backToPassport}
          </button>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.redeemTitle}</h2>
              <p className="text-sea-100 text-lg max-w-lg">{t.redeemDesc}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 min-w-[200px]">
              <p className="text-xs text-sea-200 uppercase tracking-widest mb-1">{t.myPoints}</p>
              <div className="flex items-center gap-2">
                <Coins className="text-sun-400 fill-current" size={24} />
                <span className="text-4xl font-bold">{passport.points}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REDEEM_ITEMS.map((item) => {
            const isRedeemed = passport.redeemedItems.includes(item.id);
            const canAfford = passport.points >= item.points;

            return (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name[lang]} 
                    className={`w-full h-full object-cover ${isRedeemed ? 'grayscale opacity-80' : ''}`}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sea-900 shadow-sm flex items-center gap-1">
                    <Coins size={12} className="text-sun-500" />
                    {item.points}
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                     <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                       item.type === 'stamp' ? 'bg-blue-100 text-blue-700' : 
                       item.type === 'voucher' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                     }`}>
                       {item.type}
                     </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.name[lang]}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{item.description[lang]}</p>
                  
                  {isRedeemed ? (
                    <button disabled className="w-full py-3 bg-gray-100 text-gray-500 font-bold rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                      <Check size={18} /> {t.redeemed}
                    </button>
                  ) : (
                    <button 
                      onClick={() => canAfford && onRedeem(item.id, item.points)}
                      disabled={!canAfford}
                      className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                        canAfford 
                          ? 'bg-sea-600 text-white hover:bg-sea-700 shadow-md hover:shadow-lg' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {canAfford ? t.redeem : t.insufficientPoints}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RedeemView;
