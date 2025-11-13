
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ScheduleForm.css";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const monthsOptions = [
  { value: "Jan", label: "January" },
  { value: "Feb", label: "February" },
  { value: "Mar", label: "March" },
  { value: "Apr", label: "April" },
];

export default function ScheduleForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rebalanceType, setRebalanceType] = useState("adhoc");
  const multiSelectStyles = {
  valueContainer: (base) => ({
    ...base,
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    maxHeight: "36px",
  }),
  multiValue: (base) => ({
    ...base,
    flex: "0 0 auto",
  }),
};

  return (
    <div className="schedule-container">
      <h2>Create Schedule</h2>
      <div className="schedule-grid">
        {/* Left Column */}
        <div className="form-section">
          <div className="form-row">
            <label>Select Underlying Strategy</label>
            <Select options={options} />
          </div>

          <div className="form-row">
            <label>Sub Category</label>
            <Select options={options} />
          </div>

          <div className="form-row">
            <label>CA</label>
            <Select options={options} isMulti className="multi-select" styles={multiSelectStyles}/>
          </div>

          <div className="form-row">
            <label>Calculation Calendar</label>
            <Select options={options} isMulti className="multi-select" styles={multiSelectStyles}/>
          </div>

          <div className="form-row">
            <label>Trading Calendar</label>
            <Select options={options} isMulti className="multi-select" styles={multiSelectStyles}/>
          </div>
        </div>

        {/* Right Column */}
        <div className="form-section">
          <div className="form-row">
            <label>Rebalance Frequency</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="adhoc"
                  checked={rebalanceType === "adhoc"}
                  onChange={(e) => setRebalanceType(e.target.value)}
                />
                Ad-hoc
              </label>
              <label>
                <input
                  type="radio"
                  value="schedule"
                  checked={rebalanceType === "schedule"}
                  onChange={(e) => setRebalanceType(e.target.value)}
                />
                Create Schedule
              </label>
            </div>
          </div>

          {rebalanceType === "schedule" && (
            <>
              <div className="form-row">
                <label>Start Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>

              <div className="form-row">
                <label>End Date</label>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
              </div>

              <div className="form-row">
                <label>Rebalance Months</label>
                <Select options={monthsOptions} />
              </div>

              <div className="form-row">
                <label>Recurrence: Week of Month</label>
                <Select options={options} />
              </div>

              <div className="form-row">
                <label>Recurrence: Weekday</label>
                <Select options={options} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
