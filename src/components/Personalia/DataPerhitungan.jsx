import CardPersonalia from "./CardPersonalia";
import NavPersonalia from "./NavPersonalia";
import SidebarPersonalia from "./SidebarPersonalia";
import TablePerhitungan from "./TablePerhitungan";

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