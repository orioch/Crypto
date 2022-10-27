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
  let color = "green";
  if (!dailyData) dailyData = [];
  if (dailyData[0]) {
    color =
      Number(dailyData[0].priceUsd) >
      Number(dailyData[dailyData.length - 1].priceUsd)
        ? "red"
        : "green";
  }

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
      maintainAspectRatio: false,
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
        backgroundColor: color,
        borderColor: color,
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
