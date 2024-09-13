import CardPersonalia from "../../components/Personalia/CardPersonalia";
import NavPersonalia from "../../components/Personalia/NavPersonalia";
import SidebarPersonalia from "../../components/Personalia/SidebarPersonalia";
import TablePerankingan from "../../components/Personalia/TablePerankingan";

import "../../styles/Personalia/Personalia.css"

const Informasi = () => {
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
                <div className="px-5 pt-5">
                    <TablePerankingan/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Informasi;