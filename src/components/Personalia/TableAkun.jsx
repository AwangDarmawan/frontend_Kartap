import { useState,useEffect } from "react";
import "../../styles/Personalia/TableAkun.css";
import VerifikasiSandiLama from "../Modal Personalia/VerifikasiSandiLama";
import { getallAkun } from "../../services/apipersonalia";

const TableAkun = () => {
  const [modalShowUbah, setModalShowUbah] = useState(false);
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

  const handleUbahClick = (id) => {
    console.log("ID yang dikirim:", id);
    setAkunId(id);
    setModalShowUbah(true);
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
                <th scope="col">NIP</th>
                <th scope="col">Password</th>
                <th scope="col">Posisi</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
            {akun.map(item => (
                <tr key={item.id}>
                  <td className="text-kategori">{item.username}</td>
                  <td className="text-kategori">******</td>
                  <td className="text-kategori">{item.role}</td>
                  <td className="aksi-btn ">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className=" btn btn-create "
                        onClick={() => handleUbahClick(item.id)}
                      >
                        Ubah
                      </button>
                    </div>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <VerifikasiSandiLama
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
        id={AkunId}
      />
      
    </>
  );
};

export default TableAkun;
