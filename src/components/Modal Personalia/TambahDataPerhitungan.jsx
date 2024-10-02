

import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion"; // Import Accordion
import "../../styles/Personalia/TambahDataKaryawan.css";
import { addperhitungan, getallKriteria, getallSubKriteria, getKaryawan, getallEvaluasi } from "../../services/apipersonalia";
import { toast } from 'react-toastify';

const TambahDataPerhitungan = (props) => {
  const [karyawanOptions, setKaryawanOptions] = useState([]);
  const [selectedKaryawan, setSelectedKaryawan] = useState(''); // State untuk menyimpan karyawan yang dipilih
  const [kriteriaOptions, setKriteriaOptions] = useState([]);
  const [subkriteriaOptions, setSubkriteriaOptions] = useState([]);
  const [evaluasiOptions, setEvaluasiOptions] = useState([]);
  const [perhitunganList, setPerhitunganList] = useState([{ kriteria: '', hasil_evaluasi_faktor: '' }]); // Karyawan dihapus dari list

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newPerhitunganList = [...perhitunganList];
    newPerhitunganList[index][name] = value;
    setPerhitunganList(newPerhitunganList);
  };

  const fetchkaryawan = async () => {
    try {
      const result = await getKaryawan();
      setKaryawanOptions(result);
      const kri = await getallKriteria();
      setKriteriaOptions(kri.data);
      const data = await getallSubKriteria();
      setSubkriteriaOptions(data);
      const eva = await getallEvaluasi();
      setEvaluasiOptions(eva.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchkaryawan();
  }, []);

  const getSubkriteriaName = (subkriteriaId) => {
    const subkriteriaItem = subkriteriaOptions.find(s => s.id === subkriteriaId);
    return subkriteriaItem ? subkriteriaItem.nama_subkriteria : "Nama tidak ditemukan";
  };

  const handleAddPerhitungan = () => {
    setPerhitunganList([...perhitunganList, { kriteria: '', hasil_evaluasi_faktor: '' }]);
  };

  const handleRemovePerhitungan = (index) => {
    const newPerhitunganList = perhitunganList.filter((_, i) => i !== index);
    setPerhitunganList(newPerhitunganList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      for (const perhitungan of perhitunganList) {
        const response = await addperhitungan({ ...perhitungan, karyawan: selectedKaryawan }, token); // Tambahkan ID karyawan ke perhitungan
        if (response.status !== "OK") {
          throw new Error(response.message || "Terjadi kesalahan saat menambahkan data perhitungan.");
        }
      }
      toast.success("Semua kriteria berhasil ditambahkan!");
      window.location.reload();
      props.onHide();
    } catch (error) {
      toast.error(error.message || "Kriteria tidak bisa ditambahkan.");
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
      <Modal.Header closeButton className="modal-header-admin flex-column-reverse">
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Tambah Perhitungan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="selectedKaryawan">
            <Form.Label>Pilih Karyawan</Form.Label>
            <Form.Control
              as="select"
              className="form-modal-admin mb-1"
              value={selectedKaryawan}
              onChange={(e) => setSelectedKaryawan(e.target.value)} // Update ID karyawan yang dipilih
            >
              <option value="">Pilih Karyawan</option>
              {karyawanOptions.map(karyawan => (
                <option key={karyawan.id} value={karyawan.id}>
                  {karyawan.nama}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Accordion>
            {perhitunganList.map((perhitungan, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <div className="d-flex justify-content-between">
                    <span>Kriteria {index + 1}</span>
                    <Button variant="danger" size="sm" className='ms-3' onClick={() => handleRemovePerhitungan(index)}>Hapus</Button>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form.Group controlId={`kriteria-${index}`}>
                    <Form.Label>ID Kriteria</Form.Label>
                    <Form.Control
                      as="select"
                      className="form-modal-admin"
                      name="kriteria"
                      value={perhitungan.kriteria}
                      onChange={(e) => handleChange(index, e)}
                    >
                      <option value="">Pilih Kriteria</option>
                      {kriteriaOptions.map(kriteria => (
                        <option key={kriteria.id} value={kriteria.id}>
                          {kriteria.nama_kriteria}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId={`hasil_evaluasi_faktor-${index}`}>
                    <Form.Label>Evaluasi Faktor</Form.Label>
                    <Form.Control
                      as="select"
                      className="form-modal-admin"
                      name="hasil_evaluasi_faktor"
                      value={perhitungan.hasil_evaluasi_faktor}
                      onChange={(e) => handleChange(index, e)}
                    >
                      <option value="">Pilih Evaluasi</option>
                      {evaluasiOptions.map(hasil_evaluasi_faktor => (
                        <option key={hasil_evaluasi_faktor.id} value={hasil_evaluasi_faktor.id}>
                          {`${getSubkriteriaName(hasil_evaluasi_faktor.bobot_subkriteria)} | ${hasil_evaluasi_faktor.hasil_evaluasi_faktor}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <Button className="btn-add mt-1" variant="secondary" onClick={handleAddPerhitungan}>
            Tambah Kriteria
          </Button>
          <div className='d-flex gap mt-2'>
            <Button className="btn-upload" variant="secondary" onClick={props.onHide}>
              Batal
            </Button>
            <Button className="btn-simpan" variant="primary" type="submit">
              Simpan
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-admin"></Modal.Footer>
    </Modal>
  );
};

export default TambahDataPerhitungan;
