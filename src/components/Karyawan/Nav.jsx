import "../../styles/Karyawan/NavKaryawan.css";

import { Link, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import btnUser from "../../assets/fi_user.svg";
import {FaList,FaSignOutAlt } from "react-icons/fa";
import btnIpl from "../../assets/ipll.png";
const Nav = () => {
  const location = useLocation();
  const karyawanUsername = localStorage.getItem('karyawanUsername'); 
  
  const getButtonText = () => {
    if (location.pathname === "/Profil") {
      return `${karyawanUsername}`;
    } else if (location.pathname === "/DataTableKaryawan") {
      return "Informasi Pengangkatan";
    }  else if (location.pathname === "/") {
    return "Logout";
     }else {
      return null;
    }
  };

  const buttonText = getButtonText();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("karyawanUsername");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar-wrapper">
        <Link to={"/Home/Karyawan"} className="text-decoration-none">
          <div className="navbar-brand">
          <img src={btnIpl} alt="" className="nav-img"/>
          <h5 className="title-brand">INDONESIA PROJEK LOGISTIK</h5>
          </div>
        </Link>
        <div className="button-menu d-flex align-items-center">
          <Dropdown>
          </Dropdown>
          <Link to={"/DataTableKaryawan"} className="text-decoration-none">
            {location.pathname === "/DataTableKaryawan" ? (
              <button className="btn-menu-on">
                <FaList className="item-icon list"  />
                <div className="mx-2">
                  {buttonText}
                </div>
              </button>
            ) : (
              <button className="btn-menu-off">
                <FaList className="item-icon list" />
              </button>
            )}
          </Link>
          <Link to={"/Profil"} className="text-decoration-none">
            {location.pathname === "/Profil" ? (
              <button className="btn-menu-on">
                <img src={btnUser}/>
                <div className="mx-2">
                  {buttonText}
                </div>
              </button>
            ) : (
              <button className="btn-menu-off">
                <img src={btnUser}/>
              </button>
            )}
          </Link>
          <Link to={"/"} onClick={handleLogout} className="text-decoration-none">
            {location.pathname === "/Logout" ? (
              <button className="btn-menu-on">
                <FaSignOutAlt className="item-icon list"  />
                <div className="mx-2">
                  {buttonText}
                </div>
              </button>
            ) : (
              <button className="btn-menu-off">
                <FaSignOutAlt className="item-icon list" />
              </button>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
