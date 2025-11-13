import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function OnboardNewIndex2() {
  // Random percentage for completion
  const completed = Math.floor(Math.random() * 101); // 0-100
  const remaining = 100 - completed;

  // Pie chart data
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "Completion",
        data: [completed, remaining],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
  };


  const rows = [
    { label: "Row 1", completed: 20, incomplete: 80 },
    { label: "Row 2", completed: 40, incomplete: 60 },
    { label: "Row 3", completed: 70, incomplete: 30 },
  ];

  const data_stackbar = {
    labels: rows.map((r) => r.label),
    datasets: [
      {
        label: "Completed",
        data: rows.map((r) => r.completed),
        backgroundColor: "#36A2EB",
      },
      {
        label: "Incomplete",
        data: rows.map((r) => r.incomplete),
        backgroundColor: "#FF6384",
      },
    ],
  };

  const options_stackbar = {
    indexAxis: "y", // Horizontal
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        max: 100, // percentage
      },
      y: {
        stacked: true,
      },
    },
  };





  return (
    <div style={{ padding: "20px" }}>
      {/* ✅ TOP: Pie Chart + 2 Text Areas */}
      <div
        style={{
          display: "flex",
          gap: "120px",
          marginBottom: "50px",
          marginLeft: "70px",
          marginRight: "50px",
          marginTop: "20px",
          alignItems: "center",

        }}
      >
        {/* Pie Chart */}
        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          {/* Pie Chart */}
          <div style={{ width: "120px", textAlign: "center" }}>
            <Pie data={data} options={options} />
            <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>

            </div>
          </div>

          {/* Bar Chart on Right */}
          <div style={{ width: "260px" }}>
            <Bar data={data_stackbar} options={options_stackbar} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          {/* Pie Chart */}
          <div style={{ width: "120px", textAlign: "center" }}>
            <Pie data={data} options={options} />
            <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>

            </div>
          </div>

          {/* Bar Chart on Right */}
          <div style={{ width: "260px" }}>
            <Bar data={data_stackbar} options={options_stackbar} />
          </div>
        </div>








      </div>

      {/* ✅ BIG TABLE */}
      <div style={{ marginBottom: "40px", marginLeft: "90px" }}>
        <h4 style={{ marginBottom: "15px", textAlign: "center" }}>
          Main Table
        </h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>a</th>
              <th>b</th>
              <th>c</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>val1</td>
              <td>val2</td>
              <td>val3</td>
            </tr>
            <tr>
              <td>val4</td>
              <td>val5</td>
              <td>val6</td>
            </tr>
            <tr>
              <td>val7</td>
              <td>val8</td>
              <td>val9</td>
            </tr>
            <tr>
              <td>val10</td>
              <td>val11</td>
              <td>val12</td>
            </tr>
            <tr>
              <td>val13</td>
              <td>val14</td>
              <td>val15</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ✅ TWO SMALL TABLES */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginBottom: "30px",
          marginLeft: "90px",
        }}
      >
        {/* Small Table 1 */}
        <div style={{ flex: 1 }}>
          <h5 style={{ marginBottom: "10px", textAlign: "center" }}>
            Small Table 1
          </h5>
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th>x</th>
                <th>y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Small Table 2 */}
        <div style={{ flex: 1 }}>
          <h5 style={{ marginBottom: "10px", textAlign: "center" }}>
            Small Table 2
          </h5>
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th>p</th>
                <th>q</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
