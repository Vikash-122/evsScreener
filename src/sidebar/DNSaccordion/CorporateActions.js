import { useState } from "react";

const corporateActions = [
  "Cash Dividend",
  "Stock Dividend",
  "Bonus Issue",
  "Stock Split",
  "Reverse Stock Split",
  "Rights Issue",
  "Tender Offer",
  "Share Buyback",
  "Merger",
  "Acquisition",
  "Spin-off",
  "Demerger",
  "Exchange Offer",
  "Liquidation",
  "Contingent Value Rights",
  "Dividend Option"
];

export default function CorporateActions(){
      const [selectedOption, setSelectedOption] = useState(corporateActions);
    
    return (
        <div className="radio-row">
        {corporateActions.map((option) => (
          <label key={option} className={`radio-box ${selectedOption.includes(option) ? "active" : ""}`}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => {
                if(selectedOption.includes(option))
                  setSelectedOption(selectedOption.filter((item) => item !== option))
                else
                  setSelectedOption([...selectedOption, option])
              }
            }
            />
            {option}
          </label>
        ))}
      </div>

    );
}