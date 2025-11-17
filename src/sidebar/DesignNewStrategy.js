import { useState } from "react";
import AccordionSection from "./AccordionSection";
import "./DesignNewStrategy.css";

// { title: "Underlying Strategy", component: "UnderlyingStrategy" },
// { title: "Corporate Actions", component: "CorporateActions" },
const sections = [
  { title: "Universe Builder", component: "UniverseBuilder" },
  { title: "Strategy Builder", component: "StrategyBuilder" },
  { title: "Underlying Instruments", component: "UnderlyingInstruments" },
  { title: "Parameters", component: "Parameters" },
  { title: "Weights Optimization", component: "WeightsOptimization" },
  { title: "Backtest Parameters", component: "BacktestParameters" },
  { title: "Data Sufficiency Check", component: "DataSufficiencyCheck" },
];

export default function CustomComponent() {
  const [openSection, setOpenSection] = useState(null);
  
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container">
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
