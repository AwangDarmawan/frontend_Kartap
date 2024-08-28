import { useState } from "react";

import "../../styles/Personalia/TableDataKaryawan.css";

import addBtn from "../../assets/gala_add.svg";
import TambahDataKaryawan from "../Modal/TambahDataKaryawan";
import UbahDataKaryawan from "../Modal/UbahDataKaryawan";

const TableKriteria2 = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  return (
    <>
      <div>
        {/* Header  */}
        <div className="header ">
          <h3 className="header-title my-0">Evaluasi Faktor</h3>
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
                <th scope="col">No</th>
                <th scope="col">Nama Kriteria</th>
                <th scope="col">Bobot Kriteria</th>
                <th scope="col">Nama Subkriteria</th>
                <th scope="col">Bobot Subkriteria</th>
                <th scope="col">Hasil Evaluasi Faktor</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
                <tr>
                  <td rowSpan="3">1</td>
                  <td rowSpan="3" className="text-kategori">Kinerja</td>
                  <td className="text-kategori">Mendekati Target</td>
                  <td className="text-kategori">5</td>
                  <td rowSpan="3" className="text-kategori">20</td>
                  <td className="text-kategori">0.25</td>
                  <td rowSpan="3" className="text-center align-middle">
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
                <tr>
                  <td>Mencapai Target</td>
                  <td>10</td>
                  <td>0.5</td>
                </tr>
                <tr>
                  <td>Melebihi Target</td>
                  <td>20</td>
                  <td>1</td>
                </tr>
            </tbody>
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">K2</th>
                <td className="text-kategori">Lama Bekerja</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">0.20</td>
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
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">K2</th>
                <td className="text-kategori">Kehadiran</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">0.20</td>
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
             <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">K1</th>
                <td className="text-kategori">Kinerja</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">0.20</td>
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
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">K4</th>
                <td className="text-kategori">Usia</td>
                <td className="text-nama">15%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">0.15</td>
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
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">K5</th>
                <td className="text-kategori">Pengalaman Kerja</td>
                <td className="text-nama">15%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">0.15</td>
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
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">K6</th>
                <td className="text-kategori">Pendidikan</td>
                <td className="text-nama">10%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">20%</td>
                <td className="text-nama">0.10</td>
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

export default TableKriteria2;
