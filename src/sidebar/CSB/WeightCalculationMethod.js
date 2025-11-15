import React from "react";

const WeightCalculationMethod = () => {
  const methods = ["Market Cap", "Equal", "Price"];

  return (
    <div className="csb-card">
      <h4>Weight Calculation Method</h4>
      <div className="radio-group">
        {methods.map((item, index) => (
          <label key={index}>
            <input type="radio" name="weightMethod" /> {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default WeightCalculationMethod;