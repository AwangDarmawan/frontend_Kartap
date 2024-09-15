import axios from "axios";
import { toast } from "react-toastify";
/* === AUTH Manager=== */
/* ============ */
const baseUrl = import.meta.env.VITE_BASE_URL;
export const AuthManager = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { username, password });
    console.log('Login response:', response.data);
    if (response.data.status === "OK" && response.data.data.user.role === 'manager') {
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

//getdataDIangkat
export const getdataDiangkat = async () => {
  try {
    const response = await axios.get(`${baseUrl}/manager/get-status`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Validasi :", error);
    throw error;
  }
};

export const getDiangkatById  = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/manager/get-status/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Evaluasi-faktor :", error);
    throw error;
  }
};



//Update SubKriteria
export const ValidasiManager = async (id, disetujui) => {
  try {
    const response = await axios.put(`${baseUrl}/manager/update-validasi-manager/${id}`, disetujui);
    return response.data;
  } catch (error) {
    console.error("Error updating kriteria:", error);
    throw error;
  }
};