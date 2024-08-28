import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkedAlt,FaBuilding, FaPhoneAlt, FaCommentDots, FaCheckCircle } from 'react-icons/fa';
import '../../styles/Homes/about.css'; 
import aboutImg1 from "../../assets/ipll.png";

function About() {
  return (
    <div className="container-fluid py-5">
      <Container className="py-5">
        <Row className="g-5">
          <Col xl={5} className="wow fadeInLeft" data-wow-delay="0.1s">
            <div className="bg-light rounded">
              <img src={aboutImg1} className="img-fluid w-100" style={{ marginBottom: '-7px' }} alt="About 1" />
            </div>
          </Col>
          <Col xl={7} className="wow fadeInRight" data-wow-delay="0.3s">
            <h5 className="sub-title pe-3">PT INDONESIA PROJEK LOGISTIK</h5>
            <h1 className="display-5 mb-4">Pengangkatan karyawan kontrak menjadi tetap </h1>
            <p className="mb-4">
            Pengangkatan karyawan kontrak menjadi karyawan tetap adalah proses transisi yang memungkinkan karyawan PT Indoensia projek logistik yang telah bekerja dengan status kontrak untuk menjadi bagian dari tim perusahaan secara permanen. Proses ini melibatkan evaluasi kinerja yang dilakukan Personalia dan Manager Personalia.
            </p>
            <Row className="gy-4 align-items-center">
              <Col xs={12} sm={12} className="d-flex align-items-center">
                <FaMapMarkedAlt className="fa-3x text-secondary" />
                <h5 className="ms-4">Penilaian Kriteria</h5>
              </Col>
             
              <Col xs={4} md={3}>
                <div className="bg-light text-center rounded p-3">
                  <div className="mb-2">
                    <FaBuilding className="fa-4x text-primary" />
                  </div>
                  <h1 className="display-5 fw-bold mb-2">6</h1>
                  <p className="text-muted mb-0">Kriteria yang di tetapkan di IPL</p>
                </div>
              </Col>
              <Col xs={8} md={9}>
                <div className="mb-5">
                  <p className="text-primary h6 mb-3">
                    <FaCheckCircle className="text-secondary me-2" /> Kinerja
                  </p>
                  <p className="text-primary h6 mb-3">
                    <FaCheckCircle className="text-secondary me-2" /> Lama Bekerja
                  </p>
                  <p className="text-primary h6 mb-3">
                    <FaCheckCircle className="text-secondary me-2" /> Kehadiran
                  </p>
                  <p className="text-primary h6 mb-3">
                    <FaCheckCircle className="text-secondary me-2" /> Pengalaman kerja 
                  </p>
                  <p className="text-primary h6 mb-3">
                    <FaCheckCircle className="text-secondary me-2" /> Usia
                  </p>
                  <p className="text-primary h6 mb-3">
                    <FaCheckCircle className="text-secondary me-2" /> Pendidikan
                  </p>
                </div>
                <div className="d-flex flex-wrap">
                  <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                    <a href="#" className="position-relative wow tada" data-wow-delay=".9s">
                      <FaPhoneAlt className="text-primary fa-3x" />
                      <div className="position-absolute" style={{ top: '0', left: '25px' }}>
                        <FaCommentDots className="text-secondary" />
                      </div>
                    </a>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <span className="text-primary">ada pertanyaan?</span>
                    <span className="text-secondary fw-bold fs-5" style={{ letterSpacing: '2px' }}>Free: +62 212962 2471</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
