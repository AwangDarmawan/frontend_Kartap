import "../../styles/Personalia/TablePersonalia.css";
// import { Funnel } from "react-bootstrap-icons";
import Nav from "../../components/Karyawan/Nav";
import HeaderProfil from "../../components/Karyawan/HeaderProfil";
import NavbarBottom from "../../components/Karyawan/NavbarBottom";
import Table from "../../components/Karyawan/TableKaryawan";


const DataTableKaryawan = () => {
  return (
    <>
      <Nav />
      <HeaderProfil />
      <Table/>
      <NavbarBottom />
    </>
  );
};

export default DataTableKaryawan;
