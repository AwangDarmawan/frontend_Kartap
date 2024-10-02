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
    if (response.data.status === "OK" && response.data.data.user.role === 'personalia') {
      const token = response.data.data.token; // Ambil token dari response
      localStorage.setItem('authToken', token);
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
      const token = localStorage.getItem('authToken'); 
      const response = await axios.get(`${baseUrl}/kriteria`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching kriteria:", error);
      throw error;
    }
  };

  // Tambah kriteria
  export const addKriteria = async (kriteriaData,token) => {
    try {
      const response = await axios.post(`${baseUrl}/kriteria`, kriteriaData, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error adding kriteria:", error);
      throw error;
    }
  };
  // Fetch kriteria by ID
export const fetchKriteriaById = async (id, token) => {
  try {
    const response = await axios.get(`${baseUrl}/kriteria/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching kriteria:", error);
    throw error;
  }
};


// Update kriteria by ID
export const updateKriteria = async (id, kriteriaData,token) => {
  try {
    const response = await axios.put(`${baseUrl}/kriteria/${id}`, kriteriaData, {
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

//delete kriteria 
export const deleteKriteria = async (id,token) => {
  try {
    const response = await axios.delete(`${baseUrl}/kriteria/${id}`, {
      headers: {
      Authorization: `Bearer ${token}` 
    }
  });
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
    const token = localStorage.getItem('authToken'); 
    const response = await axios.get(`${baseUrl}/subkriteria`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    console.log("responses",response.data.data.data)
    return response.data.data.data;
  } catch (error) {
    console.error("Error fetching subkriteria:", error);
    throw error;
  }
};
// Fetch kriteria by ID
export const fetchSubKriteriaById = async (id, token) => {
  try {
    const response = await axios.get(`${baseUrl}/subkriteria/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching kriteria:", error);
    throw error;
  }
};

//Update SubKriteria
export const updateSubKriteria = async (id, subkriteriaData,token) => {
  try {
    const response = await axios.put(`${baseUrl}/subkriteria/${id}`, subkriteriaData , {
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
//Tambah SubKriteria
export const addSubKriteria = async (subkriteriaData,token) => {
  try {
    const response = await axios.post(`${baseUrl}/subkriteria`, subkriteriaData, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error adding subkriteria:", error);
    throw error;
  }
};

//delete Subkriteria 
export const deleteSubKriteria = async (id, token) => {
  try {
    const response = await axios.delete(`${baseUrl}/subkriteria/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
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
    const token = localStorage.getItem('authToken'); 
    const response = await axios.get(`${baseUrl}/karyawan`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
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
  const token = localStorage.getItem('authToken'); 
  try {
    const response = await axios.get(`${baseUrl}/karyawan/${id}`,{
      headers: {
      Authorization: `Bearer ${token}` 
    }
  });
    return response.data;
  } catch (error) {
    console.error("Error fetching kriteria:", error);
    throw error;
  }
};

//update karyawan
export const updateKaryawan = async (id, dataKaryawan) => {
  const token = localStorage.getItem('authToken'); 
  try {
    const response = await axios.put(`${baseUrl}/karyawan/${id}`, dataKaryawan,{
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
//addd karyawan
export const addKaryawan = async (dataKaryawan,token) => {
  try {
    const response = await axios.post(`${baseUrl}/karyawan`, dataKaryawan, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error adding add karyawan:", error);
    throw error;
  }
};

//Hapus Karyawan
export const deleteKaryawan = async (id,token) => {
  try {
    const response = await axios.delete(`${baseUrl}/akun/${id}`,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    console.log("delte", response.data)
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
    const token = localStorage.getItem('authToken');
    const response = await axios.get(`${baseUrl}/akun`,{
       headers: {
      Authorization: `Bearer ${token}` 
    }
  });
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

/* ============ */
/* === Evaluasi Faktor === */
/* ============ */
export const getallEvaluasi  = async () => {
  try {
    const token = localStorage.getItem('authToken'); 
    const response = await axios.get(`${baseUrl}/evaluasi-faktor`, {
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

export const getallEvaluasiById  = async (id,token) => {
  try {
    const response = await axios.get(`${baseUrl}/evaluasi-faktor/${id}`, {
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

/* ============ */
/* === perangkingan === */
/* ============ */
export const getperangkingan  = async () => {
  const token = localStorage.getItem('authToken');
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

//Hapus Karyawan
export const deleteperangkingan = async (id,token) => {
  try {
    const response = await axios.delete(`${baseUrl}/perankingan/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    console.log("hapus", response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};


/* ============ */
/* === Perhitungan === */
/* ============ */
export const getPerhitungan  = async () => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.get(`${baseUrl}/perhitungan`,{
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

//Tambah ADDperhitungan
export const addperhitungan = async (perhitungan,token) => {
  try {
    const response = await axios.post(`${baseUrl}/perhitungan`, perhitungan,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error adding subkriteria:", error);
    throw error;
  }
};

//delete perhitungan
export const deleteperhitungan = async (id,token) => {
  try {
    const response = await axios.delete(`${baseUrl}/perhitungan/${id}`,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};