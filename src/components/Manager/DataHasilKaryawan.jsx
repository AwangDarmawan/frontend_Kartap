import NavManager from "./NavManager";
import SidebarManager from "./SidebarManager";
import TableHasil from "./TableHasil";

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