import React from 'react';
import { Link } from "react-router-dom";
import {FaUser, FaSignOutAlt } from "react-icons/fa";

import '../../styles/Personalia/SidebarPersonalia.css'; 
import btnIpl from "../../assets/ipll.png";


const SidebarManager = () => {

  return (
    <div className="sidebar-admin-wrapper">
      <div className="navbar-brand">
      <img src={btnIpl} className='image'/>
      </div>
      <div className="sidebar-admin-menu">
      <Link to={"/Data/Hasil"} className="sidebar-admin-item">
          <FaUser className="item-icon" />
          <p className="item">data </p>
        </Link>
        <Link to={"/Manager"} className="sidebar-admin-item">
          <FaSignOutAlt className="item-icon" />
          <p className="item"
            onClick={() => {
              localStorage.removeItem("managerToken");
              window.location.href = "/manager";
            }}>Keluar</p>
        </Link>
      </div>
    </div>
  );
};

export default SidebarManager;
