import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, Rectangle } from "recharts";

const hurricaneData = [
  { year: 2005, hurricanes: 4 },
  { year: 2006, hurricanes: 0 },
  { year: 2007, hurricanes: 0 },
  { year: 2008, hurricanes: 1 },
  { year: 2009, hurricanes: 0 },
  { year: 2010, hurricanes: 0 },
  { year: 2011, hurricanes: 0 },
  { year: 2012, hurricanes: 1 },
  { year: 2013, hurricanes: 0 },
  { year: 2014, hurricanes: 0 },
  { year: 2015, hurricanes: 0 },
  { year: 2016, hurricanes: 1 },
  { year: 2017, hurricanes: 2 },
  { year: 2018, hurricanes: 2 },
  { year: 2019, hurricanes: 0 },
  { year: 2020, hurricanes: 2 },
  { year: 2021, hurricanes: 0 },
  { year: 2022, hurricanes: 2 },
  { year: 2023, hurricanes: 0 },
  { year: 2024, hurricanes: 3 },
];

//   if (active && payload && payload.length) {
//     const dataPoint = payload[0].payload;
//     return (
//       <div
//         style={{
//           background: "#fff",
//           border: "1px solid #ccc",
//           padding: "10px",
//           borderRadius: "5px",
//         }}
//       >
//         <p style={{ margin: 0 }}>
//           <strong>{label}</strong>
//         </p>
//         <p style={{ margin: 0 }}>Temperature: {dataPoint.value}°C</p>
//         <p style={{ margin: 0 }}>
//           Season:{" "}
//           {dataPoint.value >= 20
//             ? "Summer"
//             : dataPoint.value >= 10
//               ? "Spring/Fall"
//               : "Winter"}
//         </p>
//       </div>
//     );
//   }

//   return null;
// };

function SimpleBarChart() {
  return (
    <div>
      Hurricanes hitting florida
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={hurricaneData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hurricanes" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;