
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { PRODUCTS, TRANSLATIONS } from '../constants';
import type { Language } from '../types';

interface ShopProps {
  lang: Language;
}

const Shop: React.FC<ShopProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="py-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 pt-10">
        <div className="text-center mb-12">
          <span className="text-sea-600 font-bold tracking-wider uppercase mb-2 block">{t.shop}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-sea-900 mb-4">{t.shopTitle}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.shopDesc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name[lang]} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="bg-white text-sea-900 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-sun-400 hover:text-white transition-colors text-sm">
                     {t.viewDetail}
                   </button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-sun-400 fill-current" />)}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2 truncate" title={product.name[lang]}>
                  {product.name[lang]}
                </h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">{t.price}</p>
                    <p className="text-sea-600 font-bold text-lg">{t.priceReference}</p>
                  </div>
                  <button className="p-3 bg-sea-50 rounded-full text-sea-600 hover:bg-sea-600 hover:text-white transition-colors shadow-sm">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
