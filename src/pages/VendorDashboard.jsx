import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button.jsx';

const VendorDashboard = () => {
  const [vendor, setVendor] = useState({
    name: 'vendor',
    phone: 1234567789,
    language: 'en',
    location: 'Lucknow',
  });

  const [orders, setOrders] = useState([
    {
      itemName: 'cabbage',
      quantity: '2',
      totalPrice: 150,
      status: 'available',
      dateOfPurchase: '2025-07-12',
    },
  ]);

  const [resaleItems, setResaleItems] = useState([
    {
      itemName: 'cabbage',
      quantity: '2',
      price: 150,
      status: 'available',
      datePosted: '2025-07-12',
    },
  ]);

  const vendorId = '64fbe63a45d6a2c2e32b7f21';

  // useEffect(() => {
  //   fetchVendorData();
  // }, []);

  // const fetchVendorData = async () => {
  //   try {
  //     const [vendorRes, orderRes, resaleRes] = await Promise.all([
  //       axios.get(`/api/vendor/${vendorId}`),
  //       axios.get(`/api/orders/vendor/${vendorId}`),
  //       axios.get(`/api/resale/vendor/${vendorId}`),
  //     ]);

  //     setVendor(vendorRes.data);
  //     setOrders(orderRes.data);
  //     setResaleItems(resaleRes.data);
  //   } catch (error) {
  //     console.error('Error fetching dashboard data:', error);
  //   }
  // };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-gray-800">📊 Vendor Dashboard</h2>

      {/* Vendor Info */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">👤 Vendor Info</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p><span className="font-semibold">Name:</span> {vendor.name}</p>
          <p><span className="font-semibold">Phone:</span> {vendor.phone}</p>
          <p><span className="font-semibold">Language:</span> {vendor.language === 'hi' ? 'Hindi' : 'English'}</p>
          <p><span className="font-semibold">Location:</span> {vendor.location || 'Not specified'}</p>
        </div>
      </section>

      {/* Orders Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">🛒 My Orders</h3>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {orders.map((order, index) => (
              <li key={index} className="border rounded-xl p-4 bg-gray-50">
                <p><strong>Item:</strong> {order.itemName}</p>
                <p><strong>Quantity:</strong> {order.quantity} kg</p>
                <p><strong>Total:</strong> ₹{order.totalPrice}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Date:</strong> {new Date(order.dateOfPurchase).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Resale Listings */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">🔁 My Resale Listings</h3>
        {resaleItems.length === 0 ? (
          <p className="text-gray-500">No resale items posted.</p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {resaleItems.map((item, index) => (
              <li key={index} className="border rounded-xl p-4 bg-gray-50">
                <p><strong>Item:</strong> {item.itemName}</p>
                <p><strong>Qty:</strong> {item.quantity} kg</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Status:</strong> {item.status}</p>
                <p><strong>Posted on:</strong> {new Date(item.datePosted).toLocaleDateString()}</p>
                <div className="mt-4 flex gap-2">
                  <Button
                    onClick={() => alert('Updated the item!')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => alert(`Deleted the item: ${item.itemName}`)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default VendorDashboard;