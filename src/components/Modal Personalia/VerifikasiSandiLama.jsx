import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify"; 
import VerifikasiSandiBaru from "./VerifikasiSandiBaru";

const VerifikasiSandiLama = (props) => {
  const [passwordLama, setPasswordLama] = useState("");
  const [modalShowBaru, setModalShowBaru] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/akun/verify-password/${props.id}`,
        { oldPassword: passwordLama }
      );

      toast.success(response.data.message);
      setModalShowBaru(true); 
      props.onHide(); 

    } catch (error) {
      setModalShowBaru(false); 
      toast.error(error.response.data.message || "Terjadi kesalahan saat verifikasi sandi lama");
    }
  };

  return (
    <>
      <Modal {...props} size="lg" centered className="modal-form-wrapper">
        <Modal.Header closeButton className="modal-header-admin flex-column-reverse">
          <Modal.Title className="text-center">Verifikasi Password Lama</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-admin">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="passwordLama">
              <Form.Label>Password Lama</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Password Lama"
                value={passwordLama}
                onChange={(e) => setPasswordLama(e.target.value)}
                className="form-modal-admin"
                required
              />
            </Form.Group>
            <Button className="btn-upload" variant="secondary" onClick={props.onHide}>
              Batal
            </Button>
            <Button className="btn-simpan" variant="primary" type="submit">
              Lanjutkan
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer-admin"></Modal.Footer>
      </Modal>
      <VerifikasiSandiBaru
        show={modalShowBaru}
        onHide={() => setModalShowBaru(false)}
        id={props.id} 
      />
    </>
  );
};

export default VerifikasiSandiLama;


