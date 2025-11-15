import React from "react";

const ViewFilteredData = () => {
  const data = [
    { strategy_name: "test_final123", user: "Hardik", idx_name: "GLOBAL 500", company: "3M Co", ticker: "MMM" },
    { strategy_name: "test_final124", user: "Hardik", idx_name: "GLOBAL 500", company: "AES Corp", ticker: "AES" },
    // Add more rows as needed
  ];

  return (
    <div className="csb-card">
      <h4>View Filtered Data</h4>
      <table className="data-table">
        <thead>
          <tr>
            <th>Strategy Name</th>
            <th>User</th>
            <th>Index Name</th>
            <th>Company</th>
            <th>Ticker</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.strategy_name}</td>
              <td>{row.user}</td>
              <td>{row.idx_name}</td>
              <td>{row.company}</td>
              <td>{row.ticker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFilteredData;