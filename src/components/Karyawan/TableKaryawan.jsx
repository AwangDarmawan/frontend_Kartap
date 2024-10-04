




import "../../styles/Personalia/TableDataKaryawan.css";
import { useState, useEffect } from "react";
import { getperangkingan, getKaryawan, getPerhitungan, getallKriteria, getallSubKriteria, getallEvaluasi } from "../../services/apipersonalia";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TableKaryawan = () => {
  const [lihatHasil, setLihatHasil] = useState([]);
  const [dataKaryawan, setDataKaryawan] = useState([]);
  const [dataPerhitungan, setDataPerhitungan] = useState([]);
  const [dataKriteriall, setKriteriall] = useState([]);
  const [dataSubKriteriall, setSubKriteriall] = useState([]);
  const [dataEvaluasiall, setEvaluasiall] = useState([]);

  // Fetch data karyawan, perangkingan, dan perhitungan
  const LihatKaryawan = async () => {
    try {
      const karyawanData = await getKaryawan();
      setDataKaryawan(karyawanData); // Simpan data karyawan
      
      const resultPerangkingan = await getperangkingan();
      setLihatHasil(resultPerangkingan.data); 

      // Fetch data perhitungan dan simpan
      const KriteriaData = await getallKriteria();
      setKriteriall(KriteriaData.data); 

      const SubKriteriaData = await getallSubKriteria();
      setSubKriteriall(SubKriteriaData); 

      const Evaluasiall = await getallEvaluasi();
      setEvaluasiall(Evaluasiall.Data); 

      const perhitunganData = await getPerhitungan();
      setDataPerhitungan(perhitunganData.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    LihatKaryawan();
  }, []);

  // Fungsi untuk mencocokkan ID karyawan di perangkingan dengan data karyawan
  const getKaryawanDetails = (karyawanId) => {
    const karyawan = dataKaryawan.find(k => k.id === karyawanId);
    const perhitungan = dataPerhitungan.filter(p => p.karyawan === karyawanId);
    
    const perhitunganWithKriteria = perhitungan.map(p => {
      const kriteria = dataKriteriall.find(k => k.id === p.kriteria); 
      const subkriteria = dataSubKriteriall.find(s => s.id === p.hasil_evaluasi_faktor); // Dapatkan subkriteria
      return {
        kriteria: kriteria ? kriteria.nama_kriteria : "Kriteria tidak ditemukan",
        subkriteria: subkriteria ? subkriteria.nama_subkriteria : "Subkriteria tidak ditemukan", // 
        hasil_perhitungan: p.hasil_perhitungan,
       
      };
    });
    
    if (karyawan) {
      return {
        nama: karyawan.nama,
        nip: karyawan.nip,
        perhitungan: perhitunganWithKriteria
      };
    } else {
      return { 
        nama: "Nama tidak ditemukan", 
        nip: "NIP tidak ditemukan", 
        perhitungan: [] 
      };
    }
  };

  const printPDF = () => {
    const input = document.getElementById('table-to-print');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('Hasil Pengangkatan.pdf');
    });
  };

  return (
    <>
      {/* Header */}
      <div className="home" id="table-to-print">
        <div className="container mt-3">
          <div className="header">
            <h3 className="header-title my-0">Informasi Pengangkatan</h3>
            {/* Tombol Cetak */}
            <button className="btn btn-danger no-print" onClick={printPDF}>
              Cetak
            </button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table mt-3">
              <thead className="table-primary">
                <tr className="header-table">
                  <th scope="col">NIP</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Kriteria</th>
                  <th scope="col">Nilai</th>
                  <th scope="col">Hasil</th>
                </tr>
              </thead>
              <tbody className="isi-table">
                {lihatHasil.map((item) => {
                  const { nama, nip, perhitungan } = getKaryawanDetails(item.karyawan); // Ambil nama, NIP, dan perhitungan karyawan
                  return (
                    <tr key={item.id}>
                      <td className="text-kategori">{nip}</td>
                      <td className="text-kategori">{nama}</td>
                      <td className="text-kategori">
                        {perhitungan.map((p, index) => (
                          <div key={index} className="d-flex">
                            {p.kriteria} : {p.subkriteria}{/* Menampilkan hasil_evaluasi_faktor */}
                          </div>
                        ))}
                      </td>
                    
                      <td className="text-nama">{item.nilai_perangkingan}</td>
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
      </div>
    </>
  );
};

export default TableKaryawan;
