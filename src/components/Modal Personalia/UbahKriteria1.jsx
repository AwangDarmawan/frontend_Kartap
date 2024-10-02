
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { toast } from "react-toastify";
import {fetchKriteriaById,updateKriteria} from "../../services/apipersonalia";

const UbahKriteria1 = (props) => {
  const [kriteria, setKriteria] = useState({
    id: '',
    nama_kriteria: '',
    bobot_presentase: '',
    bobot_kriteria: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (props.id) {
      fetchKriteriaById(props.id, token)
        .then(data => {
          if (data.status === "OK") {
            setKriteria(data.data);
          }
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [props.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    updateKriteria(kriteria.id, kriteria, token)
      .then(response => {
        if (response.status === "OK") {
          toast.success(response.message);
          props.onHide();  
          
        }
      })
      .catch(error => {
        console.error("There was an error updating the data!", error);
        toast.error(error.response.data.message);
      });
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
          Ubah Kriteria
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
              className="form-modal-admin"
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKriteria">
            <Form.Label>ID Kriteria</Form.Label>
            <Form.Control
              type="text"
              name="nama_kriteria"
              value={kriteria.nama_kriteria}
              onChange={handleChange}
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

export default UbahKriteria1;

