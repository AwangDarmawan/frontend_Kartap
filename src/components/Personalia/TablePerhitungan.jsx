

import { useState, useEffect } from "react";
import "../../styles/Personalia/TableDataKaryawan.css";
import addBtn from "../../assets/gala_add.svg";
import TambahDataPerhitungan from "../Modal Personalia/TambahDataPerhitungan";
import HapusDataPerhitungan from "../Modal Personalia/HapusDataPerhitungan";
import { getPerhitungan, getallKriteria, getallSubKriteria,getKaryawan } from "../../services/apipersonalia";

const TablePerhitungan = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowHapus, setModalShowHapus] = useState(false);
  const [perhitungan, setPerhitungan] = useState([]);
  const [kriteria, setKriteria] = useState([]);
  const [subkriteria, setSubkriteria] = useState([]);
  const [karyawan, setKaryawan] = useState([]);
  const [PerhitunganId, setPerhitunganId] = useState(null);

  const fetchPerhitungan = async () => {
    try {
      const result = await getPerhitungan();
      setPerhitungan(result.data);
    } catch (error) {
      console.error("Error fetching perhitungan:", error);
    }
  };

  const fetchkaryawan = async () => {
    try {
      const result = await getKaryawan();
      setKaryawan(result);
    } catch (error) {
      console.error("Error fetching perhitungan:", error);
    }
  };

  const fetchKriteria = async () => {
    try {
      const result = await getallKriteria();
      setKriteria(result.data);
    } catch (error) {
      console.error("Error fetching kriteria:", error);
    }
  };

  const fetchSubkriteria = async () => {
    try {
      const result = await getallSubKriteria();
      setSubkriteria(result);
    } catch (error) {
      console.error("Error fetching subkriteria:", error);
    }
  };

  useEffect(() => {
    fetchPerhitungan();
    fetchkaryawan();
    fetchKriteria();
    fetchSubkriteria();
  }, []);

  const getKriteriaName = (id) => {
    const item = kriteria.find(k => k.id === id);
    return item ? item.nama_kriteria : "Unknown";
  };

  const getSubKriteriaName = (id) => {
    const item = subkriteria.find(s => s.id === id);
    return item ? item.nama_subkriteria : "Tidak ada data";
  };
  const getKaryawanName = (id) => {
    const item = karyawan.find(s => s.id === id);
    return item ? item.nama : "Tidak ada data";
  };
  const getKaryawanNIP = (id) => {
    const item = karyawan.find(s => s.id === id);
    return item ? item.nip : "Tidak ada data";
  };

  const handleHapusClick = (id) => {
    console.log("Hapus:", id);
    setPerhitunganId(id);
    setModalShowHapus(true);
  };
  

  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Data Perhitungan</h3>
          <div className="atribut">
            <button
              className="btn-tambah"
              onClick={() => setModalShowTambah(true)}
            >
              <img src={addBtn} alt="" className="pe-2 img-tambah" />
              Tambah
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
              <th scope="col">NIP</th>
                <th scope="col">Karyawan</th>
                <th scope="col">Kriteria</th>
                <th scope="col">Subkriteria</th>
                <th scope="col">Hasil</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {perhitungan.map(item => (
                <tr key={item.id}>
                  <td className="text-kategori">{getKaryawanNIP(item.karyawan)}</td>
                  <td className="text-kategori">{getKaryawanName(item.karyawan)}</td>
                  <td className="text-nama">{getKriteriaName(item.kriteria)}</td>
                  <td className="text-nama">{getSubKriteriaName(item.subkriteria)}</td>
                  <td className="text-nama">{item.hasil_perhitungan}</td>
                  <td className="aksi-btn">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className="btn btn-create"
                       
                      >
                        Ubah
                      </button>
                      <button className="btn btn-delete"
                      onClick={() => handleHapusClick(item.id)}
                      >Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <HapusDataPerhitungan
        show={modalShowHapus}
        onHide={() => setModalShowHapus(false)}
        id={PerhitunganId}
        fetchPerhitungan={fetchPerhitungan} 
      />
      <TambahDataPerhitungan
        show={modalShowTambah}
        onHide={() => setModalShowTambah(false)}
      />
    </>
  );
};

export default TablePerhitungan;

