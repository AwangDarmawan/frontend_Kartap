
import { useState, useEffect } from "react";
import { getperangkingan, getKaryawan } from "../../services/apipersonalia";

const TableHasilPerhitungan = () => {
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
          <h3 className="header-title my-0">Hasil Perhitungan</h3>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">NIP</th>
                <th scope="col">Nama Karyawan</th>
                <th scope="col">Nilai</th>
                <th scope="col">Hasil Perhitungan</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              {Rangking.map((item) => {
                const { nama, nip } = getKaryawanDetails(item.karyawan); // Ambil nama dan NIP karyawan
                return (
                  <tr key={item.id}>
                    <td className="text-kategori">{nip}</td>
                    <td className="text-kategori">{nama}</td>
                    <td className="text-nama">{item.nilai_perangkingan}</td>
                    <td className={`text-kategori ${item.keputusan_diangkat ? 'text-primary' : 'text-danger'}`}>
                      {item.keputusan_diangkat ? "Diangkat" : "Tidak"}
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

export default TableHasilPerhitungan;

