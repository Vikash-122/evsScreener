import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App({title}) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="text-center" style={{width: "180px"}}>
      <button
        className="btn"
        style={{
          backgroundColor: "#6f42c1", // Bootstrap purple
          color: "#fff",
          borderRadius: "8px",
          padding: "10px 20px"
        }}
        onClick={handleShow}
      >
        {title}
      </button>

      {show && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "12px",
                backgroundColor: "#f8f9fa"
              }}
            >
              <div
                className="modal-header"
                style={{ backgroundColor: "#6f42c1", color: "#fff" }}
              >
                <h5 className="modal-title">Evalueserve</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>Welcome to EVS Screener home page!</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#6f42c1",
                    color: "#fff",
                    borderRadius: "6px"
                  }}
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;