import React, { useState, useEffect } from 'react';
import MaterialCard from '../components/cards/Materialcard.jsx';

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
    name: 'Onion',
    description: 'Organic onions',
    pricePerKg: 20,
    image: 'https://source.unsplash.com/400x300/?onion'
  }
];

export default function BuyMaterials(){
  const [items, setItems] = useState([]);

  useEffect(() => {
    // You can replace this with API call later
    setItems(mockItems);
  }, []);

  const handleBuy = (item) => {
    alert(`You chose to buy: ${item.name}`);
    // Trigger API call to place order
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Buy Raw Materials</h2>
      <div className="flex flex-wrap justify-start">
        {items.map((item) => (
          <MaterialCard key={item._id} item={item} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
};

