

import "../../styles/Karyawan/FormProfil.css";


const FormProfil = () => {  
  const namaKaryawan = localStorage.getItem('namaKaryawan');
  const nipKaryawan = localStorage.getItem('nipKaryawan');
  const genderKaryawan = localStorage.getItem('genderKaryawan') === 'true'; 
  const posisiKaryawan = localStorage.getItem('posisiKaryawan');
  const statusKaryawan = localStorage.getItem('statusKaryawan');
  return (
    <>
      <div className="input-profile ">
      {/* <form className="mt-2">
          <label className="text-label">ID</label>
          <input
            type="text"
            className="form-control"
            value={karyawanID}
            readOnly
            disabled 
          />
        </form> */}

        <form className="mt-2">
          <label className="text-label">NIP</label>
          <input
            type="text"
            className="form-control"
            value={nipKaryawan}
            readOnly
            disabled 
          />
        </form>
        <form className="mt-2">
          <label className="text-label">Nama</label>
          <input
            type="text"
            className="form-control"
            value={namaKaryawan}
            readOnly
            disabled 
          />
        </form>
        <form className="mt-1">
          <label className="text-label">Jenis Kelamin</label>
          <input
            type="text"
            className="form-control"
            value={genderKaryawan? "Pria" : "Wanita"}
            readOnly
            disabled 
          />
        </form>
        <form className="mt-1">
          <label className="text-label">Posisi</label>
          <input
            type="text"
            className="form-control"
            value={posisiKaryawan}
            readOnly
            disabled 
          />
        </form>

        <form className="mt-1">
          <label className="text-label">status</label>
          <input
            type="text"
            className="form-control"
            value={statusKaryawan}
            readOnly
            disabled 
          />
        </form>
      </div>
    </>
  );
};

export default FormProfil;



