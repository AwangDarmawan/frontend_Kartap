import axios from "axios";
import { toast } from "react-toastify";

/* ============ */
/* === AUTH KARYAWAN=== */
/* ============ */
const baseUrl = import.meta.env.VITE_BASE_URL;
export const AuthKaryawan = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { username, password });
    console.log('Login response:', response.data);
    if (response.data.status === "OK" && response.data.data.user.role === 'karyawan') {
      toast.success(response.data.message);
      const token = response.data.data.token; // Ambil token dari response
      localStorage.setItem('KaryawanToken', token);
      return response.data; 
    } else {
      toast.error('Unauthorized: Access denied');
    }
  } catch (error) {
    console.error('Login error:', error);
    toast.error(error.response?.data?.message || 'An error occurred');
    throw error;
  }
};







  