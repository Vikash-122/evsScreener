import React from "react";

const StockSelectionParameters = () => {
  const criteria = [
    "Country of Listing",
    "Country of Domicile",
    "ADVT 1M",
    "ADVT 3M",
    "MDVT 1M",
    "MDVT 3M",
    "MDVT 6M",
  ];

  return (
    <div className="csb-card">
      <h4>Stock Screening Criteria</h4>
      <div className="checkbox-group">
        {criteria.map((item, index) => (
          <label key={index}>
            <input type="checkbox" /> {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default StockSelectionParameters;