import "../../styles/Karyawan/HomeKaryawan.css";
import Nav from "../../components/Karyawan/Nav";
import Caoursel from "../../components/Home/Caoursel";
import NavbarBottom from "../../components/Karyawan/NavbarBottom";
import About from "../../components/Home/About";
import Team from "../../components/Home/Team";
import Contact from "../../components/Home/Contact";

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
