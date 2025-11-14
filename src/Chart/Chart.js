import React, { useState } from 'react';
import Graph from './Graph';
import download_image from "../components/images/download.png"
import IndexSelector from './IndexSelector';

function Chart() {

  const [selectedIndex,setSelectedIndex]=useState("Index 1");
  
  const indexDescriptions = {
    "Index 1": "The Index captures the performance of US companies focused on serving the fastest growing demographic and behavioral segments. The theme can encompass a wide range of areas including demographic segments like Generation Z, aged population etc. and behavioral segments like health conscious and eco-friendly consumers.",
    "Index 2": "The Index captures the performance of companies across the world focused on AI related theme. The theme covers companies enabling growth in AI industry, providing services like design, development, manufacturing and consulting in sectors such as software, hardware and consulting.",
    "Index 3": "The Index captures the performance of companies across the world expected to benefit in the shift from fossil fuel powered vehicles to electric vehicles. The theme covers companies such as EV manufacturers, parts suppliers, battery manufacturers and mining/material companies.",
    "Index 4": "The Index captures the performance of companies across the world focused contributing to sustainable environment and green economy. The theme covers companies in areas like renewable energy, not polluting vehicles, waste management/water recycling, pollution control, sustainable farming etc.",
    "Index 5": "The Index captures the performance of companies across the world involved in the cybersecurity ecosystem. Companies that provide protection from the key risks of cyber-attacks, data leakage, and fraud. These cover areas such as Virtual private networks (VPNs), Multi-factor authentication (MFA) software, Cybersecurity tools and remediation services post attack."
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: "50px",
        gap: "20px",
      }}
    >
      {/* Left side content */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          borderRadius: "10px",
          height: "500px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          cursor: "pointer", // shows pointer on hover
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1F2937", // dark gray for a clean look
            marginBottom: "20px", // spacing below heading
            lineHeight: "1.3", // improves readability
            borderBottom: "2px solid #000a14ff", // subtle underline accent
            paddingBottom: "20px",
          }}
        >
          
          <IndexSelector selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        </h2>
        <p style={{width: "150%"}}>
          {indexDescriptions[selectedIndex]}
        </p>
        <br></br>

        {/* Clickable text items */}
        <div
          onClick={() => alert(" clicked")}
          style={{
            fontSize: "22px",
            fontWeight: "200",
            transition: "0.2s",
            color: "#333",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#007BFF")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
        >
          <img
    src={download_image}
    alt="download"
    style={{ width: "26px", height: "27px", objectFit: "contain" }}
  /> Factsheet
        </div>
        {/* <br/> */}
        <div
          onClick={() => alert(" clicked")}
          style={{
            fontSize: "22px",
            fontWeight: "200",
            transition: "0.2s",
            color: "#333",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#007BFF")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
        >
         <img
    src={download_image}
    alt="download"
    style={{ width: "26px", height: "27px", objectFit: "contain" }}
  /> Methodolgy
            
        </div>
        {/* <br></br> */}
        <div
          onClick={() => alert(" clicked")}
          style={{
            fontSize: "22px",
            fontWeight: "200",
            transition: "0.2s",
            color: "#333",
            whiteSpace: "nowrap",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#007BFF")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
        >
          <img
    src={download_image}
    alt="download"
    style={{ width: "26px", height: "27px", objectFit: "contain" }}
  /> Index Constituent
        </div>
      </div>

      {/* Right side: Graph */}
      <div
        style={{
          width: "900px",
          height: "500px",
          backgroundColor: "#FFF7F1",
          borderRadius: "10px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
          padding: "20px",
          marginLeft: "150px",
        }}
      >
        <Graph selectedIndex={selectedIndex}/>
      </div>
    </div>
  );
}

export default Chart;
