import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import dataJson from "./ChartData.json";

const indexNames = {
  "Index 1": "Evalueserve US Consumer Focus Index",
  "Index 2": "Evalueserve Global AI Economy Index",
  "Index 3": "Evalueserve Electric Mobility Select Index",
  "Index 4": "Evalueserve Green Technology Index",
  "Index 5": "Evalueserve Cyber Security Index",
};

const verticalLinePlugin = {
  id: "verticalLine",
  afterDraw: (chart) => {
    if (!chart.scales?.y) return;
    if (chart.tooltip?._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      const activePoint = chart.tooltip._active[0];
      const x = activePoint.element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.stroke();
      ctx.restore();
    }
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  zoomPlugin,
  verticalLinePlugin
);

const XYZIndexChart = ({ selectedIndex }) => {
  const [chartData, setChartData] = useState(null);
  const [filter, setFilter] = useState("ALL"); // <-- time filter

  useEffect(() => {
    const parseDate = (d) => new Date(d);

    // Sort data by date (for safety)
    const sortedData = [...dataJson].sort(
      (a, b) => parseDate(a.Column4) - parseDate(b.Column4)
    );

    const lastDate = parseDate(sortedData[sortedData.length - 1].Column4);
    let filteredData = sortedData;

    // Apply time filter
    if (filter !== "ALL") {
      const dateLimit = new Date(lastDate);

      if (filter === "6M") dateLimit.setMonth(dateLimit.getMonth() - 6);
      else if (filter === "1Y") dateLimit.setFullYear(dateLimit.getFullYear() - 1);
      else if (filter === "5Y") dateLimit.setFullYear(dateLimit.getFullYear() - 5);

      filteredData = sortedData.filter(
        (d) => parseDate(d.Column4) >= dateLimit
      );
    }

    // Prepare chart data
    const dates = filteredData.map((d) => d.Column4);
    const values = filteredData.map((d) => d[selectedIndex]);


    const labelText = `${indexNames[selectedIndex]}`;
  

    const data = {
      labels: dates,
      datasets: [
        {
          label: labelText,
          data: values,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.2,
          pointRadius: 0,
          pointHoverRadius: 4,
        },
      ],
    };

    setChartData(data);
  }, [selectedIndex, filter]);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => {
            const idx = context.dataIndex;
            const val = context.raw;
            const change =
              ((val - dataJson[0][selectedIndex]) / dataJson[0][selectedIndex]) * 100;
            return `${indexNames[selectedIndex]}: ${val.toFixed(
              2
            )} (${change.toFixed(2)}%)`;
          },
        },
      },
      legend: { display: true, position: "bottom", labels:{boxWidth:20,padding:30} },
      zoom: {
        zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: "x" },
        pan: { enabled: true, mode: "x" },
      },
    },
    scales: {
      x: { grid: { display: false }, 
      ticks: {
      callback: function (value, index, ticks) {
        // Convert date string to year
        const date = new Date(this.getLabelForValue(value));
        return date.getFullYear();
      },
      autoSkip: true,
      maxTicksLimit: 7, 
    },
  },
      y: {
        grid: { display: true },
        icks: { callback: (value) => value.toFixed(0)}
      },
    },
    interaction: { mode: "nearest", intersect: false },
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div style={{ marginBottom: "-10px", textAlign: "right" }}>
        {["6M", "1Y", "5Y", "ALL"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              margin: "5 10px",
              padding: "3px 8px",
              borderRadius: "1px",
              border: "1px solid #ccc",
              backgroundColor: filter === f ? "#301934" : "#E8E9EB",
              color: filter === f ? "#fff" : "#333",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <br></br>
      

      {/* Chart */}
      {chartData ? <Line data={chartData} options={options} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default XYZIndexChart;
