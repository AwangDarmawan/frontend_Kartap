
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import "../../styles/Personalia/TambahDataKaryawan.css";
// import React, { useState, useEffect } from 'react';
// import { getDiangkatById, ValidasiManager } from "../../services/apimanager";
// import { toast } from "react-toastify";

// const Disetujui = (props) => {
//   const [disetujui, setdisetujui] = useState({
//     id: '',
//     validasi_manager: true,
//     keterangan :""
//   });

//   useEffect(() => {
//     if (props.id) {
//       getDiangkatById(props.id)
//         .then(data => {
//           if (data.status === "OK") {
//             setdisetujui(data.data);
//           }
//         })
//         .catch(error => {
//           console.error("There was an error fetching the data!", error);
//         });
//     }
//   }, [props.id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setdisetujui(prevState => ({
//       ...prevState,
//       [name]: name === 'validasi_manager' ? value === 'disetujui' : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     ValidasiManager(disetujui.id, disetujui)
//       .then(response => {
//         if (response.status === "OK") {
//           toast.success(response.message);
//           props.onHide();  
//         }
//       })
//       .catch(error => {
//         console.error("There was an error updating the data!", error);
//         toast.error(error.response.data.message);
//       });
//   };
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="modal-form-wrapper"
//     >
//       <Modal.Header
//         closeButton
//         className="modal-header-admin flex-column-reverse"
//       >
//         <Modal.Title id="contained-modal-title-vcenter" className="text-center">
//           di setujui
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="modal-body-admin">
//         <Form onSubmit={handleSubmit}> 
        
          
//           <Form.Group className="mb-3" controlId="validasi_manager">
//             <Form.Label>Keputusan</Form.Label>
//             <Form.Select
//               className="form-modal-admin"
//               name="validasi_manager"
//               value={disetujui.validasi_manager ? "disetujui" : "ditolak"}
//               onChange={handleChange}
//             >
//               <option value="disetujui">Disetujui</option>
//               <option value="ditolak">Ditolak</option>
//               </Form.Select>
              
            
//           </Form.Group>
//         <Form.Group className="mb-3" controlId="keterangan">
//             <Form.Label>keterangan</Form.Label>
//               <Form.Control
//               type="text"
//               className="form-modal-admin"
//               name="keterangan"
//               value={disetujui.keterangan}
//               onChange={handleChange}
              
//             />
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

// export default Disetujui;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/Personalia/TambahDataKaryawan.css";
import React, { useState, useEffect } from 'react';
import { getDiangkatById, ValidasiManager } from "../../services/apimanager";
import { toast } from "react-toastify";

const Disetujui = (props) => {
  // State untuk menyimpan data disetujui
  const [disetujui, setdisetujui] = useState({
    id: '',
    validasi_manager: true, // Default validasi_manager adalah true
    keterangan: ""
  });

  // Mengambil data berdasarkan ID yang diterima dari props
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

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdisetujui(prevState => ({
      ...prevState,
      [name]: name === 'validasi_manager' ? value === 'disetujui' : value
    }));
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    ValidasiManager(disetujui.id, disetujui)
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
      <Modal.Header closeButton className="modal-header-admin flex-column-reverse">
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          lakukan Validasi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}> 
          <Form.Group className="mb-3" controlId="validasi_manager">
            <Form.Label>Keputusan</Form.Label>
            <Form.Select
              className="form-modal-admin"
              name="validasi_manager"
              value={disetujui.validasi_manager ? "disetujui" : "ditolak"}
              onChange={handleChange}
            >
              <option value="disetujui">Disetujui</option>
              <option value="ditolak">Ditolak</option>
            </Form.Select>
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
          <div className="d-flex justify-content-end">
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

export default Disetujui;
