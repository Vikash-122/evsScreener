import { useState } from "react";
import PopUp from "../PopUp";

import React from "react";



export default function StrategyBuilder() {
  const [selectedOption, setSelectedOption] = useState("");
  const [factorIndex, setFactorIndex] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  const [activeIndex, setActiveIndex] = useState(null);
  const [showPopup, setPopup] = useState(false);
  const boxLabels = [
    "Factor Index",
    "Thematic",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const handleClick = (label, index) => {
    alert(`Box ${index + 1}: ${label || "Empty"} clicked`);
  };

  return (
    <div>


     <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  }}
>
  {boxLabels.map((label, index) => (
    <div
      key={index}
      style={{
        height: "40px",
        backgroundColor: activeIndex === index ? "#d0d0d0" : "#f0f0f0",
        border: "1px dashed #ccc",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        transition: "background-color 0.3s ease",
      }}
      onClick={() =>
        { setActiveIndex(index);
          setFactorIndex(true);
        }}
    >
      {label}
    </div>
  ))}
</div>

      <div
        className="form-section"
        style={{ width: "50%", margin: "10px" }}
      >
        <div className="form-row">
          <label>Strategy Type</label>
          <select
            // id="custom-dropdown"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="custom-dropdown"
          >
            <option value="" disabled>
              -- Select an option --
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label>Reference to Existing Ticker</label>
          <select
            id="custom-dropdown"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="custom-dropdown"
          >
            <option value="" disabled>
              -- Select an option --
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div
        style={{
          marginTop: "10px",
          justifyContent: "center",
          display: "flex",
          gap: "120px",
        }}
      >
        <button
          type="button"
          className="primary-btn"
          style={{ height: "35px", padding: "4px 10px" }}
          onClick={() => setPopup(true)}
        >
          View Code
        </button>

        <button
          type="button"
          className="primary-btn"
          style={{ height: "35px", padding: "4px 10px" }}

        >
          Save
        </button>
      </div>

      {(showPopup && factorIndex) && (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              zIndex: 1000,
              width: "100%",
              maxWidth: "800px",
              textAlign: "center",
              maxHeight: "70vh"
              
            }}
          >

            {/* Section 1: Multi-select checkboxes in 4x2 grid */}
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>Factor Selection</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                }}
              >
                {["Value", "Quality", "Momentum", "Low Vol", "Size", "Growth", "Dividend Yield", "ABC"].map((factor, index) => (
                  <label
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      backgroundColor: "#f9f9f9",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  >
                    <input type="checkbox" /> {factor}
                  </label>
                ))}
              </div>
            </div>

            {/* Section 2: Constraints in 2x2 grid */}
            <div>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>Constraints</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px",
                }}
              >
                <label style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                  Target Selection:
                  <input type="text" style={{ marginTop: "6px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                  Buffer Selection:
                  <input type="text" style={{ marginTop: "6px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                  Region Cap:
                  <input type="text" style={{ marginTop: "6px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                  Sector Cap:
                  <input type="text" style={{ marginTop: "6px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                </label>
              </div>
            </div>

            {/* Close Button */}
            <button
              style={{
                marginTop: "20px",
                padding: "2px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                height:"30px"
              }}
              onClick={() =>{
                 setPopup(false);
                  setFactorIndex(false);
                }
              }
            >
              Close
            </button>
          </div>

          {/* Overlay */}
          <div
            onClick={() => setPopup(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 999,
            }}
          ></div>
        </>
      )}
    </div>
  );
}
