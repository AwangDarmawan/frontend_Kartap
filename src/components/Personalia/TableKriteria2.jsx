import { useState, useEffect } from "react";

import "../../styles/Personalia/TableDataKaryawan.css";

import addBtn from "../../assets/gala_add.svg";
import TambahKriteria2 from "../Modal Personalia/TambahKriteria2";
import UbahKriteria2 from "../Modal Personalia/UbahKriteria2";
import { getallSubKriteria } from "../../services/apipersonalia";
import HapusKriteria2 from "../Modal Personalia/HapusKriteria2";


const TableKriteria2 = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  const [modalShowHapus, setModalShowHapus] = useState(false);
  const [subkriteria, setSubkriteria] = useState([]);
  const [selectedSubKriteriaId, setSelectedSubKriteriaId] = useState(null);

  const fetchSubkriteria = async () => {
    try {
      const data = await getallSubKriteria();
      setSubkriteria(data);
    } catch (error) {
      console.error("Error fetching subkriteria:", error);
    }
  };

  useEffect(() => {
    fetchSubkriteria(); 
  }, []);

  const handleTambahClose = () => {
    setModalShowTambah(false);
    fetchSubkriteria(); 
  };

  const handleUbahClose = () => {
    setModalShowUbah(false);
    fetchSubkriteria(); 
  };

  const handleUbahClick = (id) => {
    setSelectedSubKriteriaId(id);
    setModalShowUbah(true);
  };
  const handleHapusClick = (id) => {
    setSelectedSubKriteriaId(id);
    setModalShowHapus(true);
  };

  return (
    <>
      <div>
        {/* Header  */}
        <div className="header ">
          <h3 className="header-title my-0">Subkriteria dan Bobot Subkriteria </h3>
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
                <th scope="col">No</th>
                <th scope="col">Id Kriteria</th>
                <th scope="col">Id SubKriteria</th>
                <th scope="col">Nama Subkriteria</th>
                <th scope="col">Bobot Subkriteria</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {subkriteria.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td className="text-kategori">K{item.kriteria}</td> 
                  <td className="text-kategori">SUB-{item.id}</td> 
                  <td className="text-kategori">{item.nama_subkriteria}</td>
                  <td className="text-kategori">{item.bobot_subkriteria}</td>
                  <td className="text-center align-middle">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className="btn btn-create"
                        onClick={() => handleUbahClick(item.id)}
                      >
                        Ubah
                      </button>
                    <button
                      className="btn btn-delete"
                     onClick={() => handleHapusClick(item.id)}
                       >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>
      </div>
      <UbahKriteria2
        show={modalShowUbah}
        onHide={handleUbahClose} 
        id={selectedSubKriteriaId}
      />
      <TambahKriteria2
        show={modalShowTambah}
        onHide={handleTambahClose} 
      />
        <HapusKriteria2
        show={modalShowHapus}
        onHide={() => setModalShowHapus(false)}
        id={selectedSubKriteriaId}
        fetchSubKriteria={fetchSubkriteria} 
        />
    </>
  );
};

export default TableKriteria2;
