import React from "react";
import "./table.css";
import dummyData from "./dummyTableData.json" 

const Table = () => {
  return (
    <div className="table-container">
      <table>
    

        <thead>

            <tr className="first-header">
              <th colSpan="5">Stock Screener</th>
          </tr>
          <tr>
            <th className="middle">#</th>
            <th className="middle">Name</th>
            <th className="middle">Sub-Sector</th>
            <th className="middle">Market Cap</th>
            <th className="middle">Close Price</th>
          </tr>

      </thead>

      <tbody>
        {dummyData.map((item, index) => (
          <tr key={index}>
            <td className="middle index-col">{index + 1}</td>
        
            <td className="middle">
              <span className="company-name">{item.name}</span>
            </td>
        
            <td className="middle">{item.subSector}</td>
            <td className="middle">{item.marketCap}</td>
            <td className="middle">{item.closePrice}</td>
          </tr>
        ))}
      </tbody>
      
    </table>
    </div>
  );
};

export default Table;
