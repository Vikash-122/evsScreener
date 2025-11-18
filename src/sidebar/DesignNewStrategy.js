import { useState } from "react";
import AccordionSection from "./AccordionSection";
import "./DesignNewStrategy.css";

// { title: "Underlying Strategy", component: "UnderlyingStrategy" },
// { title: "Corporate Actions", component: "CorporateActions" },
// { title: "Underlying Instruments", component: "UnderlyingInstruments" },
const sections = [
  { title: "Universe Builder", component: "UniverseBuilder" },
  { title: "Strategy Builder", component: "StrategyBuilder" },
  { title: "Strategy Parameters", component: "Parameters" },
  { title: "Weights Optimization", component: "WeightsOptimization" },
  { title: "Backtest Parameters", component: "BacktestParameters" },
  { title: "Data Sufficiency Check", component: "DataSufficiencyCheck" },
];
const options1 = ["Index", "Basket", "TWAPS", "VWAPS"];
const options2 = ["Eq", "Eq Drv", "Rates", "Comm", "Multi Asset", "IOI"];

export default function CustomComponent() {
  const [openSection, setOpenSection] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container">
      <p><h6>Flexible Framework for Building New Strategies </h6> Accelerate your strategy development with a high-performance framework. Design and backtest custom strategies at speed, choose from powerful built-in screens and modules to launch index strategies instantly, or engineer your own with the integrated Python editor for maximum control</p>
      <div style={{marginBottom: "20px", border: "2px solid #ddd", padding: "10px", borderRadius: "8px"}}>
      <div className="radio-row">
        <label>Select Strategy Type: </label>
        {options1.map((option) => (
          <label
            key={option}
            className={`radio-box ${
              selectedOption1 === option ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption1 === option}
              onChange={() => setSelectedOption1(option)}
              />
            {option}
          </label>
        ))}
      </div>
      <div className="radio-row">
        <label>Select Asset Class: </label>
        {options2.map((option) => (
          <label
          key={option}
            className={`radio-box ${
              selectedOption2 === option ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption2 === option}
              onChange={() => setSelectedOption2(option)}
            />
            {option}
          </label>
        ))}
      </div>
        </div>
      <div className="accordion">
        {sections.map(({ title, component }) => (
          <AccordionSection
          key={title}
          title={title}
          isOpen={openSection === title}
          onToggle={() => toggleSection(title)}
          Component={require(`./DNSaccordion/${component}`).default}
          />
        ))}
      </div>
        <div className="generate-btn">
          <button className="btn">Generate Backtest</button>
        </div>
    </div>
  );
}
