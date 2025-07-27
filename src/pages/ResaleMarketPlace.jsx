import React from "react";
import ResaleCard from "../components/cards/Resalecard.jsx";

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
    image: "" // image missing case
  }
];

const ResaleMarketplace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center">
          Resale Marketplace
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleItems.map((item, index) => (
            <ResaleCard
              key={index}
              item={{
                ...item,
                image: item.image || "https://source.unsplash.com/400x300/?vegetables"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResaleMarketplace;