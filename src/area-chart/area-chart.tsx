import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TooltipProps } from 'recharts';
const data = [
  { name: "Jan", value: -3 },
  { name: "Feb", value: -3 },
  { name: "Mar", value: 1 },
  { name: "Apr", value: 6 },
  { name: "May", value: 12 },
  { name: "Jun", value: 18 },
  { name: "Jul", value: 22 },
  { name: "Aug", value: 22 },
  { name: "Sep", value: 18 },
  { name: "Oct", value: 12 },
  { name: "Nov", value: 4 },
  { name: "Dec", value: 0 },
];
function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>{label}</strong>
        </p>
        <p style={{ margin: 0 }}>Temperature: {dataPoint.value}°C</p>
        <p style={{ margin: 0 }}>
          Season:{" "}
          {dataPoint.value >= 20
            ? "Summer"
            : dataPoint.value >= 10
              ? "Spring/Fall"
              : "Winter"}
        </p>
      </div>
    );
  }

  return null;
};

function SimpleAreaChart() {
  return (
    <div>
      Avg Temp throughout the year
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;