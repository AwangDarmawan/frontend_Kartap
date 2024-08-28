import "../../styles/Personalia/TablePersonalia.css";



const TableKaryawan = () => {
  return (
    <>
      {/* Header  */}
      <div className="home">
      <div className="container mt-3">
      <div className="header">
        <h3 className="header-title my-0">Informasi Pengangkatan</h3>
         {/* Tombol Cetak */}
         <button className="btn btn-danger no-print">
              Cetak
            </button>
      </div>

      {/* Table */}

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
              <th scope="col">Usia</th>
              <th scope="col">Pengalaman Kerja</th>
              <th scope="col">Pendidikan</th>
              <th scope="col">Total</th>
              <th scope="col">peringkat</th>
              <th scope="col">status</th>
              <th scope="col">keterangan</th>
            </tr>
          </thead>
          <tbody className="isi-table">
            <tr>
              <th scope="row">123</th>
              <td className="text-kategori">Alya</td>
              <td className="text-class">Perempuan</td>
              <td className="text-lunas">Maintenance</td>
              <td className="text-payment">Mencapai Target(1)</td>
              <td className="text-payment">7 bln(0.5)</td>
              <td className="text-payment">80%(0.5)</td>
              <td className="text-payment">24(1)</td>
              <td className="text-payment">Fresh garduate(0.5)</td>
              <td className="text-payment">S1(1)</td>
              <td className="text-payment">0.9</td>
              <td className="text-payment">1</td>
              <td className="text-belum">Tidak</td>
              <td className="text-belum">Tidak memenuhi nilai</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </>
  );
};

export default TableKaryawan;
