import axios from 'axios';

const API_BASE = import.meta.env.VITE_BACKEND_URL;

// export const fetchVendors = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/vendors/all`);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error("Error fetching vendors:", err);
//   }
// };



export const loginVendor = async (vendorData) => {
  try {
    const res = await axios.post(`${API_BASE}/auth/login`, vendorData);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};


export const registerVendor = async (vendorData) => {
  try {
    const res = await axios.post(`${API_BASE}/auth/register`, vendorData)
    return res.data
  } catch (err) {
    throw err
  }
}

export const getVendorDashboardData = async (vendorId) => {
  const [vendorRes, orderRes, resaleRes] = await Promise.all([
    axios.get(`/auth/profile/${vendorId}`),
    axios.get(`/orders/orders/${vendorId}`),
    axios.get(`/resale/listings/`),
  ]);
 // alert(vendorRes.data.message)
  return {
    vendorData: vendorRes.data.vendor,
    ordersData: orderRes.data,
    resaleItemsData: resaleRes.data,
  };
};