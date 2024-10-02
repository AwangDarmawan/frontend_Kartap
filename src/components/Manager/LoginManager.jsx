import "../../styles/Manager/LoginManager.css";
import { Link } from 'react-router-dom';
import btnIpl from "../../assets/ipll.png";
import { AuthManager } from "../../services/apimanager";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginManager = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const loginHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await AuthManager(username, password);
        if (data.status === "OK" && data.data.user.role === 'manager') {
          if (data.token) {
            localStorage.setItem('managerToken', data.token);
            console.log(data.token);
            console.log(data.data.user);
            navigate('/Data/Hasil');
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
                <label>NIP Manager</label>
                <input
                  type="text"
                  placeholder="ID Manager"
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

export default LoginManager;