import axios from "axios";
import { toast } from "react-toastify";
/* === AUTH Manager=== */
/* ============ */
const baseUrl = import.meta.env.VITE_BASE_URL;
export const AuthManager = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { username, password });
    console.log('Login response:', response.data);
    if (response.data.status === "OK" && response.data.user.role === 'manager') {
      toast.success(response.data.message);
      return response.data;
    } else {
      toast.error('Unauthorized: Access denied');
    }
  } catch (error) {
    console.error('Login error:', error);
    toast.error(error.response.data.message);
    throw error;
  }
};