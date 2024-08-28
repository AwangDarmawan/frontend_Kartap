
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";

const TambahKriteria1 = (props) => {
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
          Tambah Kriteria
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
            <Form.Label>Nama Kriteria</Form.Label>
            <Form.Control
              type="text"
              placeholder="kinerja"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jenisKelamin">
            <Form.Label>Bobot Kriteria</Form.Label>
            <Form.Control
              type="text"
              placeholder="0.2"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="posisi">
            <Form.Label>Nama Subkriteria</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mencapai target"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jenisKelamin">
            <Form.Label>Bobot Subkriteria</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
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

export default TambahKriteria1;

