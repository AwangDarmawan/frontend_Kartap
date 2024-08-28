import { useState } from "react";

import "../../styles/Personalia/TableDataKaryawan.css";

import addBtn from "../../assets/gala_add.svg";
import TambahKriteria1 from "../Modal/TambahKriteria1";
import UbahKriteria1 from "../Modal/UbahKriteria1";

const TableKriteria1 = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Kriteria dan Faktor</h3>
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
                <th scope="col">Initial Kriteria</th>
                <th scope="col">Nama Kriteria</th>
                <th scope="col">Bobot Persentase</th>
                <th scope="col">Bobot Faktor</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">K1</th>
                <td className="text-kategori">Kinerja</td>
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
                <td className="text-kategori">Lama Bekerja</td>
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
            <tbody className="isi-table">
              <tr>
              <td className="text-nama" colSpan="2" >Total</td>
                <td className="text-nama" >100%</td>
                <td className="text-nama">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <UbahKriteria1
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
      />
      <TambahKriteria1
        show={modalShowTambah}
        onHide={() => setModalShowTambah(false)}
      />
    </>
  );
};

export default TableKriteria1;
