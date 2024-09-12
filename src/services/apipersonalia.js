import axios from "axios";
import { toast } from "react-toastify";

/* ============ */
/* === AUTH KARYAWAN=== */
/* ============ */
const baseUrl = import.meta.env.VITE_BASE_URL;
export const AuthPersonalia = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { username, password });
    console.log('Login response:', response.data);
    if (response.data.status === "OK" && response.data.user.role === 'personalia') {
      toast.success(response.data.message);
      return response.data;
    } else {
      toast.error('Unauthorized: Access denied');
    }
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
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

//delete Subkriteria 
export const deleteSubKriteria = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/subkriteria/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
 /* ============ */
/* === Data Karyawan=== */
/* ============ */

// tampilkan karyawan
export const getKaryawan = async () => {
  try {
    const response = await axios.get(`${baseUrl}/karyawan`);
    console.log(response.data); 
    if (response.data.status === "OK") {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("There was an error fetching the data!", error);
    throw error;
  }
};
// tampilkan karyawan berdasarkan ID 
export const fetchKaryawanById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/karyawan/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching kriteria:", error);
    throw error;
  }
};

//update karyawan
export const updateKaryawan = async (id, dataKaryawan) => {
  try {
    const response = await axios.put(`${baseUrl}/karyawan/${id}`, dataKaryawan);
    return response.data;
  } catch (error) {
    console.error("Error updating kriteria:", error);
    throw error;
  }
};
//addd karyawan
export const addKaryawan = async (dataKaryawan) => {
  try {
    const response = await axios.post(`${baseUrl}/karyawan`,dataKaryawan);
    return response.data;
  } catch (error) {
    console.error("Error adding subkriteria:", error);
    throw error;
  }
};

//Hapus Karyawan
export const deleteKaryawan = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/karyawan/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


/* ============ */
/* === Akun=== */
/* ============ */
// tampilkan AKun
export const getallAkun = async () => {
  try {
    const response = await axios.get(`${baseUrl}/akun`);
    console.log(response.data); 
    if (response.data.status === "OK") {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("There was an error fetching the data!", error);
    throw error;
  }
};
//delete akun 
export const deleteAkun = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/akun/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/* ============ */
/* === Evaluasi Faktor === */
/* ============ */
export const getallEvaluasi  = async () => {
  try {
    const response = await axios.get(`${baseUrl}/evaluasi-faktor`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Evaluasi-faktor :", error);
    throw error;
  }
};

export const getallEvaluasiById  = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/evaluasi-faktor/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Evaluasi-faktor :", error);
    throw error;
  }
};

/* ============ */
/* === perangkingan === */
/* ============ */
export const getperangkingan  = async () => {
  try {
    const response = await axios.get(`${baseUrl}/perankingan`);
    return response.data;
  } catch (error) {
    console.error("Error fetching perangkingan :", error);
    throw error;
  }
};


/* ============ */
/* === Perhitungan === */
/* ============ */
export const getPerhitungan  = async () => {
  try {
    const response = await axios.get(`${baseUrl}/perhitungan`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Evaluasi-faktor :", error);
    throw error;
  }
};

//Tambah ADDperhitungan
export const addperhitungan = async (PerhitunganData) => {
  try {
    const response = await axios.post(`${baseUrl}/perhitungan`, PerhitunganData);
    return response.data;
  } catch (error) {
    console.error("Error adding subkriteria:", error);
    throw error;
  }
};