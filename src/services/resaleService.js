import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// Replace with your actual backend URL

export const getAllResaleItems = async () => {
  const res = await fetch(`${API_URL}/resale/listings`);
  return res.json();
};


export const createResaleItem = async (data) => {
  const response = await axios.post(`${BASE_URL}/resale/createresale`, data)
  
  return response.data;
};

// export const updateResaleItem = async (id, data) => {
//   const response = await axios.put(`${BASE_URL}/update/${id}`, data);
//   return response.data;
// };

// export const getFilePreview = (filename) => {
//   return `${BASE_URL}/images/${filename}`;
// };


// export const getResaleMaterials = async () => {
//   const response = await axios.get(`${BASE_URL}/resale`);
//   return response.data;
// };