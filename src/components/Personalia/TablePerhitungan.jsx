import { useState } from "react";

import "../../styles/Personalia/TableDataKaryawan.css";

import addBtn from "../../assets/gala_add.svg";
import TambahDataPerhitungan from "../../components/Modal/TambahDataPerhitungan";
import UbahDataPerhitungan from "../../components/Modal/UbahDataPerhitungan";

const TablePerhitungan = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Data Perhitungan</h3>
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
                <th scope="col">ID</th>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Jabatan</th>
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
                <td className="text-nama">Staff</td>
                <td className="text-nama">Staff</td>
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
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <UbahDataPerhitungan
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
      />
      <TambahDataPerhitungan
        show={modalShowTambah}
        onHide={() => setModalShowTambah(false)}
      />
    </>
  );
};

export default TablePerhitungan;
