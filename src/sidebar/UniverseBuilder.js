import React, { useState } from "react";
import "./UniverseBuilder.css";

const UniverseBuilder = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rebalanceMonth, setRebalanceMonth] = useState("");
  const [referenceMonth, setReferenceMonth] = useState("");
  const [rebalanceWeek, setRebalanceWeek] = useState("1");
  const [referenceWeek, setReferenceWeek] = useState("1");
  const [rebalanceDay, setRebalanceDay] = useState("Monday");
  const [referenceDay, setReferenceDay] = useState("Monday");
  const [importMethod, setImportMethod] = useState("excel");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleGenerateSchedule = () => alert("Schedule Generated!");
  const handleUploadUniverse = () =>
    alert(`Universe Uploaded: ${file ? file.name : "No file selected"}`);

  return (
    <div className="universe-container">
      <h1 className="page-title">Universe Selection</h1>

      {/* Section 1 */}
      <div className="uv-card">
        <h2 className="section-title">Generate Rebalance Schedule</h2>
        <p className="section-subtitle">Select Frequency Parameters</p>

        <div className="grid">
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Rebalance Months</label>
            <select value={rebalanceMonth} onChange={(e) => setRebalanceMonth(e.target.value)}>
              <option value="">Choose an option</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className="form-group">
            <label>Reference Months</label>
            <select value={referenceMonth} onChange={(e) => setReferenceMonth(e.target.value)}>
              <option value="">Choose an option</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className="form-group">
            <label>Rebalance Recurrence: Week Of Month</label>
            <input type="number" value={rebalanceWeek} onChange={(e) => setRebalanceWeek(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Reference Recurrence: Week Of Month</label>
            <input type="number" value={referenceWeek} onChange={(e) => setReferenceWeek(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Rebalance Recurrence: Weekday</label>
            <select value={rebalanceDay} onChange={(e) => setRebalanceDay(e.target.value)}>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thrusday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          <div className="form-group">
            <label>Reference Recurrence: Weekday</label>
            <select value={referenceDay} onChange={(e) => setReferenceDay(e.target.value)}>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thrusday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
        </div>

        <button className="primary-btn" onClick={handleGenerateSchedule}>
          Generate Schedule
        </button>
      </div>

      {/* Section 2 */}
      <div className="uv-card">
        <h2 className="section-title">Select Universe</h2>
        <p className="section-subtitle">Import Constituents</p>

        <div className="form-group">
          <label>Choose Data Import Method</label>
          <div className="radio-group">
            <label>
              <input type="radio" value="excel" checked={importMethod === "excel"} onChange={(e) => setImportMethod(e.target.value)} />
              Upload Excel File
            </label>
            <label>
              <input type="radio" value="index" checked={importMethod === "index"} onChange={(e) => setImportMethod(e.target.value)} />
              Select Existing Index
            </label>
            <label>
              <input type="radio" value="build" checked={importMethod === "build"} onChange={(e) => setImportMethod(e.target.value)} />
              Build Universe
            </label>
          </div>
        </div>

        <div className="upload-box">
          <p>Drag and drop file here (Limit 200MB per file)</p>
          <input type="file" onChange={handleFileChange} />
        </div>

        <button className="secondary-btn" onClick={handleUploadUniverse}>
          Upload Universe
        </button>
      </div>
    </div>
  );
};

export default UniverseBuilder;