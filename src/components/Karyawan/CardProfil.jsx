import { Row, Col, Container } from "react-bootstrap";

import "../../styles/Karyawan/CardProfil.css"
import FormProfil from "../../components/Karyawan/FormProfil";
import SideBarAkun from "../../components/Karyawan/SidebarAkun";

const CardProfil = () => {
  return (
    <div className="container py-2">
      <div className="card card-akun">
        <div className="card-header d-flex align-items-center justify-content-center">
          Profil
        </div>
        <div className="card-body">
          <Row>
            <Col md={5}>
              <SideBarAkun />
            </Col>
            <Col md={7}>
              <Container className="px-4">
                <FormProfil />
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CardProfil;
