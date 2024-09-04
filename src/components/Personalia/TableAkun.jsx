import { useState,useEffect } from "react";
import "../../styles/Personalia/TableDataKaryawan.css";
import addBtn from "../../assets/gala_add.svg";
// import TambahAkun from "../Modal Personalia/TambahAkun";
import UbahAkun from "../Modal Personalia/UbahAkun";
import HapusAkun from "../Modal Personalia/HapusAkun";
import { getallAkun } from "../../services/apipersonalia";

const TableAkun = () => {
  const [modalShowUbah, setModalShowUbah] = useState(false);
  const [modalShowHapus, setModalShowHapus] = useState(false);
  const [akun, setAkun] = useState([]);
  const [AkunId, setAkunId] = useState(null);

  const fetchAkun = async () => {
    try {
      const result = await getallAkun();
      setAkun(result);
    } catch (error) {
      console.error("Error fetching kriteria:", error);
    }
  };

  useEffect(() => {
    fetchAkun();
  }, []);

  const handleHapusClick = (id) => {
    setAkunId(id);
    setModalShowHapus(true);
  };
  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Data Akun</h3>
          <div className="atribut">
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">ID</th>
                <th scope="col">Nama</th>
                <th scope="col">Password</th>
                <th scope="col">Posisi</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
            {akun.map(item => (
                <tr key={item.id}>
                  <th scope="row text-kode">{item.id}</th>
                  <td className="text-kategori">{item.username}</td>
                  <td className="text-nama">{item.password}</td>
                  <td className="text-kategori">{item.role}</td>
                  <td className="aksi-btn ">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className=" btn btn-create "
                        onClick={() => {
                          setModalShowUbah(true);
                        }}
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
      <UbahAkun
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
      />
      <HapusAkun
        show={modalShowHapus}
        onHide={() => setModalShowHapus(false)}
        id={AkunId}
        fetchAkun={fetchAkun} 
        />
    </>
  );
};

export default TableAkun;
