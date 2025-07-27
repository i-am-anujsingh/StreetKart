import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MaterialCard({ item, onBuy }){
  const {t} = useTranslation();
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md p-4 m-2 hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={t(item.name)}
        className="w-full h-40 object-cover rounded-xl"
      />

      <div className="mt-3">
        <h3 className="text-xl font-bold text-gray-800">{t(item.name)}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>

        <div className="flex justify-between items-center mt-3">
          <div>
            <span className="text-green-600 font-semibold">₹{item.pricePerKg}</span>
            <span className="text-sm text-gray-500"> /kg</span>
          </div>
          <button
            onClick={() => onBuy(item)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            {t('Buy')}
          </button>
        </div>
      </div>
    </div>
  );
};

