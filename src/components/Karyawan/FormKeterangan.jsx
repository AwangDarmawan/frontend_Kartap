import "../../styles/Karyawan/FormProfil.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

const FormKeterangan = ({ karyawanId }) => {  
  const [perangkinganData, setPerangkinganData] = useState(null);
  

  useEffect(() => {
    const fetchPerangkingan = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/perankingan/karyawan/${karyawanId}`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        setPerangkinganData(response.data.data);
      } catch (error) {
        toast.error("data tidak ada")
      } 
    };

    if (karyawanId) {  
      fetchPerangkingan();
    }
  }, [karyawanId]);

  return (
    <div className="input-profile">
      {perangkinganData ? (
        <form className="mt-2">
          <label className="text-label">Keputusan</label>
          <input 
            type="text" 
            className="form-control" 
            value={perangkinganData.validasi_manager ? 'Diangkat' : 'Tidak Diangkat'} 
            readOnly 
            disabled 
           
          />
          <label className="text-label">Keterangan</label>
          <input 
            type="text" 
            className="form-control" 
            value={perangkinganData.keterangan} 
            readOnly 
            disabled 
           
          />
         
        </form>
      ) : (
        <p>tidak ada data</p>
         
      )}
    </div>
  );
};

export default FormKeterangan;



