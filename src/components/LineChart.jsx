import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = () => {
  const mathMarksData = [
    {
      id: 1,
      name: "John",
      Bangla: 85,
      English: 78,
      Math: 92,
      Physics: 65,
      Chemistry: 70,
    },
    {
      id: 2,
      name: "Emma",
      Bangla: 78,
      English: 82,
      Math: 75,
      Physics: 88,
      Chemistry: 75,
    },
    {
      id: 3,
      name: "Michael",
      Bangla: 92,
      English: 85,
      Math: 90,
      Physics: 79,
      Chemistry: 82,
    },
    {
      id: 4,
      name: "Sophia",
      Bangla: 65,
      English: 70,
      Math: 75,
      Physics: 82,
      Chemistry: 88,
    },
    {
      id: 5,
      name: "William",
      Bangla: 70,
      English: 75,
      Math: 80,
      Physics: 92,
      Chemistry: 85,
    },
    {
      id: 6,
      name: "Olivia",
      Bangla: 88,
      English: 92,
      Math: 85,
      Physics: 78,
      Chemistry: 70,
    },
    {
      id: 7,
      name: "James",
      Bangla: 75,
      English: 78,
      Math: 82,
      Physics: 85,
      Chemistry: 79,
    },
    {
      id: 8,
      name: "Charlotte",
      Bangla: 82,
      English: 80,
      Math: 78,
      Physics: 75,
      Chemistry: 92,
    },
    {
      id: 9,
      name: "Benjamin",
      Bangla: 90,
      English: 88,
      Math: 92,
      Physics: 70,
      Chemistry: 78,
    },
    {
      id: 10,
      name: "Amelia",
      Bangla: 79,
      English: 75,
      Math: 70,
      Physics: 65,
      Chemistry: 85,
    },
  ];

  return (
    <div>
      <BarChart width={730} height={250} data={mathMarksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Bangla" fill="green" />
        <Bar dataKey="English" fill="red" />
        <Bar dataKey="Math" fill="black" />
        <Bar dataKey="Physics" fill="tomato" />
        <Bar dataKey="Chemistry" fill="blue" />
      </BarChart>
    </div>
  );
};

export default LineChart;
