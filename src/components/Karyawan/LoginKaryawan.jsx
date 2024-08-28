import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import "../../styles/Karyawan/LoginKaryawan.css";
import "../../styles/Karyawan/Auth.css"
import { Link } from 'react-router-dom';
import { loginUser } from "../../services/apikaryawan";
import btnIpl from "../../assets/ipll.png";

const LoginKaryawan = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const login = await loginUser(username, password);
      console.log(login);
      if(login.token) {
        localStorage.setItem("token", login.token);
        window.location.href = "/";
      }
    } catch (error) {
      throw(error);
    }
  }
  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper">
          <div className=" col-md-7 d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
              <h3 className="txtmasuk font-bold">Masuk</h3>
              <form onSubmit={loginHandler} className="fm">
                  <label className="mt-3">ID Karyawan</label>
                  <div className="input-form-user">
                    <input
                      type="email"
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
                    <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashFill/> : <EyeFill/>}</i>
                  </div>
                  <Link to="/Home/Karyawan">
                <div className="d-grid mb-5 mt-2">
                  <button className="btn btn-masuk " type="submit">
                    Masuk
                  </button>
                </div>
                </Link>
              </form>
            </div>
          </div>
          {/* <div className="col-md-5 account-block"></div> */}
          <div className="col-md-5 account-block">
            <div className="navbar-brand gap-2">
              <img src={btnIpl} alt="" className="btn-ipl-img"/>
              <h5 className="title-brand">INDONESIA PROJEK LOGISTIK</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginKaryawan;
