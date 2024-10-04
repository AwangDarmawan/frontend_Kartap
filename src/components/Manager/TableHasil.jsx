



import "../../styles/Personalia/TableDataKaryawan.css";
import React from "react";
import { useState,useEffect } from "react";
import { getallEvaluasi, getallKriteria, getallSubKriteria, getKaryawan,getperangkingan, getPerhitungan } from "../../services/apipersonalia";
import Disetujui from "../Modal Manager/Disetujui";



const TableHasil = () => {
  const [modaldisetujui, setModalDisetujui] = useState(false);
  const [DataDiangkat, setDataDiangkat] = useState([]);
  const [DataKaryawan, setDataKaryawan] = useState([]);
  const [DataDiangkatBYID, setDataDiangkatBYID] = useState([]);
  const [DataKriteria, setDataKriteria] = useState([]);
  const [DataSubkriteria, setDataSubKriteria] = useState([]);
  const [DataEvaluasi, setDataEvaluasi] = useState([]);
  const [DataPerhitungan, setDataPerhitungan] = useState([]);

 
 const fetchrangking = async () => {
  try {
    const karyawanData = await getKaryawan();
    setDataKaryawan(karyawanData); 
    
    const result = await getperangkingan();
    setDataDiangkat(result.data); 

    const Kriteria = await getallKriteria()
    setDataKriteria(Kriteria.data)

    const Subkriteria = await getallSubKriteria()
    setDataSubKriteria(Subkriteria)

    const Evaluasi = await getallEvaluasi()
    setDataEvaluasi(Evaluasi.data)

    const Perhitungan = await getPerhitungan()
    setDataPerhitungan(Perhitungan.data)

    
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

  const getKriteriaName = (id) => {
    const item = DataKriteria.find(k => k.id === id);
    return item ? item.nama_kriteria : "Unknown";
  };

  const getSubKriteriaName = (id) => {
    const item = DataSubkriteria.find(s => s.id === id);
    return item ? item.nama_subkriteria : "Tidak ada data";
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
                <th scope="col">Kriteria</th>
                <th scope="col">Nilai</th>
                <th scope="col">keputusan</th>
                <th scope="col">keterangan</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {DataDiangkat.filter(item => item.keputusan_diangkat).map((item) => { // Filter hanya yang diangkat
                const { nama, nip } = getKaryawanDetails(item.karyawan); 
                return (
                  <tr key={item.id}>
                     {/* <td className="text-kategori">{item.id}</td> */}
                    <td className="text-kategori">{nip}</td>
                    <td className="text-kategori">{nama}</td>
                    <td className="text-kategori">
                    {DataPerhitungan.map(kriteriaItem => (
                      <div key={kriteriaItem.id} className="d-flex">
                        {getKriteriaName(kriteriaItem.kriteria)} :
                        {getSubKriteriaName(kriteriaItem.hasil_evaluasi_faktor)}
                        </div>
                    ))}
                  </td>
                    <td className="text-nama">{item.nilai_perangkingan}</td>
                      <td className={`text-kategori ${item.validasi_manager === true ? 'text-primary' : item.validasi_manager === false ? 'text-danger' : 'text-muted'}`}>
                      {item.validasi_manager === true ? "Disetujui" : item.validasi_manager === false ? "Di tolak" : "belum di validasi"}
                      </td>
                      <td className="text-nama">{item.keterangan}</td>
                  <td className="aksi-btn">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className={`btn btn-create ${item.validasi_manager ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleUbahClick(item.id)}
                  
                      >
                        Validasi
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