import { useState } from "react";

export default function WeightsOptimization(){
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="schedule-container">
      <div className="schedule-grid">
        {/* Left Column */}
        <div className="form-section">
          <div className="form-row">
            <label htmlFor="custom-dropdown">Weights</label>
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
            <label htmlFor="custom-dropdown">Optimization Tech</label>
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
    </div>
    </div>
);
}