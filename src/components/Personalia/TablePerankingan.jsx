// import { useState,useEffect} from "react";

// import "../../styles/Personalia/TableDataKaryawan.css";
// import { getperangkingan } from "../../services/apipersonalia";




// const TablePerankingan = () => {
//     const [Rangking, setRangking] = useState([]);

//     const fetchrangking = async () => {
//         try {
//           const result = await getperangkingan();
//           setRangking(result.data);
//         } catch (error) {
//           console.error("Error fetching kriteria:", error);
//         }
//       };

//       useEffect(() => {
//         fetchrangking();
//       }, []);
    
//   return (
//     <>
//       <div>
//         {/* Header  */}
//         <div className="header">
//           <h3 className="header-title my-0">Perangkingan</h3>
//           <div className="atribut">
//           </div>
//         </div>

//         <div className="table-responsive">
//           <table className="table mt-3">
//             <thead className="table-primary">
//               <tr className="header-table">
//                 <th scope="col">ID</th>
//                 <th scope="col">Nama Karyawan </th>
//                 <th scope="col">Nilai</th>
//                 <th scope="col">Keputusan Diangkat</th>
//                 <th scope="col">Keputusan Manager</th>
//               </tr>
//             </thead>
//             <tbody className="isi-table">
//             {Rangking.map(item => (
//                 <tr>
//                   <th scope="row text-kode">{item.id}</th>
//                   <td className="text-kategori">{item.karyawan}</td>
//                   <td className="text-nama">{item.nilai_perangkingan}</td>
//                   <td className="text-kategori">{item.keputusan_diangkat ? "Diangkat" : "Tidak"}</td>
//                   <td className="text-kategori">{item.validasi_manager ? "Disetujui" : "di tolak"}</td>
//                   </tr>
//                 ))} 
//             </tbody>
            
//           </table>
//         </div>
//       </div>
    
//     </>
//   );
// };

// export default TablePerankingan;




import { useState, useEffect } from "react";
import { getperangkingan, getKaryawan } from "../../services/apipersonalia";

const TablePerankingan = () => {
  const [Rangking, setRangking] = useState([]);
  const [dataKaryawan, setDataKaryawan] = useState([]);

  // Fetch data karyawan dan perangkingan
  const fetchrangking = async () => {
    try {
      const karyawanData = await getKaryawan();
      setDataKaryawan(karyawanData); // Simpan data karyawan
      
      const result = await getperangkingan();
      setRangking(result.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchrangking();
  }, []);

  // Fungsi untuk mencocokkan ID karyawan di perangkingan dengan data karyawan
  const getKaryawanDetails = (karyawanId) => {
    const karyawan = dataKaryawan.find(k => k.id === karyawanId);
    if (karyawan) {
      return { nama: karyawan.nama, nip: karyawan.nip };
    } else {
      return { nama: "Nama tidak ditemukan", nip: "NIP tidak ditemukan" }; 
    }
  };

  return (
    <>
      <div>
        {/* Header */}
        <div className="header">
          <h3 className="header-title my-0">Informasi Hasil</h3>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">ID</th>
                <th scope="col">NIP</th>
                <th scope="col">Nama Karyawan</th>
                <th scope="col">Nilai</th>
                <th scope="col">Hasil Perhitungan</th>
                <th scope="col">Keputusan Manager</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {Rangking.map((item) => {
                const { nama, nip } = getKaryawanDetails(item.karyawan); // Ambil nama dan NIP karyawan
                return (
                  <tr key={item.id}>
                    <th scope="row" className="text-kode">{item.id}</th>
                    <td className="text-kategori">{nip}</td>
                    <td className="text-kategori">{nama}</td>
                    <td className="text-nama">{item.nilai_perangkingan}</td>
                    <td className={`text-kategori ${item.keputusan_diangkat ? 'text-primary' : 'text-danger'}`}>
                      {item.keputusan_diangkat ? "Diangkat" : "Tidak"}
                    </td>
                    <td className={`text-kategori ${item.validasi_manager ? 'text-primary' : 'text-danger'}`}>
                        {item.validasi_manager ? "Disetujui" : "Tidak"}
                      </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TablePerankingan;

