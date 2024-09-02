import NavManager from "../../components/Manager/NavManager";
import SidebarManager from "../../components/Manager/SidebarManager";
import TableHasil from "../../components/Manager/TableHasil";

import "../../styles/Personalia/Personalia.css"

const DataHasilKaryawan = () => {
  return (
    <>
        <div className="dashboard-admin-wrapper">
            <div className="admin-header">
                <SidebarManager />
            </div>
            <div className="admin-body">
                <NavManager />
                <div className="p-5">
                    <TableHasil/>
                </div>
            </div>
        </div>
    </>
  )
}

export default DataHasilKaryawan;