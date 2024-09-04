import "../../styles/Personalia/CardPersonalia.css";
import fiAdmin from "../../assets/icon-card-admin.svg";

const CardPersonalia = () => {
  
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 py-3 g-2 card-dashboard">
          <div className="col">
            <div
              className="card card-users d-flex justify-content-center align-items-center"
              style={{ "maxWidth": "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">10</p>
                  <span className="title"> Karyawan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-users d-flex justify-content-center align-items-center"
              style={{ "maxWidth": "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">10</p>
                  <span className="title">Kriteria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-active d-flex justify-content-center align-items-center"
              style={{ "maxwidth": "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">5</p>
                  <span className="title"> Perhitungan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPersonalia;
