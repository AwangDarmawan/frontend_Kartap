import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import "../../styles/Homes/Contact.css"

const Contact = () => {
  return (
    <section id="contact" className="contact section-bg">
      <Container>
        <div className="section-title">
          <h2 className='text-center'>Contact</h2>
        </div>

        <Row className='justify-content-center my-5'>
          <Col lg={4}>
            <div className="info d-flex flex-column justify-content-center" data-aos="fade-right">
              <div className="address">
                <FaMapMarkerAlt className="icon" />
                <h4 className='infoh4'>Lokasi:</h4>
                <p className='infop'>Ruko Jatiwaringin Junction Kav. 11 Jl. Jatiwaringin Raya No. 24, Jakarta Timur, Indonesia</p>
              </div>
              <div className="phone">
                <FaPhone className="icon" />
                <h4 className='infoh4'>Telephone:</h4>
                <p className='infop'>Free: +62 212962 2471</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
