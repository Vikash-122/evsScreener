import { useState } from "react";

const options = ["Dividend", "Spin-off", "Split", "Rights Issue", "M & A"];

export default function CorporateActions(){
      const [selectedOption, setSelectedOption] = useState(options[0]);
    
    return (
        <div className="radio-row">
        {options.map((option) => (
          <label key={option} className={`radio-box ${selectedOption === option ? "active" : ""}`}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </label>
        ))}
      </div>

    );
}