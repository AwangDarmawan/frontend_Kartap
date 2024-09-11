import "../../styles/Personalia/TableDataKaryawan.css";
import addBtn from "../../assets/gala_add.svg";

const TableEvaluasi = () => {
  return (
    <>
      <div>
        {/* Header */}
        <div className="header">
          <h3 className="header-title my-0">Hasil Evaluasi Faktor</h3>
          <div className="atribut">
            <button className="btn-tambah">
              <img src={addBtn} alt="Tambah" className="pe-2 img-tambah" />
              Tambah
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">Id Kriteria</th>
                <th scope="col">Nama Kriteria</th>
                <th scope="col">Nama Subkriteria</th>
                <th scope="col">Evaluasi Faktor</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              <tr> 
                <th scope="row" className="text-kode">K</th> 
                <td className="text-kategori"></td>
                <td className="text-nama"></td>
                <td className="text-nama"></td>
                <td className="aksi-btn">
                  <div className="btn-wrapper d-flex gap-2">
                    <button className="btn btn-create">Ubah</button>
                    <button className="btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableEvaluasi;
