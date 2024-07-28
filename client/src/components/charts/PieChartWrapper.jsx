import React from "react";
import "./charts.css";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
];

const PieChartWrapper = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-green-900 px-5 flex justify-around items-center py-2">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2">
        {data?.map((cur) => {
          return (
            <div key={cur.id} className="flex gap-2">
              <div className="img__container">
                <img className="img_style" src={cur.avatar} alt={cur.id} />
              </div>
              <span className="text-sm text-white">{cur.first_name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartWrapper;
