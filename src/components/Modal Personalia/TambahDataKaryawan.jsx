import {useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { toast } from 'react-toastify'; 
import { addKaryawan } from "../../services/apipersonalia";

const TambahDataKaryawan = (props) => {
  const [dataKaryawan, setDataKaryawan] = useState({
    id: '',
    nip: '',
    nama: '',
    jenis_kelamin: true, 
    posisi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataKaryawan(prevState => ({
      ...prevState,
      [name]: name === 'jenis_kelamin' ? value === 'Pria' : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addKaryawan(dataKaryawan); 
      if (response.status === "OK") {
        toast.success("Kriteria berhasil ditambahkan!"); 
        props.onHide(); 
      } else {
        toast.error(response.message || "Terjadi kesalahan saat menambahkan kriteria."); 
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat menambahkan kriteria."); 
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
          Tambah Karyawan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="id">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={dataKaryawan.id}
              onChange={handleChange}
              className="form-modal-admin"
              placeholder="id"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nip">
            <Form.Label>Nip</Form.Label>
            <Form.Control
              type="text"
              name="nip"
              value={dataKaryawan.nip}
              onChange={handleChange}
              className="form-modal-admin"
              placeholder="nip"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              name="nama"
              value={dataKaryawan.nama}
              onChange={handleChange}
              className="form-modal-admin"
              placeholder="nama"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jenis_kelamin">
            <Form.Label>Jenis Kelamin</Form.Label>
            <Form.Select
              className="form-modal-admin"
              name="jenis_kelamin"
              value={dataKaryawan.jenis_kelamin ? 'Pria' : 'Wanita'}
              onChange={handleChange}
            >
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="posisi">
            <Form.Label>Posisi</Form.Label>
            <Form.Select
              className="form-modal-admin"
              name="posisi"
              value={dataKaryawan.posisi}
              onChange={handleChange}
            >
              <option value="">Pilih Posisi</option>
              <option value="karyawan_biasa">Karyawan Biasa</option>
              <option value="personalia">Personalia</option>
              <option value="manager">Manager</option>
            </Form.Select>
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

export default TambahDataKaryawan;

