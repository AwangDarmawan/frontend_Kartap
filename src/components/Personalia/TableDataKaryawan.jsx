import { useState,useEffect } from "react";

import "../../styles/Personalia/TableDataKaryawan.css";
import addBtn from "../../assets/gala_add.svg";
import TambahDataKaryawan from "../Modal Personalia/TambahDataKaryawan";
import UbahDataKaryawan from "../Modal Personalia/UbahDataKaryawan";
import { getKaryawan } from "../../services/apipersonalia";
import HapusKaryawan from "../Modal Personalia/HapusKaryawan";


const TableDataKaryawan = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false)
  const [modalShowHapus, setModalShowHapus] = useState(false);;
  const [dataKaryawan, setDataKaryawan] = useState([]);
  const [DataKaryawanId, setDataKaryawanId] = useState(null);

  
  const fetchData = async () => {
    try {
      const data = await getKaryawan();
      setDataKaryawan(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleUbahClick = (id) => {
    console.log("ID yang dikirim:", id);
    setDataKaryawanId(id);
    setModalShowUbah(true);
  };
  const handleUbahClose = () => {
    setModalShowUbah(false);
    fetchData(); 
  };
  const handleTambahClose = () => {
    setModalShowTambah(false);
    fetchData(); 
  };
  const handleHapusClick = (id) => {
    console.log("Hapus:", id);
    setDataKaryawanId(id);
    setModalShowHapus(true);
  };

  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Data Karyawan</h3>
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
                <th scope="col">Nip</th>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Posisi</th>
                <th scope="col">Status</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
            {dataKaryawan.map((karyawan) => (
                <tr key={karyawan.id}>
                  <td className="text-kategori">{karyawan.nip}</td>
                  <td className="text-kategori">{karyawan.nama}</td>
                  <td className="text-nama">{karyawan.jenis_kelamin ? "Pria" : "Wanita"}</td>
                  <td className="text-nama">{karyawan.posisi}</td>
                  <th className="text-kode">{karyawan.status}</th>
                  <td className="aksi-btn ">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className=" btn btn-create "
                        onClick={() => handleUbahClick(karyawan.id)}
                      >
                        Ubah
                      </button>
                      <button className=" btn btn-delete"
                      onClick={() => handleHapusClick(karyawan.id)}
                      >Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UbahDataKaryawan
        show={modalShowUbah}
        id={DataKaryawanId}
        onHide={handleUbahClose} 
      />
      <TambahDataKaryawan
        show={modalShowTambah}
        onHide={handleTambahClose} 
      />
      <HapusKaryawan
        show={modalShowHapus}
        onHide={() => setModalShowHapus(false)}
        id={DataKaryawanId}
        fetchData={fetchData} 
        />
    </>
  );
};

export default TableDataKaryawan;
