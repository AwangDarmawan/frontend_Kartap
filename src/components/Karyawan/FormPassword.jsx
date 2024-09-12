
import { useState} from "react";
import "../../styles/Karyawan/FormProfil.css";
import VerifikasiSandiLama from "../Modal Personalia/VerifikasiSandiLama";
const FormPassword = () => {
  const [modalShowUbah, setModalShowUbah] = useState(false);
  const [AkunId, setAkunId] = useState(null);
  const karyawanID = localStorage.getItem('karyawanID');
  const karyawanUsername = localStorage.getItem('karyawanUsername'); 

  const handleUbahClick = (karyawanID) => {
    console.log("ID yang dikirim:", karyawanID);
    setAkunId(karyawanID);
    setModalShowUbah(true);
  };
  return (
    <>
      <div className="input-profile ">
      <form className="mt-2">
          <label className="text-label">ID</label>
          <input type="text" className="form-control" placeholder="123" value={karyawanID} readOnly disabled/>
          <label className="text-label">NIP</label>
          <input type="text" className="form-control" placeholder="123" value={karyawanUsername} readOnly disabled/>
          <label className="text-label">Password</label>
          <input type="password" className="form-control" placeholder="*********" disabled/>
          <button className="btn-ubah" type="button" 
          onClick={() => handleUbahClick(karyawanID)}
          >Ubah Password</button>
        </form>
      </div>
      <VerifikasiSandiLama
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
        id={AkunId}
      />
    </>
  );
};

export default FormPassword;
