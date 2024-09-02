
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";

const TambahAkun = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-form-wrapper"
    >
      <Modal.Header
        closeButton
        className="modal-header-admin flex-column-reverse"
      >
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Tambah Akun
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form>
          <Form.Group className="mb-3" controlId="namaKelas">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              placeholder="Alya"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          
          <Button className="btn-upload" variant="secondary" onClick={props.onHide}>
            Batal
          </Button>
          <Button className="btn-simpan" variant="primary" type="submit">
            Simpan
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-admin"></Modal.Footer>
    </Modal>
  );
};

export default TambahAkun;

