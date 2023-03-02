import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ChartBar() {
  const options = {
    responsive: true,

    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (data) {
            return data + "%";
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chances de chuvas nos próximos dias",
      },
    },
  };

  const labels = ["11:00", "12:00", "13:00", "14:00", "15:00"];
  const data = {
    labels,
    datasets: [
      {
        label: "Chances de chuva em %",
        data: [16, 14, 18, 31, 14],
        borderColor: "#2E2E6",
        backgroundColor: "rgb(46, 46, 101, 100%)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
