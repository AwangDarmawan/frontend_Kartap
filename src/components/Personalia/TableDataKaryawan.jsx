import { useState } from "react";

import "../../styles/Personalia/TableDataKaryawan.css";
import addBtn from "../../assets/gala_add.svg";
import TambahDataKaryawan from "../Modal Personalia/TambahDataKaryawan";
import UbahDataKaryawan from "../Modal Personalia/UbahDataKaryawan";

const TableDataKaryawan = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
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
                <th scope="col">ID</th>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Posisi</th>
                <th scope="col">Status</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">sp123</th>
                <td className="text-kategori">Alya</td>
                <td className="text-nama">Wanita</td>
                <td className="text-nama">Staff Pemasaran</td>
                <td className="text-nama">Karyawan Kontrak</td>

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
      <UbahDataKaryawan
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
      />
      <TambahDataKaryawan
        show={modalShowTambah}
        onHide={() => setModalShowTambah(false)}
      />
    </>
  );
};

export default TableDataKaryawan;
