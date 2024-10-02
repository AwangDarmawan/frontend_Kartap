import { useState,useEffect } from "react";
import "../../styles/Personalia/TableAkun.css";

import { getallAkun } from "../../services/apipersonalia";

const TableAkun = () => {
  const [akun, setAkun] = useState([]);

  const fetchAkun = async () => {
    try {
      const result = await getallAkun();
      setAkun(result);
    } catch (error) {
      console.error("Error fetching kriteria:", error);
    }
  };

  useEffect(() => {
    fetchAkun();
  }, []);

  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Data Akun</h3>
          <div className="atribut">
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">NIP</th>
                <th scope="col">Password</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="isi-table">
            {akun.map(item => (
                <tr key={item.id}>
                  <td className="text-kategori">{item.username}</td>
                  <td className="text-kategori">******</td>
                  <td className="text-kategori">{item.role}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
};

export default TableAkun;
