import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  SubTitle,
  Legend,
  PieController,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// register the elements to use
ChartJS.register(ArcElement, Tooltip, Legend, SubTitle, PieController);

const data = {
  labels: ["Present", "Absent"],
  datasets: [
    {
      label: "Attendance Detail",
      data: [300, 50],
      backgroundColor: ["#3A4D5F", "#929CA6"],
      hoverOffset: 10,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      align: "center" as const,
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
      text: "Total Record",
      position: "top" as const,
      align: "start" as const,
      font: {
        size: 20,
        weight: "500",
        family: "Poppins",
      },
      color: "#24394d",
    },

    subtitle: {
      display: true,
      position: "bottom" as const,
      text: "Chart Subtitle",
      color: "#24394d",
      font: {
        size: 18,
        family: "Poppins",
        weight: "400",
      },
    },
  },
};

function CustomDougnotChart() {
  return <Doughnut data={data} options={options}></Doughnut>;
}

export default CustomDougnotChart;
