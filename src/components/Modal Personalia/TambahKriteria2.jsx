import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { addSubKriteria } from '../../services/apipersonalia'; 
import React, { useState } from 'react';
import { toast } from 'react-toastify'; 

const TambahKriteria2 = (props) => {
  const [subkriteria, setSubKriteria] = useState({
    kriteria:'',
    nama_subkriteria: '',
    bobot_subkriteria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubKriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addSubKriteria(subkriteria);
      if (response.status === "OK") {
        toast.success("Kriteria berhasil ditambahkan!"); 
        props.onHide(); 
      } else {
        toast.error(response.message || "Terjadi kesalahan saat menambahkan subkriteria."); 
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat menambahkan subkriteria."); 
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
          Tambah Kriteria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="namaSubKriteria">
            <Form.Label>ID Kriteria</Form.Label>
            <Form.Control
              type="text"
              name="kriteria"
              value={subkriteria.kriteria}
              onChange={handleChange}
              placeholder="3"
              className="form-modal-admin"
            />
          </Form.Group>
        <Form.Group className="mb-3" controlId="id">
            <Form.Label>ID SubKriteria</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={subkriteria.id}
              placeholder="4"
              className="form-modal-admin"
              onChange={handleChange}
            />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="namaSubKriteria">
            <Form.Label>Nama SubKriteria</Form.Label>
            <Form.Control
              type="text"
              name="nama_subkriteria"
              value={subkriteria.nama_subkriteria}
              onChange={handleChange}
              placeholder="Mencapai target"
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bobotSubKriteria">
            <Form.Label>Bobot SubKriteria</Form.Label>
            <Form.Control
              type="number"
              name="bobot_subkriteria"
              value={subkriteria.bobot_subkriteria}
              onChange={handleChange}
              placeholder="5"
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

export default TambahKriteria2;

