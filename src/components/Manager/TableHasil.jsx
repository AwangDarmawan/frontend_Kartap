import "../../styles/Personalia/TableDataKaryawan.css";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import React from "react";
import Disetujui from "./disetujui";
import Ditolak from "./ditolak"
import { useState } from "react";
const TableHasil = () => {
  const [modaldisetujui, setModalDisetujui] = useState(false);
  const [modalditolak, setModalDitolak] = useState(false);
  return (
    
    <>
      
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Data Karyawan</h3>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">ID</th>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Posisi</th>
                <th scope="col">Kinerja</th>
                <th scope="col">Lama Bekerja</th>
                <th scope="col">Kehadiran</th>
                <th scope="col">Pengalaman Kerja</th>
                <th scope="col">Usia</th>
                <th scope="col">Pendidikan</th>
                <th scope="col">Total</th>
                <th scope="col">status</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">sp123</th>
                <td className="text-kategori">Alya</td>
                <td className="text-nama">Wanita</td>
                <td className="text-nama">Staff Pemasaran</td>
                <td className="text-nama">Mencapai Target<br></br>(1)</td>
                <td className="text-nama">3 bulan <br></br>(0.5)</td>
                <td className="text-nama">100% <br></br>(0.5)</td>
                <td className="text-nama">Fresh Graduate<br></br>(0.5)</td>
                <td className="text-nama">23 tahun <br></br> (1)</td>
                <td className="text-nama">S1 <br></br>(1)</td>
                <td className="text-nama">1</td>
                <td className="text-nama">diangkat</td>    
                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalDisetujui(true)}
                    >
                      setujui
                    </button>
                    <button className=" btn btn-delete"
                     onClick={() => setModalDitolak(true)}>
                      Di tolak</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Disetujui
        show={modaldisetujui}
        onHide={() => setModalDisetujui(false)}
      />
         <Ditolak
        show={modalditolak}
        onHide={() => setModalDitolak(false)}
      />
    </>
  );
};

export default TableHasil;
