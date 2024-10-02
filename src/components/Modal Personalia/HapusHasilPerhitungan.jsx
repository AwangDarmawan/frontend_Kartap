
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { deleteperangkingan } from "../../services/apipersonalia";
import { toast } from "react-toastify";

const HapusHasilPerhitungan = ({id, onHide, fetchrangking, ...props}) => {
  const handleDelete = async () => {
    const token = localStorage.getItem('authToken');
    try {
      await deleteperangkingan(id,token);
      fetchrangking(); 
      onHide(); 
      toast.success("Hasil Di Hapus");
    } catch (error) {
      toast.error("Error removing Hasil");
      console.error("Error deleting hasil:", error);
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
          Hapus Hasil Perhitungan
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

export default HapusHasilPerhitungan;

