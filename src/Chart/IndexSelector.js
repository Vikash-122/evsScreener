import React, { useState } from "react";

export default function IndexSelector(){
  const [selectedIndex, setSelectedIndex] = useState("tech50");

  const handleChange = (e) => {
    setSelectedIndex(e.target.value);
    // You can add logic here to update chart or data based on selection
  };

  return (
    <div className="index-selector">
      <select value={selectedIndex} onChange={handleChange}>
        <option value="tech50">Evalueserve Tech Index 50</option>
        <option value="finance100">Evalueserve Finance Index 100</option>
        <option value="healthcare30">Evalueserve Healthcare Index 30</option>
        <option value="energy20">Evalueserve Energy Index 20</option>
      </select>
    </div>
  );
};
