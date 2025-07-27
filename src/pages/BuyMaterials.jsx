import React, { useState, useEffect } from 'react';
import MaterialCard from '../components/cards/Materialcard.jsx';
import { useTranslation } from 'react-i18next';

const mockItems = [
  {
    _id: '1',
    name: 'Tomato',
    description: 'Fresh red tomatoes',
    pricePerKg: 25,
    image: 'https://source.unsplash.com/400x300/?tomato'
  },
  {
    _id: '2',
    name: 'Onions',
    description: 'Organic onions',
    pricePerKg: 20,
    image: ''
  }
];

export default function BuyMaterials() {
  const [items, setItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    // Replace with real API call
    setItems(
      mockItems.map(item => ({
        ...item,
        image: item.image || 'https://source.unsplash.com/400x300/?vegetables'
      }))
    );
  }, []);

  const handleBuy = (item) => {
    alert(`${t('You chose to buy')}: ${t(item.name)}`);
    // TODO: Trigger real API call here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 px-6 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        {t('Buy Materials')}
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map(item => (
          <MaterialCard key={item._id} item={item} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
}