

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { deleteKriteria } from "../../services/apipersonalia"; 
import { toast } from "react-toastify";

const HapusKriteria1 = ({ id, onHide, fetchKriteria, ...props }) => {
 

  const handleDelete = async () => {
    try {
      await deleteKriteria(id);
      fetchKriteria(); 
      onHide(); 
      toast.success("Kriteria removed successfully");
    } catch (error) {
      toast.error("Error removing kriteria");
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
          Hapus Kriteria
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

export default HapusKriteria1;


