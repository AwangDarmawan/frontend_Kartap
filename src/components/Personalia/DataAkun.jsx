import CardPersonalia from "./CardPersonalia";
import NavPersonalia from "./NavPersonalia";
import SidebarPersonalia from "./SidebarPersonalia";
import TableAkun from "./TableAkun";

import "../../styles/Personalia/Personalia.css"

const Akun = () => {
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
                    <TableAkun/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Akun;