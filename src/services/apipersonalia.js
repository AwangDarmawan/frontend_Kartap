import axios from "axios";
import { toast } from "react-toastify";

/* ============ */
/* === AUTH PERSONALIA=== */
/* ============ */
const baseUrl = import.meta.env.VITE_BASE_URL;
export const loginPersonalia = async (username, password) => {
    try {
        console.log("Sending request...");
        const response = await axios.post(`${baseUrl}/login`, {
        username: username ,
        password: password,
      });
      const { token } = response.data;
      toast.success(response.data.message);
      // console.log("token");
      return { token };
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
        // console.log("Salah");
      }
      return {};
    }
  };

  /* ============ */
/* === Kriteria=== */
/* ============ */

  // get all kriteria
  export const getallKriteria = async () => {
    try {
      const response = await axios.get(`${baseUrl}/kriteria`);
      return response.data;
    } catch (error) {
      console.error("Error fetching kriteria:", error);
      throw error;
    }
  };
  // Tambah kriteria
  export const addKriteria = async (kriteriaData) => {
    try {
      const response = await axios.post(`${baseUrl}/kriteria`, kriteriaData);
      return response.data;
    } catch (error) {
      console.error("Error adding kriteria:", error);
      throw error;
    }
  };
  // Fetch kriteria by ID
export const fetchKriteriaById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/kriteria/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching kriteria:", error);
    throw error;
  }
};


// Update kriteria by ID
export const updateKriteria = async (id, kriteriaData) => {
  try {
    const response = await axios.put(`${baseUrl}/kriteria/${id}`, kriteriaData);
    return response.data;
  } catch (error) {
    console.error("Error updating kriteria:", error);
    throw error;
  }
};

//delete kriteria 
export const deleteKriteria = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/kriteria/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

 /* ============ */
/* === Subkriteria=== */
/* ============ */

 // get all Subkriteri
 export const getallSubKriteria = async () => {
  try {
    const response = await axios.get(`${baseUrl}/subkriteria`);
    return response.data.data.data;
  } catch (error) {
    console.error("Error fetching subkriteria:", error);
    throw error;
  }
};
// Fetch kriteria by ID
export const fetchSubKriteriaById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/subkriteria/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching kriteria:", error);
    throw error;
  }
};

//Update SubKriteria
export const updateSubKriteria = async (id, subkriteriaData) => {
  try {
    const response = await axios.put(`${baseUrl}/subkriteria/${id}`, subkriteriaData);
    return response.data;
  } catch (error) {
    console.error("Error updating kriteria:", error);
    throw error;
  }
};
//Tambah SubKriteria
export const addSubKriteria = async (subkriteriaData) => {
  try {
    const response = await axios.post(`${baseUrl}/subkriteria`, subkriteriaData);
    return response.data;
  } catch (error) {
    console.error("Error adding subkriteria:", error);
    throw error;
  }
};

//delete kriteria 
export const deleteSubKriteria = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/subkriteria/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};





