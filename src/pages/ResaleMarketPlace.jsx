import React from "react";
import ResaleCard from "../components/cards/Resalecard.jsx"

const sampleItems = [
  {
    itemName: "Tomatoes",
    quantity: 15,
    price: 300,
    location: "Lucknow",
    image: "https://source.unsplash.com/400x300/?tomatoes"
  },
  {
    itemName: "Onions",
    quantity: 10,
    price: 200,
    location: "Kanpur",
    image: ""
  }
];

const ResaleMarketplace = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Resale Marketplace</h2>
      <div className="flex flex-wrap">
        {sampleItems.map((item, index) => (
          <ResaleCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ResaleMarketplace;