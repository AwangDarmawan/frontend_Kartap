import "../../styles/Manager/LoginManager.css";
import { Link } from 'react-router-dom';
import btnIpl from "../../assets/ipll.png";

const LoginManager = () => {
    return (
        <>
            <div className="login-admin-wrapper">
                <div className="login-admin-brand">
                    <div className="navbar-brand">
                    <img src={btnIpl} alt=""  className="personalia-img"/>
                    <h5 className="title-brand">INDONESIA PROJEK LOGISTIK </h5>
                    </div>
                </div>
                <div className="login-admin-body">
                    <div className="login-admin-input">
                        <div className="admin-body-header">
                            Login
                        </div>
                        <form className="admin-body-form" action="">
                            <div className="admin-form-item">
                                <label>ID Manager</label>
                                <input type="text" placeholder="ID Manager" />
                            </div>
                            <div className="admin-form-item">
                                <label>Password</label>
                                <input type="password" placeholder="Masukan password" />
                            </div>
                        </form>
                        <Link to="/Data/Hasil">
                            <button className="btn-login-admin" type="submit">Masuk</button>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginManager;