import axios from 'axios';

const API_BASE = "http://localhost:5000/api/vendors";

export const loginVendor = async (vendorData) => {
  try {
    const res = await axios.post(`${API_BASE}/login`, vendorData);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};


export const registerVendor = async (vendorData) => {
  try {
    const res = await axios.post(`${API_BASE}/register`, vendorData)
    return res.data
  } catch (err) {
    throw err
  }
}



export const getVendorDashboardData = async (vendorId) => {
  const [vendorRes, orderRes, resaleRes] = await Promise.all([
    axios.get(`/api/vendor/${vendorId}`),
    axios.get(`/api/orders/vendor/${vendorId}`),
    axios.get(`/api/resale/vendor/${vendorId}`),
  ]);
  return {
    vendor: vendorRes.data,
    orders: orderRes.data,
    resaleItems: resaleRes.data,
  };
};