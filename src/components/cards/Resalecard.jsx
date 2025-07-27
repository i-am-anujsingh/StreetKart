import React from "react";

const ResaleCard = ({ item }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white p-4 m-2 border border-gray-200 hover:shadow-lg transition duration-200">
      <img
        className="w-full h-48 object-cover rounded-xl"
        src={item.image || "https://via.placeholder.com/150"}
        alt={item.itemName}
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{item.itemName}</h3>
        <p className="text-gray-600 mt-1">
          <strong>Quantity:</strong> {item.quantity} kg
        </p>
        <p className="text-gray-600 mt-1">
          <strong>Price:</strong> ₹{item.price}
        </p>
        {item.location && (
          <p className="text-gray-500 text-sm mt-1">
            <strong>Location:</strong> {item.location}
          </p>
        )}
        <button
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl w-full"
          onClick={() => alert("Feature Coming Soon!")}
        >
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default ResaleCard;