import "../../styles/Personalia/TableDataKaryawan.css";
import React from "react";
import { useState,useEffect } from "react";
import { getKaryawan,getperangkingan } from "../../services/apipersonalia";
import Disetujui from "../Modal Manager/Disetujui";



const TableHasil = () => {
  const [modaldisetujui, setModalDisetujui] = useState(false);
  const [DataDiangkat, setDataDiangkat] = useState([]);
  const [DataKaryawan, setDataKaryawan] = useState([]);
  const [DataDiangkatBYID, setDataDiangkatBYID] = useState([]);

 
 const fetchrangking = async () => {
  try {
    const karyawanData = await getKaryawan();
    setDataKaryawan(karyawanData); 
    
    const result = await getperangkingan();
    setDataDiangkat(result.data); 
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
  useEffect(() => {
 
    fetchrangking();
  }, []);
  const getKaryawanDetails = (karyawanId) => {
    const karyawan = DataKaryawan.find(k => k.id === karyawanId);
    if (karyawan) {
      return { nama: karyawan.nama, nip: karyawan.nip };
    } else {
      return { nama: "Nama tidak ditemukan", nip: "NIP tidak ditemukan" }; 
    }
  };

  const handleUbahClick = (id) => {
    console.log("ID yang dikirim:", id);
    setDataDiangkatBYID(id);
    setModalDisetujui(true);
  };
  const handleUbahClose = () => {
    setModalDisetujui(false);
    fetchrangking(); 
  };

  return (
    
    <>
      
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Data Karyawan</h3>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
              {/* <th scope="col">ID</th> */}
                <th scope="col">NIP</th>
                <th scope="col">Nama</th>
                <th scope="col">Nilai</th>
                <th scope="col">Hasil</th>
                <th scope="col">Keputusan Manager</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {DataDiangkat.filter(item => item.keputusan_diangkat).map((item) => { // Filter hanya yang diangkat
                const { nama, nip } = getKaryawanDetails(item.karyawan); // Ambil nama dan NIP karyawan
                return (
                  <tr key={item.id}>
                     {/* <td className="text-kategori">{item.id}</td> */}
                    <td className="text-kategori">{nip}</td>
                    <td className="text-kategori">{nama}</td>
                    <td className="text-nama">{item.nilai_perangkingan}</td>
                    <td className={`text-kategori ${item.keputusan_diangkat ? 'text-primary' : 'text-danger'}`}>
                      {item.keputusan_diangkat ? "Diangkat" : "Tidak"}
                    </td>
                    <td className={`text-kategori ${item.validasi_manager ? 'text-primary' : 'text-danger'}`}>
                      {item.validasi_manager ? "Disetujui" : "ditolak"}
                    </td>
                  <td className="aksi-btn">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className={`btn btn-create ${item.validasi_manager ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleUbahClick(item.id)}
                  
                      >
                        setujui
                      </button>
                     
                    </div>
                  </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Disetujui
        show={modaldisetujui}
        id={DataDiangkatBYID}
        onHide={handleUbahClose} 
      />
        
    </>
  );
};

export default TableHasil;
