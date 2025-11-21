import { useState } from "react";

export default function WeightsOptimization(){
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Equal weight", "FM weight", "Mcap","Factor weighted"];
  const options2=["Min tracking error","Variance"]

  return (
    <div className="schedule-container">
      <div className="schedule-grid">
        {/* Left Column */}
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="custom-dropdown">Weights Calculation</label>
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

          <div className="form-row">
            <label htmlFor="custom-dropdown">Optimization Technique</label>
            <select
              id="custom-dropdown"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-dropdown"
            >
              <option value="" disabled>
                -- Select an option --
              </option>
              {options2.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
    </div>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", alignItems: "center", gap: "10px", marginTop: "10px"}} >
      <label>Stock Cap</label>
      <input type="text" style={{width: "80px"}} />
      <label>Sector Cap</label>
      <input type="text" style={{width: "80px"}} />
      <label>Region Cap</label>
      <input type="text" style={{width: "80px"}} />
      <label>Stick Floor</label>
      <input type="text" style={{width: "80px"}} />
      <label>Country Cap</label>
      <input type="text" style={{width: "80px"}} />
      <label>Buffer Rule</label>
      <input type="text" style={{width: "80px"}} />
    </div>
    </div>
);
}