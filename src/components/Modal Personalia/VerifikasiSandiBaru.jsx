
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify"; 

const VerifikasiSandiBaru = (props) => {
  const [passwordBaru, setPasswordBaru] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordBaru !== confPassword) {
      toast.error("Password baru dan konfirmasi password tidak cocok");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/akun/change-password/${props.id}`,
        {
          newPassword: passwordBaru,
          confirmNewPassword: confPassword
        }
      );

      toast.success(response.data.message);
      props.onHide(); 

    } catch (error) {
      toast.error(error.response?.data?.message || "Gagal mengubah password");
    }
  };

  return (
    <Modal {...props} size="lg" centered className="modal-form-wrapper">
      <Modal.Header closeButton className="modal-header-admin flex-column-reverse">
        <Modal.Title className="text-center">Verifikasi Password Baru</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="passwordBaru">
            <Form.Label>Password Baru</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan Password Baru"
              value={passwordBaru}
              onChange={(e) => setPasswordBaru(e.target.value)}
              className="form-modal-admin"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confPassword">
            <Form.Label>Konfirmasi Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Konfirmasi Password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              className="form-modal-admin"
              required
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

export default VerifikasiSandiBaru;

