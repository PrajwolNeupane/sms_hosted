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

// register the elements to use

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CustomBarChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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

export default CustomBarChart;
