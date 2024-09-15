
import "../../styles/Personalia/LoginPersonalia.css";
import { useNavigate } from 'react-router-dom';
import { AuthPersonalia } from "../../services/apipersonalia";
import { useState } from "react";
import btnIpl from "../../assets/ipll.png";

const LoginPersonalia = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await AuthPersonalia(username, password);
      if (data.status === "OK" && data.data.user.role === 'personalia') {
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log(data.token);
          console.log(data.data.user);
          navigate('/Data/Karyawan');
        } else {
          console.error("Token tidak ditemukan dalam respons.");
        }
        
      } else {
        console.error("Login gagal atau role bukan personalia.");
      }
      
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  

  return (
    <>
      <div className="login-admin-wrapper">
        <div className="login-admin-brand align-content-center">
          <div className="navbar-brand">
            <div className="navbar-brand gap-2">
              <img src={btnIpl} alt="" className="personalia-img" />
              <h5 className="title-brand">INDONESIA PROJEK LOGISTIK</h5>
            </div>
          </div>
        </div>
        <div className="login-admin-body">
          <div className="login-admin-input">
            <div className="admin-body-header">
              Login
            </div>
            <form onSubmit={loginHandler} className="admin-body-form">
              <div className="admin-form-item">
                <label>NIP Personalia</label>
                <input
                  type="text"
                  placeholder="ID Personalia"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="admin-form-item">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Masukan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn-login-admin" type="submit">Masuk</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPersonalia;
