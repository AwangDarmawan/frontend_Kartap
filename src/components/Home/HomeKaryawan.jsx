import "../../styles/Karyawan/HomeKaryawan.css";


import Nav from "../Karyawan/Nav";
import Caoursel from "./Caoursel";
import NavbarBottom from "../Karyawan/NavbarBottom";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";

const HomeKaryawan = () => {
  return (
    <>
      <Nav />
      <Caoursel/>
      <About/>
      <Team/>
      <Contact/>
      <NavbarBottom />
      
    </>
  );
};

export default HomeKaryawan;
