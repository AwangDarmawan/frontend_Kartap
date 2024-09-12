
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import {getallEvaluasiById} from "../../services/apipersonalia";

const LihatEvaluasi = (props) => {
  const [Evaluasi, setEvaluasi] = useState({
    id: '',
    bobot_kriteria: '',
    bobot_subkriteria: '',
    hasil_evaluasi_faktor: '',
  });

  useEffect(() => {
    if (props.id) {
      console.log("Evaluasi for ID:", props.id);
        getallEvaluasiById(props.id)
        .then(data => {
          if (data.status === "OK") {
            setEvaluasi(data.data);
          }
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [props.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvaluasi(prevState => ({
      ...prevState,
      [name]: value
    }));
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
          Lihat Evaluasi 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>ID </Form.Label>
            <Form.Control
              type="text"
              name="id"
              className="form-modal-admin"
              value={Evaluasi.id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bobot_kriteria">
            <Form.Label>Bobot Kriteria</Form.Label>
            <Form.Control
              type="text"
              name="bobot_kriteria"
              value={Evaluasi.bobot_kriteria}
              className="form-modal-admin"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bobot_subkriteria">
            <Form.Label>Bobot Kriteria</Form.Label>
            <Form.Control
              type="text"
              name="bobot_subkriteria"
              value={Evaluasi.bobot_subkriteria}
              className="form-modal-admin"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Evaluasi_faktor">
            <Form.Label>Evaluasi Faktor</Form.Label>
            <Form.Control
              type="text"
              name="Evaluasi_faktor"
              value={Evaluasi.hasil_evaluasi_faktor}
              className="form-modal-admin"
              onChange={handleChange}
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

export default LihatEvaluasi;

