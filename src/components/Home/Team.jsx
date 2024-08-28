import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaMapMarkerAlt} from 'react-icons/fa';
import "../../styles/Homes/Team.css"
import team1 from "../../assets/homes/hari1.jpg";
import team2 from "../../assets/homes/siti.jpg";
const Team = () => {
  return (
    <section id="team" className="team ">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2 className='text-center'>Team</h2>
        </div>
        <Row className=' justify-content-center'>
          <Col lg={4} md={6} className="d-flex align-items-stretch">
            <div className="member" data-aos="zoom-in">
              <div className="member-img">
                <img src={team1} className="img-fluid member-iamg " alt="Walter White" />
                <div className="social">
                <a href="https://wwpc.eu.com/member/pt-indonesia-project-logistics/" className='sociala'><FaGoogle /></a>
                  <a href="https://www.facebook.com/thewwpcnetwork/" className='sociala'><FaFacebookF /></a>
                  <a href="https://www.google.com/maps/uv?pb=!1s0x2e698ab3018663e1%3A0xe4a803ab2dee585b!3m1!7e115!4s%2Fmaps%2Fplace%2Findonesia%2Bproject%2BLogistik%2F%40-6.2555996%2C106.9086199%2C3a%2C75y%2C352.58h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sTXZR0E3F8ZC1qcFCyC9GEg*212e0*214m2*213m1*211s0x2e698ab3018663e1%3A0xe4a803ab2dee585b%3Fsa%3DX%26ved%3D2ahUKEwjNl-mLqpSIAxWK-TgGHcOdDYcQpx96BAgTEAA!5sindonesia%20project%20Logistik%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sTXZR0E3F8ZC1qcFCyC9GEg&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111" className='sociala'><FaMapMarkerAlt /></a>
                  <a href="https://www.linkedin.com/in/harijadi-setiawan-90b52741/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=id" className='sociala'><FaLinkedinIn /></a>
                </div>
              </div>
              <div className="member-info">
                <h4 className="member-infoh4">Hari Setiawan</h4>
                <span className="member-infospan">Manager Personalia</span>
                <p className="member-infop">orang yang bertanggung jawab atas pengangkatan karyawan kontrak menjadi karyawan tetap</p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="d-flex align-items-stretch">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <div className="member-img">
                <img src={team2} className="img-fluid member-iamg " alt="Sarah Jhonson" />
                <div className="social">
                <a href="#" className='sociala'><FaGoogle /></a>
                  <a href="#" className='sociala'><FaFacebookF /></a>
                  <a href="#" className='sociala'><FaMapMarkerAlt /></a>
                  <a href="#" className='sociala'><FaLinkedinIn /></a>
                </div>
              </div>
              <div className="member-info">
                <h4 className="member-infoh4">Siti Aminah </h4>
                <span className="member-infospan">Staff Personalia</span>
                <p className="member-infop">orang yang melakukan evaluasi untuk pengangkatan karyawan kontrak menjadi karyawan tetap</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
