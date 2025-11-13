import React, { useState } from "react";
import "./GeneralRules.css";

export default function GeneralRules() {
  const [strategyType, setStrategyType] = useState("MultiFactor Strategy");
  const [strategyName, setStrategyName] = useState("");
  const [holidayList, setHolidayList] = useState("NYSE");
  const [currency, setCurrency] = useState("USD");
  const [sessionType, setSessionType] = useState("continue");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      sessionType,
      strategyType,
      strategyName,
      holidayList,
      currency,
    });
    alert("General Rules Submitted!");
  };

  return (
    <div className="general-root">
    <div className="form-container">
      <h2 className="form-title">Set General Rules</h2>
      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="sessionType"
              value="continue"
              checked={sessionType === "continue"}
              onChange={(e) => setSessionType(e.target.value)}
            />
            Continue Existing Session
          </label>
          <label>
            <input
              type="radio"
              name="sessionType"
              value="new"
              checked={sessionType === "new"}
              onChange={(e) => setSessionType(e.target.value)}
            />
            Design New Strategy
          </label>
          <label>
            <input
              type="radio"
              name="sessionType"
              value="replicate"
              checked={sessionType === "replicate"}
              onChange={(e) => setSessionType(e.target.value)}
            />
            Replicate Existing Strategy Rules
          </label>
        </div>

        {/* Dropdown for Strategy Type */}
        <div className="form-group">
          <label>Select Strategy Type</label>
          <select
            value={strategyType}
            onChange={(e) => setStrategyType(e.target.value)}
          >
            <option>MultiFactor Strategy</option>
            <option>SingleFactor Strategy</option>
            <option>Custom Strategy</option>
          </select>
        </div>

        {/* Strategy Name */}
        <div className="form-group">
          <label>Enter Strategy Name</label>
          <input
            type="text"
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
            placeholder="New_strat"
          />
        </div>

        {/* Holiday List & Currency */}
        <div className="form-row">
          <div className="form-group">
            <label>Select Holiday List</label>
            <select
              value={holidayList}
              onChange={(e) => setHolidayList(e.target.value)}
            >
              <option>NYSE</option>
              <option>NSE</option>
              <option>LSE</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit General Rules
        </button>
      </form>
        </div>
    </div>
    )
}