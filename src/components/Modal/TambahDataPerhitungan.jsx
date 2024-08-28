
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";

const TambahDataPerhitungan = (props) => {
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
          Tambah Perhitungan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form>
          <Form.Group className="mb-3" controlId="namaKelas">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              placeholder="Alya"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jenisKelamin">
            <Form.Label>Jenis Kelamin</Form.Label>
            <Form.Select className="form-modal-admin">
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Wanita">Wanita</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="posisi">
            <Form.Label>Posisi</Form.Label>
            <Form.Select className="form-modal-admin">
              <option value="">Pilih Posisi</option>
              <option value="Pemasaran"> Staff Pemasaran</option>
              <option value="Keuangan">Staff Keuangan</option>
              <option value="Teknologi Informasi">Staff Logistik</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Kinerja</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Lama Bekerja</Form.Label>
            <Form.Control
              type="text"
              placeholder=" 3 bulan"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Kehadiran</Form.Label>
            <Form.Control
              type="text"
              placeholder="100%"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Pengalaman Kerja</Form.Label>
            <Form.Control
              type="text"
              placeholder="Experiences"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Usia</Form.Label>
            <Form.Control
              type="text"
              placeholder="25 tahun"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaKaryawan">
            <Form.Label>Pendidikan</Form.Label>
            <Form.Control
              type="text"
              placeholder="SMA"
              autoFocus
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

export default TambahDataPerhitungan;

