import React from 'react';
import Graph from './Graph';
import download_image from "../components/images/download.png"
import IndexSelector from './IndexSelector';

function Chart() {
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
          
          <IndexSelector></IndexSelector>
        </h2>
        <p style={{width: "150%"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime possimus praesentium aperiam quam suscipit voluptates pariatur at libero perferendis?
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
        <Graph />
      </div>
    </div>
  );
}

export default Chart;
