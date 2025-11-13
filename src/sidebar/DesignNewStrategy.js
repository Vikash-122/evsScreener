import { useState } from "react";
import AccordionSection from "./AccordionSection";
import "./DesignNewStrategy.css";

const options1 = ["Index", "Basket", "TWAPS/VWAPS"];
const options2 = ["Eq", "Eq Drv", "Rates", "Comm", "Multi Asset"];

const sections = [
  { title: "Underlying Strategy", component: "UnderlyingStrategy" },
  { title: "Corporate Actions", component: "CorporateActions" },
  { title: "Underlying Instruments", component: "UnderlyingInstruments" },
  { title: "Parameters", component: "Parameters" },
  { title: "Weights Optimization", component: "WeightsOptimization" },
  { title: "Backtest Parameters", component: "BacktestParameters" },
  { title: "Data Sufficiency Check", component: "DataSufficiencyCheck" },
];

export default function CustomComponent() {
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);
  const [openSection, setOpenSection] = useState(null);
  
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container">
      <div className="radio-row">
        {options1.map((option) => (
          <label key={option} className={`radio-box ${selectedOption1 === option ? "active" : ""}`}>
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
        {options2.map((option) => (
          <label key={option} className={`radio-box ${selectedOption2 === option ? "active" : ""}`}>
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
