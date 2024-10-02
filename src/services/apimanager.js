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
      const token = response.data.data.token; // Ambil token dari response
      localStorage.setItem('managerToken', token);
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
    const token = localStorage.getItem('authToken'); 
    const response = await axios.get(`${baseUrl}/manager/get-status`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Validasi :", error);
    throw error;
  }
};

export const getDiangkatById  = async (id,) => {
  
  try {
    const token = localStorage.getItem('managerToken'); 
    const response = await axios.get(`${baseUrl}/manager/get-status/${id}`,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Evaluasi-faktor :", error);
    throw error;
  }
};



//Update SubKriteria
export const ValidasiManager = async (id, disetujui) => {
  
  try {
    const token = localStorage.getItem('managerToken'); 
    const response = await axios.put(`${baseUrl}/manager/update-validasi-manager/${id}`, disetujui,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error updating kriteria:", error);
    throw error;
  }
};

export const getperangkingan  = async () => {
  const token = localStorage.getItem('managerToken');
  try {
    const response = await axios.get(`${baseUrl}/perankingan`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching perangkingan :", error);
    throw error;
  }
};
