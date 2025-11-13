import React, { useState } from "react";

export default function IndexSelector({selectedIndex,setSelectedIndex}){

  const handleChange = (e) => {
    setSelectedIndex(e.target.value);
    // You can add logic here to update chart or data based on selection
  };

  return (
    <div className="index-selector">
      <select value={selectedIndex} onChange={handleChange}>
        <option value="Index 1">Evalueserve US Consumer Focus Index</option>
        <option value="Index 2">Evalueserve Global AI Economy Index</option>
        <option value="Index 3">Evalueserve Electry Mobility Select Index</option>
        <option value="Index 4">Evalueserve Green technology Index</option>
        <option value="Index 5">Evalueserve Cyber Security Index</option>
      </select>
    </div>
  );
};
