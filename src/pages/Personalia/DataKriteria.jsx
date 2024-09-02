import NavPersonalia from "../../components/Personalia/NavPersonalia";
import SidebarPersonalia from "../../components/Personalia/SidebarPersonalia";
import TableKriteria1 from "../../components/Personalia/TableKriteria1";
import TableKriteria2 from "../../components/Personalia/TableKriteria2";
import "../../styles/Personalia/Personalia.css"

const DataKriteria = () => {
  return (
    <>
        <div className="dashboard-admin-wrapper">
            <div className="admin-header">
                <SidebarPersonalia />
            </div>
            <div className="admin-body overflow-auto" style={{ maxHeight: "600px" }}>
                <NavPersonalia />
                <div className="p-5">
                    <TableKriteria1/>
                </div>
                <div className="p-5" >
                    <TableKriteria2/>
                </div>
            </div>
        </div>
    </>
  )
}

export default DataKriteria;