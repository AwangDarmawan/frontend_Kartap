import "../../styles/Personalia/TableEvaluasi.css";
import addBtn from "../../assets/gala_add.svg";
import { getallEvaluasi } from "../../services/apipersonalia";
import { useState,useEffect } from "react";
import LihatEvaluasi from "../Modal Personalia/LihatEvaluasi";

const TableEvaluasi = () => {
  const [modalShowLihat, setModalShowLihat] = useState(false);
  const [Evaluasi, setEvaluasi] = useState([]);
  const [EvaluasiId, setEvaluasiId] = useState(null);
  const fetchEvaluasi = async () => {
    try {
      const result = await getallEvaluasi();
      setEvaluasi(result.data);
    } catch (error) {
      console.error("Error fetching kriteria:", error);
    }
  };

  useEffect(() => {
    fetchEvaluasi();
  }, []);

  const handleLihatClick = (id) => {
    console.log("ID yang dikirim:", id);
    setEvaluasiId(id);
    setModalShowLihat(true);
  };

  return (
    <>
      <div>
        {/* Header */}
        <div className="header">
          <h3 className="header-title my-0">Hasil Evaluasi Faktor</h3>
          <div className="atribut">
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">Id</th>
                <th scope="col">Bobot Kriteria</th>
                <th scope="col">Bobot Subkriteria</th>
                <th scope="col">Evaluasi Faktor</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {Evaluasi.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td className="text-kategori">K{item.bobot_kriteria}</td> 
                  <td className="text-kategori">SUB-{item.bobot_subkriteria}</td> 
                  <td className="text-kategori">{item.hasil_evaluasi_faktor}</td>
                  <td className="text-center align-middle">
                    <div className="btn-wrapper d-flex gap-2">
                      <button
                        className="btn btn-create"
                        onClick={() => handleLihatClick(item.id)}
                      >
                        Lihat
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>
      </div>
      <LihatEvaluasi
        show={modalShowLihat}
        onHide={() => setModalShowLihat(false)}
        id={EvaluasiId}
      />
    </>
  );
};

export default TableEvaluasi;
