

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../styles/Personalia/TambahDataKaryawan.css";
import { deleteAkun } from "../../services/apipersonalia"; 
import { toast } from "react-toastify";

const HapusKaryawan = ({ id, onHide, fetchAkun, ...props }) => {
  const handleDelete = async () => {
    try {
      await deleteAkun(id);
      fetchAkun(); 
      onHide(); 
      toast.success("Akun removed successfully");
    } catch (error) {
      toast.error("Error removing Akun");
      console.error("Error deleting kriteria:", error);
    }
  };

  

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
          Hapus Akun
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin"> 
        <Button className="btn-upload" variant="secondary" onClick={onHide}>
          Batal
        </Button>
        <Button className="btn-simpan" variant="primary" onClick={handleDelete}>
          Hapus
        </Button>
      </Modal.Body>
      <Modal.Footer className="modal-footer-admin"></Modal.Footer>
    </Modal>
  );
};

export default HapusKaryawan;


