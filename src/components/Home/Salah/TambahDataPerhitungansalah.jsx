
// import React, { useState, useEffect } from 'react';
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import "../../styles/Personalia/TambahDataKaryawan.css";
// import {  addperhitungan, getallKriteria, getallSubKriteria,
//   getKaryawan,getallEvaluasi } from "../../services/apipersonalia";
// import { toast } from 'react-toastify';

// const TambahDataPerhitungan = (props) => {
//   const [karyawanOptions, setKaryawanOptions] = useState([]);
//   const [kriteriaOptions, setKriteriaOptions] = useState([]);
//   const [subkriteriaOptions, setSubkriteriaOptions] = useState([]);
//   const [evaluasiOptions, setEvaluasiOptions] = useState([]);
//   const [perhitungan, setPerhitungan] = useState({
//     karyawan:'',
//     kriteria: '',
//     // subkriteria: '',
//     hasil_evaluasi_faktor:''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPerhitungan(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const fetchkaryawan = async () => {
//     try {
//       const result = await getKaryawan();
//       setKaryawanOptions(result);
//     } catch (error) {
//       console.error("Error fetching perhitungan:", error);
//     }
//   };

//   const fetchKriteria = async () => {
//     try {
//       const result = await getallKriteria();
//       setKriteriaOptions(result.data);
//     } catch (error) {
//       console.error("Error fetching kriteria:", error);
//     }
//   };

//   const fetchSubkriteria = async () => {
//     try {
//       const data = await getallSubKriteria();
//       setSubkriteriaOptions(data);
//     } catch (error) {
//       console.error("Error fetching subkriteria:", error);
//     }
//   };

//   const fetchEvaluasi = async () => {
//     try {
//       const result = await getallEvaluasi();
//       setEvaluasiOptions(result.data);
//     } catch (error) {
//       console.error("Error fetching subkriteria:", error);
//     }
//   };

//   useEffect(() => {
//     fetchkaryawan();
//     fetchKriteria();
//     fetchSubkriteria();
//     fetchEvaluasi();
//   }, []);
//   // manggil nama subktiteria
//   const getSubkriteriaName = (subkriteriaId) => {
//     const subkriteriaItem = subkriteriaOptions.find(s => s.id === subkriteriaId);
//     return subkriteriaItem ? subkriteriaItem.nama_subkriteria : "Nama tidak ditemukan";
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('authToken'); 
//     try {
//       console.log("Data being sent:", perhitungan, token);
//       const response = await addperhitungan(perhitungan,token);
//       if (response.status === "OK") {
//         toast.success("Kriteria berhasil ditambahkan!"); 
//         window.location.reload()
//         props.onHide(); 
//       } else {
//         toast.error(response.message || "Terjadi kesalahan saat menambahkan data perhitungan."); 
//       }
//     } catch (error) {
//       toast.error("Kriteria tidak bisa di tambahkan kembali"); 
//     }
//   };

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="modal-form-wrapper"
//     >
//       <Modal.Header closeButton className="modal-header-admin flex-column-reverse">
//         <Modal.Title id="contained-modal-title-vcenter" className="text-center">
//           Tambah Perhitungan
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="modal-body-admin">
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="karyawan">
//             <Form.Label>ID Karyawan</Form.Label>
//             <Form.Control
//               as="select"
//               className="form-modal-admin"
//               name="karyawan"
//               value={perhitungan.karyawan}
//               onChange={handleChange}
//             >
//               <option value="">Pilih Karyawan</option>
//               {karyawanOptions.map(karyawan => (
//                 <option key={karyawan.id} value={karyawan.id}>
//                   {karyawan.nama}
//                 </option>
//               ))}
//             </Form.Control>
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="kriteria">
//             <Form.Label>ID Kriteria</Form.Label>
//             <Form.Control
//               as="select"
//               className="form-modal-admin"
//               name="kriteria"
//               value={perhitungan.kriteria}
//               onChange={handleChange}
//             >
//               <option value="">Pilih Kriteria</option>
//               {kriteriaOptions.map(kriteria => (
//                 <option key={kriteria.id} value={kriteria.id}>
//                   {kriteria.nama_kriteria}
//                 </option>
//               ))}
//             </Form.Control>
//           </Form.Group>
//           {/* <Form.Group className="mb-3" controlId="subkriteria">
//             <Form.Label>ID Subkriteria</Form.Label>
//             <Form.Control
//               as="select"
//               className="form-modal-admin"
//               name="subkriteria"
//               value={perhitungan.subkriteria}
//               onChange={handleChange}
//             >
//               <option value="">Pilih Subkriteria</option>
//               {subkriteriaOptions.map(subkriteria => (
//                 <option key={subkriteria.id} value={subkriteria.id}>
//                   {subkriteria.nama_subkriteria}
//                 </option>
//               ))}
//             </Form.Control>
//           </Form.Group> */}
//           <Form.Group className="mb-3" controlId="hasil_evaluasi_faktor">
//             <Form.Label>Evaluasi Faktor</Form.Label>
//             <Form.Control
//               as="select"
//               className="form-modal-admin"
//               name="hasil_evaluasi_faktor"
//               value={perhitungan.hasil_evaluasi_faktor}
//               onChange={handleChange}
//             >
//               <option value="">Pilih Evaluasi</option>
//               {evaluasiOptions.map(hasil_evaluasi_faktor => (
//                 <option key={hasil_evaluasi_faktor.id} value={hasil_evaluasi_faktor.id}>
//                  {/* {hasil_evaluasi_faktor.hasil_evaluasi_faktor}  */}
//                 {`${getSubkriteriaName(hasil_evaluasi_faktor.bobot_subkriteria)} | ${hasil_evaluasi_faktor.hasil_evaluasi_faktor}`}
//                 </option>
//               ))} 
//             </Form.Control>
//           </Form.Group>
//           <Button className="btn-upload" variant="secondary" onClick={props.onHide}>
//             Batal
//           </Button>
//           <Button className="btn-simpan" variant="primary" type="submit">
//             Simpan
//           </Button>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer className="modal-footer-admin"></Modal.Footer>
//     </Modal>
//   );
// };

// export default TambahDataPerhitungan;




