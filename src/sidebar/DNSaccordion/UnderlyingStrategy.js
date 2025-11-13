import Select from 'react-select'


export default function UnderlyingStrategy() {
    const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
  return (
    <div className="schedule-container">
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
            <label>Calc holiday calender</label>
          </div>
          <div className="form-row">
            <label>Trading holiday calender</label>
          </div>
    </div>
    </div>
    </div>
);
}