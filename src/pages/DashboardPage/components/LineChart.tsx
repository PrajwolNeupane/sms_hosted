import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useState } from "react";

// register the elements to use

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const [userData, setUserData] = useState({
    labels: ["Teachers", "Students", "Faculty"],
    datasets: [
      {
        label: "Users Gained",
        data: [60, 370, 45],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Present",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: "#3A4D5F",
      },
      {
        label: "Absent",
        data: [7, 6, 5, 4, 3, 2, 1],
        backgroundColor: "#929CA6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          font: {
            size: 15,
            weight: "400",
            family: "Poppins",
          },
        },
      },
      title: {
        display: true,
        text: "Total Attendance Report",
        position: "top" as const,
        align: "start" as const,
        font: {
          size: 20,
          weight: "500",
          family: "Poppins",
        },
        color: "#24394d",
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default LineChart;
