

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { deleteKriteria } from "../../services/apipersonalia"; 
import { toast } from "react-toastify";

const HapusKriteria1 = ({ id, onHide, fetchKriteria, ...props }) => {
 
  const handleDelete = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await deleteKriteria(id,token);
      if (response.message.includes("violates foreign key constraint")) {
        toast.error("data is still related");
        console.error(response.message)
      } else if (response.message === "Kriteria removed successfully") {
        fetchKriteria(); 
        onHide(); 
        toast.success(response.message);
      } 
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


