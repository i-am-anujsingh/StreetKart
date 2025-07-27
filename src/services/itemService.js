// services/itemService.js
import axios from 'axios';

const API_BASE = "http://localhost:5000/api"; // adjust if needed

// Get all items
export const fetchItems = async () => {
  try {
    const res = await axios.get(`${API_BASE}/items`);
    return res.data;
  } catch (err) {
    console.error("Error fetching items", err);
    throw err;
  }
};

// Place an order
export const placeOrder = async (orderData) => {
  try {
    const res = await axios.post(`${API_BASE}/orders`, orderData);
    return res.data;
  } catch (err) {
    console.error("Error placing order", err);
    throw err;
  }
};