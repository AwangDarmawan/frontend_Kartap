// import "../../styles/Personalia/TableEvaluasi.css";
// import { getallEvaluasi } from "../../services/apipersonalia";
// import { useState,useEffect } from "react";
// import LihatEvaluasi from "../Modal Personalia/LihatEvaluasi";

// const TableEvaluasi = () => {
//   const [modalShowLihat, setModalShowLihat] = useState(false);
//   const [Evaluasi, setEvaluasi] = useState([]);
//   const [EvaluasiId, setEvaluasiId] = useState(null);
//   const fetchEvaluasi = async () => {
//     try {
//       const result = await getallEvaluasi();
//       setEvaluasi(result.data);
//     } catch (error) {
//       console.error("Error fetching kriteria:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEvaluasi();
//   }, []);

//   const handleLihatClick = (id) => {
//     console.log("ID yang dikirim:", id);
//     setEvaluasiId(id);
//     setModalShowLihat(true);
//   };

//   return (
//     <>
//       <div>
//         {/* Header */}
//         <div className="header">
//           <h3 className="header-title my-0">Hasil Evaluasi Faktor</h3>
//           <div className="atribut">
//           </div>
//         </div>

//         <div className="table-responsive">
//           <table className="table mt-3">
//             <thead className="table-primary">
//               <tr className="header-table">
//                 <th scope="col">Id</th>
//                 <th scope="col">Bobot Kriteria</th>
//                 <th scope="col">Bobot Subkriteria</th>
//                 <th scope="col">Evaluasi Faktor</th>
//                 <th scope="col">Aksi</th>
//               </tr>
//             </thead>
//             <tbody className="isi-table">
//               {Evaluasi.map((item, index) => (
//                 <tr key={item.id}>
//                   <td>{index + 1}</td>
//                   <td className="text-kategori">K{item.bobot_kriteria}</td> 
//                   <td className="text-kategori">SUB-{item.bobot_subkriteria}</td> 
//                   <td className="text-kategori">{item.hasil_evaluasi_faktor}</td>
//                   <td className="text-center align-middle">
//                     <div className="btn-wrapper d-flex gap-2">
//                       <button
//                         className="btn btn-create"
//                         onClick={() => handleLihatClick(item.id)}
//                       >
//                         Lihat
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//               </tbody>
//           </table>
//         </div>
//       </div>
//       <LihatEvaluasi
//         show={modalShowLihat}
//         onHide={() => setModalShowLihat(false)}
//         id={EvaluasiId}
//       />
//     </>
//   );
// };

// export default TableEvaluasi;
import { useState, useEffect } from "react";
import { getallEvaluasi, getallKriteria, getallSubKriteria } from "../../services/apipersonalia";
import "../../styles/Personalia/TableEvaluasi.css";
import LihatEvaluasi from "../Modal Personalia/LihatEvaluasi";

const TableEvaluasi = () => {
  const [modalShowLihat, setModalShowLihat] = useState(false);
  const [evaluasi, setEvaluasi] = useState([]);
  const [kriteria, setKriteria] = useState([]);
  const [subkriteria, setSubkriteria] = useState([]);
  const [evaluasiId, setEvaluasiId] = useState(null);

  const fetchEvaluasi = async () => {
    try {
      const evaluasiResult = await getallEvaluasi();
      setEvaluasi(evaluasiResult.data);
    } catch (error) {
      console.error("Error fetching evaluasi:", error);
    }
  };

  const fetchKriteria = async () => {
    try {
      const kriteriaResult = await getallKriteria();
      setKriteria(kriteriaResult.data);
    } catch (error) {
      console.error("Error fetching kriteria:", error);
    }
  };

  const fetchSubkriteria = async () => {
    try {
      const subkriteriaResult = await getallSubKriteria();
      setSubkriteria(subkriteriaResult);
    } catch (error) {
      console.error("Error fetching subkriteria:", error);
    }
  };

  useEffect(() => {
    fetchEvaluasi();
    fetchKriteria();
    fetchSubkriteria();
  }, []);

  const getKriteriaName = (kriteriaId) => {
    const kriteriaItem = kriteria.find(k => k.id === kriteriaId);
    return kriteriaItem ? kriteriaItem.nama_kriteria : "Nama tidak ditemukan";
  };

  const getSubkriteriaName = (subkriteriaId) => {
    const subkriteriaItem = subkriteria.find(s => s.id === subkriteriaId);
    return subkriteriaItem ? subkriteriaItem.nama_subkriteria : "Nama tidak ditemukan";
  };

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
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">No</th>
                <th scope="col">Nama Kriteria</th>
                <th scope="col">Nama Subkriteria</th>
                <th scope="col">Evaluasi Faktor</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {evaluasi.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td className="text-kategori">{getKriteriaName(item.bobot_kriteria)}</td>
                  <td className="text-kategori">{getSubkriteriaName(item.bobot_subkriteria)}</td>
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
        id={evaluasiId}
      />
    </>
  );
};

export default TableEvaluasi;
