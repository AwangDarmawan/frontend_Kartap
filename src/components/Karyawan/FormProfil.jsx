

import "../../styles/Karyawan/FormProfil.css";

const FormProfil = () => {
  return (
    <>
      <div className="input-profile ">
      <form className="mt-2">
          <label className="text-label">ID</label>
          <input type="text" className="form-control" placeholder="123"  disabled />
        </form>
        <form className="mt-2">
          <label className="text-label">Nama</label>
          <input type="text" className="form-control" placeholder="John Doe" 
          disabled />
        </form>
        <form className="mt-1">
          <label className="text-label">Jenis Kelamin</label>
          <input
            type="email"
            className="form-control"
            placeholder="Laki-laki"
            disabled 
          />
        </form>
        <form className="mt-1">
          <label className="text-label">Posisi</label>
          <input
            type="number"
            className="form-control"
            placeholder=" Staff Pemasaran"
            disabled 
          />
        </form>
      </div>
    </>
  );
};

export default FormProfil;
