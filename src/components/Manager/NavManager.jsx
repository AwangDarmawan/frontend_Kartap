import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import btnList from "../../assets/fi_list.svg";
// import btnsearch from "../../assets/bx_search-alt.svg";

import { Link } from 'react-router-dom';

const NavPersonalia = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="navbar-admin-wrapper">
        <div className='sidebar-admin-offcanvas'>
          <Button variant="info" onClick={handleShow}>
            <img src={btnList}/>
          </Button>

          <Offcanvas className="sidebar-offcanvas-body" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1>Hi, Manager</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to={"/Data/Hasil"} className="offcanvas-body-item">
                <p>Hasil Perhitungan</p>
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="admin-user-text text-dark">Hi, Manager Personalia</div>
      </div>
    </>
  )
}

export default NavPersonalia;