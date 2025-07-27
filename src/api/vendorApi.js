import axios from 'axios';

const API_BASE = "http://localhost:5000/api/resale-items"; // Backend route

// GET all resale listings
export const getResaleItems = async () => {
  try {
    const res = await axios.get(API_BASE);
    return res.data;
  } catch (err) {
    console.error("Error fetching resale items", err);
    throw err;
  }
};

// BUY resale item (optional)
export const buyResaleItem = async (itemId, buyerId) => {
  try {
    const res = await axios.post(`${API_BASE}/buy`, {
      itemId,
      buyerId, // this would come from auth or context
    });
    return res.data;
  } catch (err) {
    console.error("Error buying item", err);
    throw err;
  }
};