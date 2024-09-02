import CardPersonalia from "../../components/Personalia/CardPersonalia";
import NavPersonalia from "../../components/Personalia/NavPersonalia";
import SidebarPersonalia from "../../components/Personalia/SidebarPersonalia";
import TableKaryawan from "../../components/Personalia/TableDataKaryawan";

import "../../styles/Personalia/Personalia.css"

const DataKaryawan = () => {
  return (
    <>
        <div className="dashboard-admin-wrapper">
            <div className="admin-header">
                <SidebarPersonalia />
            </div>
            <div className="admin-body">
                <NavPersonalia />
                <div className="px-5 pt-5">
                    <CardPersonalia/>
                </div>
                <div className="p-5">
                    <TableKaryawan/>
                </div>
            </div>
        </div>
    </>
  )
}

export default DataKaryawan;