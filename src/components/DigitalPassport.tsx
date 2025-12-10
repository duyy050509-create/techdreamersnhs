
import React, { useState } from 'react';
import { User, Award, CheckCircle, Map, Gift } from 'lucide-react';
import type { PassportData, Language } from '../types';
import { ATTRACTIONS, TRANSLATIONS } from '../constants';

interface DigitalPassportProps {
  lang?: Language;
  passport: PassportData | null;
  onRegister: (name: string) => void;
  onCheckIn: (attractionId: string) => void;
  onRedeemClick: () => void;
}

const DigitalPassport: React.FC<DigitalPassportProps> = ({ 
  lang = 'vi', 
  passport, 
  onRegister, 
  onCheckIn,
  onRedeemClick 
}) => {
  const [registerName, setRegisterName] = useState('');
  const t = TRANSLATIONS[lang];

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerName.trim()) {
      onRegister(registerName);
    }
  };

  if (!passport) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto border border-sea-100">
        <div className="bg-sea-600 p-6 text-center">
          <Award className="w-12 h-12 text-sun-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-1">{t.passportTitle}</h3>
          <p className="text-sea-100 text-sm">{t.passportDesc}</p>
        </div>
        <div className="p-6">
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
              <input
                type="text"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sea-500 focus:outline-none"
                placeholder="Nhập tên của bạn"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sun-500 text-white font-bold py-3 rounded-lg hover:bg-sun-600 transition-colors shadow-md"
            >
              {t.createPassport}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto border border-sea-100 relative">
      {/* Texture overlay for passport look */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      <div className="bg-sea-900 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Map size={100} />
        </div>
        
        {/* Redeem Button - Top Right */}
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={onRedeemClick}
            className="bg-sun-500 hover:bg-sun-400 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg transition-transform hover:scale-105"
          >
            <Gift size={12} />
            {t.redeemPoints}
          </button>
        </div>

        <div className="flex items-center gap-4 relative z-10 mt-2">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-sun-400">
            <User size={32} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{passport.name}</h3>
            <p className="text-sun-400 font-medium text-sm">{passport.level}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-end relative z-10">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Điểm tích lũy</p>
            <p className="text-3xl font-bold text-white">{passport.points}</p>
          </div>
          <div className="text-right">
             <p className="text-xs text-gray-400">ID: VN-{Math.floor(Math.random() * 10000)}</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-stone-50">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <CheckCircle size={18} className="text-sea-600" />
          Dấu Chân Hành Trình
        </h4>
        <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto">
          {ATTRACTIONS.map((attr) => {
            const isVisited = passport.visitedIds.includes(attr.id);
            return (
              <div 
                key={attr.id} 
                className={`flex items-center p-3 rounded-lg border transition-all ${
                  isVisited 
                    ? 'bg-sea-50 border-sea-200 opacity-100' 
                    : 'bg-white border-dashed border-gray-300 opacity-60'
                }`}
              >
                <img src={attr.image} alt="" className={`w-12 h-12 rounded object-cover mr-3 ${!isVisited && 'grayscale'}`} />
                <div className="flex-1">
                  <p className={`font-medium text-sm ${isVisited ? 'text-sea-900' : 'text-gray-500'}`}>{attr.name[lang]}</p>
                  <p className="text-xs text-gray-400">
                    {isVisited ? 'Đã check-in (+50đ)' : 'Xem chi tiết để nhận điểm'}
                  </p>
                </div>
                {isVisited && <CheckCircle className="text-green-500 w-5 h-5" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DigitalPassport;
