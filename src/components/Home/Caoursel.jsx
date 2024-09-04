import caursel1 from "../../assets/homes/caoursel1.jpg";
import caursel2 from "../../assets/homes/caoursel2.jpg";
import { Carousel } from 'react-bootstrap';
import "../../styles/Homes/home.css"

import React from 'react';
const Caoursel = () => {
  return (
    <>
     <div className="carousel-header">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={caursel1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h1 className="carousel-heading text-white mb-3 mb-md-4">
              PT INDONESIA PROJEK LOGISTIK
            </h1>
            <p className="carousel-text text-white mb-4 mb-md-5">
              PT Indonesia Projek Logistik memiliki dua jenis karyawan, yakni karyawan kontrak dan karyawan tetap.
            </p>
            <a
              className="btn btn-primary border-secondary rounded-pill carousel-button text-white"
              href="/DataTableKaryawan"
            >
              Informasi Pengangkatan
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={caursel2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
          <h1 className="carousel-heading text-white mb-3 mb-md-4">
              PT INDONESIA PROJEK LOGISTIK
            </h1>
            <p className="carousel-text text-white mb-4 mb-md-5">
              PT Indonesia Projek Logistik sendiri memiliki dua jenis karyawan, yakni karyawan kontrak dan karyawan tetap.
            </p>
            <a
              className="btn btn-primary border-secondary rounded-pill carousel-button text-white"
              href="/TableKaryawan"
            >
              Informasi Pengangkatan
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>


    

    </>
  );
};

export default Caoursel;
