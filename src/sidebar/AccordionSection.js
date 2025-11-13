import React from "react";

export default function AccordionSection({ title, isOpen, onToggle, Component }) {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        {title}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <Component />
        </div>
      )}
    </div>
  );
}