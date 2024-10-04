


import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import React, { useState, useEffect } from 'react';
import { getDiangkatById, ValidasiManager } from "../../services/apimanager";
import { toast } from "react-toastify";

const Ditolak = (props) => {
  const [disetujui, setdisetujui] = useState({
    id: '',
    validasi_manager: false,
    keterangan: ""
  });

  useEffect(() => {
    if (props.id) {
      getDiangkatById(props.id)
        .then(data => {
          if (data.status === "OK") {
            setdisetujui(data.data);
          }
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [props.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdisetujui(prevState => ({
      ...prevState,
      [name]: name === 'validasi_manager' ? false : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...disetujui,
      validasi_manager: props.decision  
    };
    ValidasiManager(disetujui.id, dataToSubmit)
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
          Ditolak
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}> 
          <Form.Group className="mb-3" controlId="validasi_manager">
            <Form.Label>Keputusan</Form.Label>
            <Form.Control
              type="text"
              className="form-modal-admin"
              value={disetujui.validasi_manager ? "disetujui" : "ditolak"}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="keterangan">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control
              type="text"
              className="form-modal-admin"
              name="keterangan"
              value={disetujui.keterangan}
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

export default Ditolak;
