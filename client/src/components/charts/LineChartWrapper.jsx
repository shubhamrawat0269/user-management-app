import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Michael",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Lindsay",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tobias",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Bayron",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "George",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Rachel",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const LineChartWrapper = () => {
  return (
    <div className="bg-neutral-900 flex justify-center py-2 px-5">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartWrapper;
