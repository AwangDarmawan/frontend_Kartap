import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginKaryawan from "./components/Karyawan/LoginKaryawan";
import LoginPersonalia from "./components/Personalia/LoginPersonalia";
import LoginManager from "./components/Manager/LoginManager";
import HomeKaryawan from "./components/Home/HomeKaryawan";
import Profil from "./components/Karyawan/Profil";
import DataKaryawan from "./components/Personalia/DataKaryawan";
import TableKaryawan from "./components/Karyawan/CardTableKaryawan"
import DataKriteria from "./components/Personalia/DataKriteria";
import DataPerhitungan from "./components/Personalia/DataPerhitungan";
import DataAkun from "./components/Personalia/DataAkun";
import DataHasil from "./components/Manager/DataHasilKaryawan";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* karyawan */}
          <Route path="/" element={<LoginKaryawan />} />
          <Route path="/Profil" element={<Profil/>} />
          <Route path="/Home/Karyawan" element={<HomeKaryawan/>}/>
          <Route path="/TableKaryawan" element={<TableKaryawan/>} />
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
