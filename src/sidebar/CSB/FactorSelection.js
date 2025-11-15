import React from "react";

const FactorSelection = () => {
  const factors = ["Value", "Momentum", "Quality", "Volatility"];
  const transformations = [
    "Winsorize: By Value",
    "Winsorize: By Deviation",
    "Z-Score",
    "Average Z-Score",
    "Percentile Score",
    "Quantile Function/Inverse Z-Score",
    "Rank",
  ];
  const final = ["Target Selection", "Buffer Selection"];

  return (
    <div className="csb-card">
      <h4>Factor Selection & Data Transformation</h4>
      <div className="checkbox-group">
        <strong>Select Factors</strong>
        {factors.map((item, index) => (
          <label key={index}>
            <input type="checkbox" /> {item}
          </label>
        ))}
      </div>
      <div className="checkbox-group">
        <strong>Select Transformations</strong>
        {transformations.map((item, index) => (
          <label key={index}>
            <input type="checkbox" /> {item}
          </label>
        ))}
      </div>
      <div className="checkbox-group">
        <strong>Final Selections</strong>
        {final.map((item, index) => (
          <label key={index}>
            <input type="checkbox" /> {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FactorSelection;