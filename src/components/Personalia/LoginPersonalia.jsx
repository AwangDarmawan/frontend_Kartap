import "../../styles/Personalia/LoginPersonalia.css";
import {useNavigate } from 'react-router-dom';
// import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { loginPersonalia } from "../../services/apipersonalia";
import { useState } from "react";
import btnIpl from "../../assets/ipll.png";

const LoginPersonalia = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
          const login = await loginPersonalia(username, password);
          console.log(login);
          if (login.token) {
            localStorage.setItem("token", login.token);
            navigate("/Data/Karyawan");
            console.log("sukses");
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <>
            <div className="login-admin-wrapper">
                <div className="login-admin-brand align-content-center">
                    <div className="navbar-brand">
                    <div className="navbar-brand gap-2">
                     <img src={btnIpl} alt=""  className="personalia-img"/>
                    <h5 className="title-brand">INDONESIA PROJEK LOGISTIK</h5>
                    </div>
                    </div>
                </div>
                <div className="login-admin-body">
                    <div className="login-admin-input">
                        <div className="admin-body-header">
                            Login
                        </div>
                        <form className="admin-body-form" action="" onSubmit={loginHandler}>
                            <div className="admin-form-item">
                                <label>ID Personalia</label>
                                <input type="text" 
                                placeholder="ID Personalia" 
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                />
                            </div>
                            <div className="admin-form-item">
                                <label>Password</label>
                                <input type="password" 
                                placeholder="Masukan password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                 />
                            </div>
                            <button className="btn-login-admin" type="submit">Masuk</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPersonalia;