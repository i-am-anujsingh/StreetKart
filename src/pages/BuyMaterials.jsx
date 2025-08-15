import React, { useState, useEffect } from 'react';
import MaterialCard from '../components/cards/Materialcard.jsx';
import { useTranslation } from 'react-i18next';
import { placeOrder } from '../services/itemService'; 
import  {getAllMaterials} from '../services/materialService';
import { useSelector } from 'react-redux';



export default function BuyMaterials() {
  const [items, setItems] = useState([]);
  const { t } = useTranslation();
  const authData =  useSelector((state) => state.auth.userData);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await getAllMaterials();
        setItems(data.items);
      } catch (err) {
        alert("Failed to fetch items");
      }
    };

    loadItems();
  }, []);

  const handleBuy = async (item) => {
    const quantity = parseInt(prompt(`Enter quantity in kg for ${item.name}:`));
    if (!quantity || quantity <= 0) return;

    const orderData = {
      vendorId: authData._id, 
      itemId: item._id,
      itemName: item.name,
      quantity,
      totalPrice: item.pricePerKg * quantity
    };

    try {
      await placeOrder(orderData);
      alert(`Successfully ordered ${quantity} kg of ${item.name}`);
    } catch (err) {
      alert("Order failed. Please try again.");
    }
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