import AllCharts from "./all-charts/all-charts";
import WeatherChart from "./weather-chart/weather-chart";

const routes = [
  {
    path: '/',
    element: <AllCharts />,
  },
  {
    path: '/sevenday',
    element: <WeatherChart days={7}></WeatherChart>,
  },
];

export default routes;