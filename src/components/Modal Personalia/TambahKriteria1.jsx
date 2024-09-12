
import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { addKriteria } from '../../services/apipersonalia'; 
import { toast } from 'react-toastify'; 

const TambahKriteria1 = (props) => {
  const [kriteria, setKriteria] = useState({
    nama_kriteria: '',
    bobot_presentase: '',
    bobot_kriteria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addKriteria(kriteria); 
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
          Tambah Kriteria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}>
           
        <Form.Group className="mb-3" controlId="id">
            <Form.Label>ID Kriteria</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={kriteria.id}
              onChange={handleChange}
              placeholder="1"
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKriteria">
            <Form.Label>Nama Kriteria</Form.Label>
            <Form.Control
              type="text"
              name="nama_kriteria"
              value={kriteria.nama_kriteria}
              onChange={handleChange}
              placeholder="Kinerja"
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bobotPresentase">
            <Form.Label>Bobot Persentase</Form.Label>
            <Form.Control
              type="text"
              name="bobot_presentase"
              value={kriteria.bobot_presentase}
              onChange={handleChange}
              placeholder="20"
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bobotKriteria">
            <Form.Label>Bobot Kriteria</Form.Label>
            <Form.Control
              type="text"
              name="bobot_kriteria"
              value={kriteria.bobot_kriteria}
              onChange={handleChange}
              placeholder="0.2"
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

