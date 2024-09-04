
import { useState, useEffect } from "react";

import "../../styles/Personalia/TableDataKaryawan.css";

import addBtn from "../../assets/gala_add.svg";
import TambahKriteria1 from "../Modal Personalia/TambahKriteria1";
import UbahKriteria1 from "../Modal Personalia/UbahKriteria1";
import HapusKriteria1 from "../Modal Personalia/HapusKriteria1";
import { getallKriteria } from "../../services/apipersonalia";

const TableKriteria1 = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  const [modalShowHapus, setModalShowHapus] = useState(false);
  const [kriteria, setKriteria] = useState([]);
  const [selectedKriteriaId, setSelectedKriteriaId] = useState(null);
 

  const fetchKriteria = async () => {
    try {
      const result = await getallKriteria();
      setKriteria(result.data);
    } catch (error) {
      console.error("Error fetching kriteria:", error);
    }
  };

  useEffect(() => {
    fetchKriteria();
  }, []);



  const handleUbahClick = (id) => {
    setSelectedKriteriaId(id);
    setModalShowUbah(true);
  };

  const handleTambahClose = () => {
    setModalShowTambah(false);
    fetchKriteria(); 
  };

  const handleUbahClose = () => {
    setModalShowUbah(false);
    fetchKriteria(); 
  };
  const handleHapusClick = (id) => {
    setSelectedKriteriaId(id);
    setModalShowHapus(true);
  };
  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Kriteria dan Faktor</h3>
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
                <th scope="col">Id Kriteria</th>
                <th scope="col">Nama Kriteria</th>
                <th scope="col">Bobot Persentase</th>
                <th scope="col">Bobot Faktor</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {kriteria.map(item => (
                <tr key={item.id}>
                  <th scope="row text-kode">K{item.id}</th>
                  <td className="text-kategori">{item.nama_kriteria}</td>
                  <td className="text-nama">{item.bobot_presentase}%</td>
                  <td className="text-nama">{item.bobot_kriteria}</td>
                  <td className="aksi-btn">
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
      <UbahKriteria1
        show={modalShowUbah}
        onHide={handleUbahClose} 
        id={selectedKriteriaId}
      />
      <TambahKriteria1
        show={modalShowTambah}
        onHide={handleTambahClose} 
      />
       
        <HapusKriteria1
        show={modalShowHapus}
        onHide={() => setModalShowHapus(false)}
        id={selectedKriteriaId}
        fetchKriteria={fetchKriteria} 
        />
    


    </>
  );
};

export default TableKriteria1;




