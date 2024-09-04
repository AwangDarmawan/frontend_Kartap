import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { deleteKaryawan } from "../../services/apipersonalia"; 
import { toast } from "react-toastify";

const HapusKaryawan = ({ id, onHide, fetchData, ...props }) => {
 

  const handleDelete = async () => {
    try {
      await deleteKaryawan(id);
      fetchData(); 
      onHide(); 
      toast.success("Karyawan removed successfully");
    } catch (error) {
      toast.error("Error removing karyawan");
      console.error("Error deleting karyawan:", error);
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
          Hapus Karyawan
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


