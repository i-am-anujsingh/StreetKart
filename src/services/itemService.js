// services/itemService.js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_BACKEND_URL;


//Currently this service only Place orders
// Place an order
export const placeOrder = async (orderData) => {
  try {
    const res = await axios.post(`${API_BASE}/orders/placeOrders/:${orderData.vendorId}`, orderData);
    return res.data;
  } catch (err) {
    console.error("Error placing order", err);
    throw err;
  }
};