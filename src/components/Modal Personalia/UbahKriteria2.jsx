
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { fetchSubKriteriaById,updateSubKriteria } from "../../services/apipersonalia";
import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
const UbahKriteria2 = (props) => {
 
  const [SubKriteria, setSubKriteria] = useState({
    id: '',
    kriteria: '',
    nama_subkriteria:'',
    bobot_subkriteria: '',
  });

  useEffect(() => {
    if (props.id) {
      fetchSubKriteriaById(props.id)
        .then(data => {
          if (data.status === "OK") {
            setSubKriteria(data.data);
          }
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [props.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubKriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubKriteria(SubKriteria.id, SubKriteria)
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
          Ubah SubKriteria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>ID Subkriteria</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={SubKriteria.id}
              className="form-modal-admin"
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="kriteria">
            <Form.Label>ID Kriteria</Form.Label>
            <Form.Control
              type="text"
               name="kriteria"
              value={SubKriteria.kriteria}
              onChange={handleChange}
              className="form-modal-admin"
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nama_subkriteria">
            <Form.Label>Nama SubKriteria</Form.Label>
            <Form.Control
              type="text"
              name="nama_subkriteria"
              value={SubKriteria.nama_subkriteria}
              onChange={handleChange}
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bobot_subkriteria">
            <Form.Label>bobot SubKriteria</Form.Label>
            <Form.Control
              type="text"
              name="bobot_subkriteria"
              value={SubKriteria.bobot_subkriteria}
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

export default UbahKriteria2;

