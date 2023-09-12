import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";

// register the elements to use
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const CustomLineChart = () => {
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

  return <Line data={userData} className="w-full" />;
};

export default CustomLineChart;
