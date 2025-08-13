import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAllMaterials } from '../services/materialService'; // ⬅️ import service
import { useSelector } from 'react-redux';

const Home = () => {
  const { t } = useTranslation();
  const [materials, setMaterials] = useState([]);
  const authStatus = useSelector(state=>state.auth.status);
  
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const data = await getAllMaterials();
        alert(data.message)
        setMaterials(data.items);
      } catch (err) {
        console.error("Error fetching materials:", err);
      }
    };

    fetchMaterials();
  }, []);


  return (
    
    <div className="min-h-screen bg-yellow-50 px-6 py-10 flex flex-col items-center">
      
       { !authStatus ? (
         <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full border-2 border-green-200 mb-10">
        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-6 drop-shadow-md">
          {t('welcome')}
        </h1>

        <p className="text-lg text-gray-800 text-center mb-6 leading-relaxed">
          {t('intro')}
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <Link to="/register">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
              {t('Signup')}
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white border-2 border-green-600 text-green-700 font-semibold px-6 py-2 rounded-full">
              {t('Login')}
            </button>
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>{t('lang_note')}</p>
        </div>
      </div>):(<div className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Latest Resale Materials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {materials.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">Price: ₹{item.pricePerKg}</p>
                <p className="text-gray-500 text-sm">Seller: {item.supplierName}</p>
              </div>
            ))}
          </div>
        </div>)}
      
      <div className="mt-12 text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} SmartVendor. All rights reserved.</p>
      </div>
    </div>
    );
};

export default Home;