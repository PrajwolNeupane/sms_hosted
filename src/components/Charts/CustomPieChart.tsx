import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// register the elements to use
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

function PieChart() {
  const labels = ["Students", "Teachers", "Parents", "Staffs"];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: ["#3A4D5F", "#929CA6", "#3A4D5F", "#506171"],
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
    },
  };

  return <Pie data={data} options={options} className="w-full h-full"></Pie>;
}

export default PieChart;
