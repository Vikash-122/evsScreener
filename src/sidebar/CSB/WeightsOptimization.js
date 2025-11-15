import React, { useState } from "react";

const WeightsOptimization = () => {
  const [showStockConstraints, setShowStockConstraints] = useState(true);
  const [showAbsoluteConstraints, setShowAbsoluteConstraints] = useState(true);

  const stockConstraints = ["Upper", "Lower"];
  const absoluteConstraints = ["Country", "Region", "Sector"];

  return (
    <div className="row">
      {/* Stock Constraints */}
      <div className="csb-card">
        <div
          className="card-header"
          onClick={() => setShowStockConstraints(!showStockConstraints)}
        >
          <h4>Stock Constraints</h4>
          <span>{showStockConstraints ? "▼" : "▲"}</span>
        </div>
        {showStockConstraints && (
          <div className="checkbox-group">
            {stockConstraints.map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Absolute Constraints */}
      <div className="csb-card">
        <div
          className="card-header"
          onClick={() => setShowAbsoluteConstraints(!showAbsoluteConstraints)}
        >
          <h4>Absolute Constraints</h4>
          <span>{showAbsoluteConstraints ? "▼" : "▲"}</span>
        </div>
        {showAbsoluteConstraints && (
          <div className="checkbox-group">
            {absoluteConstraints.map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightsOptimization;

