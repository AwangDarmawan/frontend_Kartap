import CardPersonalia from "../../components/Personalia/CardPersonalia";
import NavPersonalia from "../../components/Personalia/NavPersonalia";
import SidebarPersonalia from "../../components/Personalia/SidebarPersonalia";
import TablePerhitungan from "../../components/Personalia/TablePerhitungan";

import "../../styles/Personalia/Personalia.css"

const DataPerhitungan = () => {
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
                    <TablePerhitungan/>
                </div>
            </div>
        </div>
    </>
  )
}

export default DataPerhitungan;