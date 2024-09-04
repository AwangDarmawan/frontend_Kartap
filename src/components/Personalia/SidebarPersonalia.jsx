 import React from 'react';
import { Link } from "react-router-dom";
import {FaUser, FaList, FaCalculator, FaSignOutAlt } from "react-icons/fa";

import '../../styles/Personalia/SidebarPersonalia.css'; 
import btnIpl from "../../assets/ipll.png";


const SidebarPersonalia = () => {

  return (
    <div className="sidebar-admin-wrapper">
      <div className="navbar-brand">
      <img src={btnIpl} className='image'/>
      <h5 className="title-brand">INDONESIA PROJEK LOGISTIK</h5>
      </div>
      <div className="sidebar-admin-menu">
      <Link to={"/Data/Akun"} className="sidebar-admin-item">
          <FaUser className="item-icon" />
          <p className="item">Akun</p>
        </Link>
        <Link to={"/Data/Karyawan"} className="sidebar-admin-item">
          <FaUser className="item-icon" />
          <p className="item">Karyawan</p>
        </Link>
        <Link to={"/Data/Kriteria"} className="sidebar-admin-item">
          <FaList className="item-icon" />
          <p className="item">Kriteria</p>
        </Link>
        <Link to={"/Data/Perhitungan"} className="sidebar-admin-item">
          <FaCalculator className="item-icon" />
          <p className="item">Perhitungan</p>
        </Link>
        <Link to={"/Personalia"} className="sidebar-admin-item">
          <FaSignOutAlt className="item-icon" />
          <p className="item"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/Personalia";
            }}>Keluar</p>
        </Link>
      </div>
    </div>
  );
};

export default SidebarPersonalia;
