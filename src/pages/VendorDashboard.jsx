import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button.jsx'

const VendorDashboard = () => {
  const [vendor, setVendor] = useState({
    name: 'vendor',
    phone:1234567789,
    language:'en',
    location:'Lucknow'
  });
  const [orders, setOrders] = useState([
    {
      itemName:'cabbage',
      quantity:'2kg',
      totalPrice:150,
      status:'available',
      dateOfposted:'12-7-2025'
    },
    {}
    ]);
  const [resaleItems, setResaleItems] = useState([
    {
      itemName:'cabbage',
      quantity:'2kg',
      price:150,
      status:'available',
      dateOfPurchase:'12-7-2025'
    },
    {},
    ]);

  // Simulating logged-in vendor ID (replace with actual auth in real app)
  const vendorId = '64fbe63a45d6a2c2e32b7f21'; // dummy ID

  // useEffect(() => {
//     fetchVendorData();
//   }, []);

  // const fetchVendorData = async () => {
//     try {
//       const [vendorRes, orderRes, resaleRes] = await Promise.all([
//         axios.get(`/api/vendor/${vendorId}`),
//         axios.get(`/api/orders/vendor/${vendorId}`),
//         axios.get(`/api/resale/vendor/${vendorId}`),
//       ]);
// 
//       setVendor(vendorRes.data);
//       setOrders(orderRes.data);
//       setResaleItems(resaleRes.data);
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//     }
//   };

  if (!vendor) return <div>Loading dashboard...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Vendor Dashboard</h2>

      {/* Vendor Info */}
      <div className="bg-gray-100 p-4 rounded mb-6 shadow">
        <h3 className="text-xl font-semibold mb-2">👤 Vendor Info</h3>
        <p><strong>Name:</strong> {vendor.name}</p>
        <p><strong>Phone:</strong> {vendor.phone}</p>
        <p><strong>Language:</strong> {vendor.language === 'hi' ? 'Hindi' : 'English'}</p>
        <p><strong>Location:</strong> {vendor.location || 'Not specified'}</p>
      </div>

      {/* Orders Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🛒 My Orders</h3>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          <ul className="space-y-2">
            {orders.map(order => (
              <li key={order._id} className="p-3 bg-white shadow rounded">
                <p><strong>Item:</strong> {order.itemName}</p>
                <p><strong>Quantity:</strong> {order.quantity} kg</p>
                <p><strong>Total:</strong> ₹{order.totalPrice}</p>
                <p><strong>Date:</strong> {new Date(order.dateOfPurchase).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Resale Items Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">🔁 My Resale Listings</h3>
        {resaleItems.length === 0 ? (
          <p className="text-gray-500">No resale items posted.</p>
        ) : (
          <ul className="space-y-2">
            {resaleItems.map(item => (
              <li key={item._id} className="p-3 bg-white shadow rounded">
                <p><strong>Item:</strong> {item.itemName}</p>
                <p><strong>Qty:</strong> {item.quantity} kg</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Status:</strong> {item.status}</p>
                <p><strong>Posted on:</strong> {new Date(item.datePosted).toLocaleDateString()}</p>
                <div clasName=''>
                  <Button
                  onClick={()=>{
                    alert('Updateed the item!');
                  }}
                  className='mx-1 bg-blue-500'
                  >Update</Button>
                  <Button
                  onClick={()=>{
                    alert(`Deleted the item! ${item.itemName}`)
                  }}
                  className='mx-1 bg-red-400'
                  >Delete</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;