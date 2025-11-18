import ExcelTransposeTable from "../ExcelTransposeTable";
import CorporateActions from "./CorporateActions";
import { useState } from "react";
import PopUp from "../PopUp";

const sampleTransData = [
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
  { Currency: "", Static: "", Action: "" },
];
const options = ["Option 1", "Option 2", "Option 3"];
const options1 = ["Option 1", "Option 2", "Option 3"];
const options2 = ["Option 1", "Option 2", "Option 3"];
const options3 = ["Option 1", "Option 2", "Option 3"];

export default function Parameters() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  return (
    <div className="section5">
      <div
        style={{
          marginBottom: "15px",
          border: "2px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <div className="param-grid">
          <div className="row">
            <label>Base Level:</label>
            <input type="text" placeholder="Base Level" />
            <label>Calc Holiday Calender:</label>
            <input type="date" />
          </div>
          <div className="row">
            <label>Index Currency:</label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-dropdown"
            >
              <option value="" disabled>
                Select an option
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label>Trading Holiday Calender:</label>
            <input type="date" />
          </div>
          <div className="row">
            <label>Transaction Cost:</label>
            <input type="text" placeholder="TX cost" />
            <label>Base Date:</label>
            <input type="text" placeholder="Base Date" />
          </div>
        </div>
      </div>
      <div
        style={{
          marginBottom: "15px",
          border: "2px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h6>Rebalance Schedule: </h6>
        <div className="param-grid">
          <div className="long-1-row">
            <label>Rebalance Months</label>
            <select
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
              className="custom-dropdown"
            >
              <option value="" disabled>
                Select an option
              </option>
              {options1.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div className="long-1-row">
            <label>Rebalance: Week of Month</label>
<select
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
              className="custom-dropdown"
            >
              <option value="" disabled>
                Select an option
              </option>
              {options2.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label>End Date</label>
            <input type="date" />
          </div>
          <div className="long-1-row">
            <label>Rebalance: Weekday</label>
            <select
              value={selectedOption3}
              onChange={(e) => setSelectedOption3(e.target.value)}
              className="custom-dropdown"
            >
              <option value="" disabled>
                Select an option
              </option>
              {options3.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <PopUp title="View Schedule"></PopUp>
      </div>
      <div
        style={{
          marginBottom: "15px",
          border: "2px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h6>Select Applicable Corporate Actions:</h6>
        <CorporateActions></CorporateActions>
      </div>
      <div
        style={{
          marginBottom: "15px",
          border: "2px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <ExcelTransposeTable data={sampleTransData} />
        <button className="btn" style={{ width: "150px", marginTop: "10px" }}>
          Edit and Update
        </button>
      </div>
    </div>
  );
}