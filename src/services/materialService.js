// src/services/materialService.js
import axios from "axios";

const API_BASE = "http://localhost:5000/api/materials";

export const getAllMaterials = async () => {
  try {
    const res = await axios.get(`${API_BASE}/all`);
    return res.data;
  } catch (err) {
    console.error("Error fetching materials:", err);
    throw err;
  }
};