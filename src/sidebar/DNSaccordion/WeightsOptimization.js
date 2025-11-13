import Select from 'react-select';

export default function WeightsOptimization(){
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
            <label>Weights</label>
            <Select options={options} />
          </div>

          <div className="form-row">
            <label>Optimization Tech</label>
            <Select options={options} />
          </div>
    </div>
    </div>
    </div>
);
}