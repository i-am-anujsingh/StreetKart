import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button.jsx';
import { useSelector } from 'react-redux';
import { getVendorDashboardData } from '../services/vendorService.js';

const VendorDashboard = () => {
  const [vendor, setVendor] = useState(null);
  const [orders, setOrders] = useState([]);
  const [resaleItems, setResaleItems] = useState([]);

  const userData = useSelector((state) => state.auth.userData);
  const vendorId = userData?.id;
  // ✅ Real vendor ID from backend

  useEffect(() => {
    if (vendorId) fetchVendorData();
  }, [vendorId]);

  const fetchVendorData = async () => {
    try {
      const {vendorData,ordersData,resaleItemsData}= await getVendorDashboardData(vendorId);

      setVendor(vendorData);
    //  setOrders(ordersData);
      //setResaleItems(resaleItemsData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-gray-800">📊 Vendor Dashboard</h2>

      {/* Vendor Info */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">👤 Vendor Info</h3>
        {vendorId ? (
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><span className="font-semibold">Name:</span> {userData.name}</p>
            <p><span className="font-semibold">Phone:</span> {userData.phone}</p>
            <p><span className="font-semibold">Language:</span> {userData.language === 'hi' ? 'Hindi' : 'English'}</p>
            <p><span className="font-semibold">Location:</span> {userData.location || 'Not specified'}</p>
          </div>
        ) : (
          <p className="text-gray-500">Loading vendor info...</p>
        )}
      </section>

      {/* Orders */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">🛒 My Orders</h3>
        {orders && orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {orders.map((order, index) => (
              <li key={index} className="border rounded-xl p-4 bg-gray-50">
                <p><strong>Item:</strong> {order.itemName}</p>
                <p><strong>Quantity:</strong> {order.quantity} kg</p>
                <p><strong>Total:</strong> ₹{order.totalPrice}</p>
                {/*<p><strong>Status:</strong> {order.status}</p>*/}
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
                    onClick={() => alert('Update functionality to be implemented')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => alert(`Delete functionality for: ${item.itemName}`)}
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