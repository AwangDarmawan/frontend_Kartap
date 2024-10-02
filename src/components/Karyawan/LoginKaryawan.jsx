import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import "../../styles/Karyawan/LoginKaryawan.css";
import "../../styles/Karyawan/Auth.css";
import { useNavigate } from 'react-router-dom';
import btnIpl from "../../assets/ipll.png";
import { AuthKaryawan } from "../../services/apikaryawan"; 

const LoginKaryawan = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await AuthKaryawan(username, password);
      if (data.status === "OK" && data.data.user.role === 'karyawan') {
        localStorage.setItem('KaryawanToken', data.token);  
        localStorage.setItem('karyawanID', data.data.user.id);  
        localStorage.setItem('karyawanUsername', data.data.user.username); 
        
        localStorage.setItem('nipKaryawan', data.data.karyawan.nip); 
        localStorage.setItem('namaKaryawan', data.data.karyawan.nama);   
        localStorage.setItem('genderKaryawan', data.data.karyawan.jenis_kelamin);  
        localStorage.setItem('posisiKaryawan', data.data.karyawan.posisi); 
        localStorage.setItem('statusKaryawan', data.data.karyawan.status);   
        navigate('/Home/Karyawan');
      } else {
        toast.error('Login failed or user is not a karyawan');
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper">
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
              <h3 className="txtmasuk font-bold">Login</h3>
              <form onSubmit={loginHandler} className="fm">
                <label className="mt-3">NIP Karyawan</label>
                <div className="input-form-user">
                  <input
                    type="text"
                    className="form-control-login"
                    placeholder="5520120121"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <label className="mt-3">Password</label>
                <div className="input-form-user">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control-login"
                    placeholder="Masukan Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeSlashFill /> : <EyeFill />}
                  </i>
                </div>
                <div className="d-grid mb-5 mt-2">
                  <button className="btn btn-masuk" type="submit">Masuk</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 account-block">
            <div className="navbar-brand gap-2">
              <img src={btnIpl} alt="" className="btn-ipl-img" />
              <h5 className="title-brand">INDONESIA PROJEK LOGISTIK</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginKaryawan;


