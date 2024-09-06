import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginKaryawan from "./components/Karyawan/LoginKaryawan";
import LoginPersonalia from "./components/Personalia/LoginPersonalia";
import LoginManager from "./components/Manager/LoginManager";
import HomeKaryawan from "./pages/Karyawan/HomeKaryawan";
import Profil from "./pages/Karyawan/Profil";
import DataKaryawan from "./pages/Personalia/DataKaryawan";
import DataTableKaryawan from "./pages/Karyawan/DataTableKaryawan"
import DataKriteria from "./pages/Personalia/DataKriteria";
import DataPerhitungan from "./pages/Personalia/DataPerhitungan";
import DataAkun from "./pages/Personalia/DataAkun";
import DataHasil from "./pages/Manager/DataHasilKaryawan";
import UbahPassword from "./pages/Karyawan/Password"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* karyawan */}
          <Route path="/" element={<LoginKaryawan />} />
          <Route path="/Profil" element={<Profil/>} />
          <Route path="/Ubah-Password" element={<UbahPassword/>} />
          <Route path="/Home/Karyawan" element={<HomeKaryawan/>}/>
          <Route path="/DataTableKaryawan" element={<DataTableKaryawan/>} />


           {/* Personalia */}
          <Route path="/Personalia" element={<LoginPersonalia/>}/>
          <Route path="/Data/Karyawan" element={<DataKaryawan/>} />
          <Route path="/Data/Kriteria" element={<DataKriteria/>} />
          <Route path="/Data/Kriteria" element={<DataKriteria/>} />
          <Route path="/Data/Perhitungan" element={<DataPerhitungan/>} />
          <Route path="/Data/Akun" element={<DataAkun/>} />


          {/* Manager */}
          <Route path="/Manager" element={<LoginManager/>}/>
          <Route path="/Data/Hasil" element={<DataHasil/>}/>
        
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </>
  )
}

export default App
