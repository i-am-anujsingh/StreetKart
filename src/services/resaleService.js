import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;
// Replace with your actual backend URL

export const getAllResaleItems = async () => {
  try {
    const res = await axios.get(`${API_URL}/resale/listings`);
    return res
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createResaleItem = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/resale/createresale`, data)
  return response.data;
  } catch (error) {
    alert(`Service: ${error}`);
  }
};

// export const updateResaleItem = async (id, data) => {
//   const response = await axios.put(`${BASE_URL}/update/${id}`, data);
//   return response.data;
// };

// export const getFilePreview = (filename) => {
//   return `${BASE_URL}/images/${filename}`;
// };


export const getResaleMaterials = async () => {
  const response = await axios.get(`${BASE_URL}/resale`);
  return response.data;
};