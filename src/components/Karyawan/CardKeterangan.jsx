import { Row, Col, Container } from "react-bootstrap";
import "../../styles/Karyawan/CardProfil.css"
import FormKeterangan from "./FormKeterangan"
import SideBarAkun from "./SidebarAkun";

const CardKeterangan = () => {
  const karyawanId = localStorage.getItem('karyawanID');
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
                <FormKeterangan  karyawanId={karyawanId}/>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CardKeterangan;
