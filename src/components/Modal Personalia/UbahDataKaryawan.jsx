import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import { fetchKaryawanById, updateKaryawan } from "../../services/apipersonalia";
import { toast } from "react-toastify";

const UbahDataKaryawan = (props) => {
  const [dataKaryawan, setDataKaryawan] = useState({
    id: '',
    nip: '',
    nama: '',
    jenis_kelamin: true, 
    posisi: ''
  });
  useEffect(() => {
    if (props.id) {
      fetchKaryawanById(props.id)
        .then(data => {
          if (data.status === "OK") {
            setDataKaryawan(data.data);
          }
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [props.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataKaryawan(prevState => ({
      ...prevState,
      [name]: name === 'jenis_kelamin' ? value === 'Pria' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateKaryawan(dataKaryawan.id, dataKaryawan)
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
          Ubah Karyawan
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
              readOnly
              className="form-modal-admin"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nip">
            <Form.Label>Nip</Form.Label>
            <Form.Control
              type="text"
              name="nip"
              value={dataKaryawan.nip}
              readOnly
              className="form-modal-admin"
              disabled
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

export default UbahDataKaryawan;