import React, { useEffect, useState } from "react";
import ResaleCard from "../components/cards/Resalecard.jsx";
import {getAllResaleItems} from "../services/resaleService.js"; // Import the service

const ResaleMarketplace = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await getAllResaleItems();
        setList(data.listings);
      } catch (err) {
        console.error("Failed to load resale items:", err);
      }
    };
    getItems();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center">
          Resale Marketplace
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              list?(
                list?.map((l, index) => (
                  <ResaleCard
                    key={index}
                    item={l}
                  />
                ))
              ):<p className="text-4xl text-green-600 text-center w-full">
              loading...
              </p>
            }
        </div>
      </div>
    </div>
  );
};

export default ResaleMarketplace;