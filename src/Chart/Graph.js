import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';


const verticalLinePlugin = {
  id: 'verticalLine',
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
      ctx.strokeStyle = 'rgba(0,0,0,0.4)';
      ctx.stroke();
      ctx.restore();
    }
  }
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

const XYZIndexChart = () => {
  const startDate = new Date('2024-01-01');
  const days = 365;

  const dates = Array.from({ length: days }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    return d.toISOString().split('T')[0];
  });

  const indexValues = [];
  let value = 4000;
  for (let i = 0; i < days; i++) {
    const changePercent = (Math.random() * 2 - 1) / 100;
    value = value * (1 + changePercent);
    indexValues.push(parseFloat(value.toFixed(2)));
  }

  const day0 = indexValues[0];
  const percentageChange = indexValues.map(val => ((val - day0) / day0) * 100);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'S&P 500 Simulated Random',
        data: percentageChange,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            const idx = context.dataIndex;
            return `Value: ${indexValues[idx]}, Change: ${percentageChange[idx].toFixed(2)}%`;
          }
        }
      },
      legend: { display: true, position: 'top' },
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: 'x',
        },
        pan: {
          enabled: true,
          mode: 'x',
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },   
        ticks: { maxTicksLimit: 12 },
      },
      y: {
        grid: { display: true },   
        ticks: {
          callback: value => value + '%',
        },
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: false,
    }
  };

  return <Line data={data} options={options} />;
};

export default XYZIndexChart;
