import FiEdit from "../../assets/fi_edit-3.svg";
import FiSetting from "../../assets/fi_settings.svg";
import { Link } from "react-router-dom";
import "../../styles/Karyawan/SidebarAkun.css"
import { FaList } from "react-icons/fa";

const SideBarAkun = () => {
 
  return (
    <>
      <ul className="list-group gap-2 py-3">
        <Link to={"/Profil"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiEdit} alt=""/>
            <p className="mb-0 list-name ">Profil Saya</p>
          </li>
        </Link>
        <Link to={"/ubah-password"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiSetting} alt=""/>
            <p className="mb-0 list-name ">Ubah Password</p>
          </li>
        </Link>
        <Link to={"/Keterangan"} className="text-decoration-none"> 
          <li className="list-item d-flex align-items-center gap-2">
            <FaList  className="ms-1"/>
           
            <p className="mb-0 list-name ">Keterangan</p>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default SideBarAkun;
