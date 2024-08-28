import fiHome from "../../assets/iconamoon_home-bold.svg";
// import fiNotif from "../../assets/pajamas_notifications.svg";
// import fiKelas from "../../assets/Vector.svg";
// import fiKursus from "../../assets/cil_list.svg";
import fiAkun from "../../assets/tdesign_user.svg";
import { Link } from "react-router-dom";
import "../../styles/Karyawan/NavbarBottom.css";
import {FaList,FaSignOutAlt } from "react-icons/fa";


const NavbarBottom = () => {
  return (
    <div className="navbar-bottom-wrapper d-flex justify-content-center gap-2 text-center sticky-bottom align-content-center">
      <div className="menu">
        <Link to={"/Home/Karyawan"} className="text-link">
          <img src={fiHome} alt="Beranda"  />
          Beranda
        </Link>
      </div>
      <div className="menu">
        <Link to={"/TableKaryawan"} className="text-link">
        <FaList className=" list-bottom"  />
          Table
        </Link>
      </div>
      <div className="menu">
        <Link to={"/Profil"} className="text-link">
          <img src={fiAkun} alt="Akun" />
          Akun
        </Link>
      </div>
      <div className="menu">
        <Link to={"/"} className="text-link">
        <FaSignOutAlt className=" list-bottom"  />
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default NavbarBottom;
