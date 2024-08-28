import "../../styles/Karyawan/NavKaryawan.css";

import { Link, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import btnUser from "../../assets/fi_user.svg";
import {FaList,FaSignOutAlt } from "react-icons/fa";


const Nav = () => {
  const location = useLocation();

  const getButtonText = () => {
    if (location.pathname === "/Profil") {
      return "Profil";
    } else if (location.pathname === "/TableKaryawan") {
      return "Informasi Pengangkatan";
    }  else if (location.pathname === "/") {
    return "Logout";
     }else {
      return null;
    }
  };

  const buttonText = getButtonText();

  return (
    <>
      <nav className="navbar-wrapper">
        <Link to={"/"} className="text-decoration-none">
          <div className="navbar-brand"></div>
        </Link>
        <div className="button-menu d-flex align-items-center">
          <Dropdown>
          </Dropdown>
          <Link to={"/TableKaryawan"} className="text-decoration-none">
            {location.pathname === "/TableKaryawan" ? (
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
          <Link to={"/"} className="text-decoration-none">
            {location.pathname === "/Logout" ? (
              <button className="btn-menu-on">
                {/* <img src={btnNotif} className="pt-1"/> */}
                <FaSignOutAlt className="item-icon list"  />
                <div className="mx-2">
                  {buttonText}
                </div>
              </button>
            ) : (
              <button className="btn-menu-off">
                {/* <img src={btnNotif}/> */}
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
