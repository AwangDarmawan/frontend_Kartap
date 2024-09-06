

import "../../styles/Karyawan/FormProfil.css";

const FormPassword = () => {
  const karyawanID = localStorage.getItem('karyawanID');
  const karyawanUsername = localStorage.getItem('karyawanUsername'); 
  return (
    <>
      <div className="input-profile ">
      <form className="mt-2">
          <label className="text-label">ID</label>
          <input type="text" className="form-control" placeholder="123" value={karyawanID} readOnly disabled/>
          <label className="text-label">Nama</label>
          <input type="text" className="form-control" placeholder="123" value={karyawanUsername} readOnly disabled/>
          <label className="text-label">Password</label>
          <input type="password" className="form-control" placeholder="123" disabled/>
        </form>
      </div>
    </>
  );
};

export default FormPassword;
