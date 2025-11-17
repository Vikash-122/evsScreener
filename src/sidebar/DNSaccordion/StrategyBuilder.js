import { useState } from "react";
import PopUp from "../PopUp";


export default function StrategyBuilder() {
      const [selectedOption, setSelectedOption] = useState("");
      const options = ["Option 1", "Option 2", "Option 3"];

    return (
        <div>
            <div className="form-section" style={{width: "50%", margin: "10px", justifySelf: "center"}}>
                <div className="form-row">
                    <label >Strategy Type</label>
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

                    <label >Ticker</label>
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
            <PopUp title = "View Code"></PopUp>
            </div>
        </div>
    );
}