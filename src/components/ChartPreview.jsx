import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ScatterCovid({ lineOnly, dailyData }) {
  if (!dailyData) dailyData = [];
  let options = {};
  if (lineOnly) {
    options = {
      // responsive: true,
      // maintainAspectRatio: true,
      animations: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        yAxis: {
          display: false,
        },
        xAxis: {
          display: false,
        },
      },
    };
  } else {
    options = {
      plugins: {
        title: {
          display: true,
          text: "Chart.js Scatter Chart",
          font: {
            size: 35,
          },
        },
      },
      scales: {
        yAxis: {
          ticks: {
            font: {
              size: 20,
            },
          },
        },
        xAxis: {
          ticks: {
            font: {
              size: 20,
            },
            callback: (value) => {
              if (!data.datasets[0].data[value]) return "";
              return data.datasets[0].data[value].date.substring(0, 10);
            },
          },
        },
      },
    };
  }

  const data = {
    datasets: [
      {
        data: Array.from([...dailyData], (obj, index) => ({
          x: index,
          y: obj.priceUsd,
          date: obj.date,
        })),

        showLine: true,
        pointStyle: "rect",
        pointRadius: 0,
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <Scatter options={options} data={data} />
    </div>
  );
}
