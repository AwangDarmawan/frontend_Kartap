import "../../styles/Personalia/TablePersonalia.css";
// import { Funnel } from "react-bootstrap-icons";
import Nav from "./Nav";
import HeaderProfil from "./HeaderProfil";
import NavbarBottom from "./NavbarBottom";
import Table from "./TableKaryawan";


const CardTableKaryawan = () => {
  return (
    <>
    <Nav />
    <HeaderProfil />
      <Table/>
      <NavbarBottom />
    </>
  );
};

export default CardTableKaryawan;
