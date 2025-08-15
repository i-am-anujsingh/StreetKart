// src/services/materialService.js
import axios from "axios";

const API_BASE = "http://localhost:5000";

export const getAllMaterials = async () => {
  try {
    const res = await axios.get(`${API_BASE}/market/items`);
    return res.data;
  } catch (err) {
    console.lod("Error in services:",err);
    throw err;
  }
};


export const getMaterial = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/market/items/:id`);
    return res.data;
  } catch (err) {
    console.error("Error fetching materials:", err);
    throw err;
  }
};