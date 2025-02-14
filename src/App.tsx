import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from "./AppLayout";
import { lazy } from "react";
import Error from "./Error";
import { loader as weatherChartLoader } from './weather-chart/weather-chart';

const AllCharts = lazy(() => import("./all-charts/all-charts"));
const WeatherChart = lazy(() => import("./weather-chart/weather-chart"));

const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/charts-demo',
        element: <AllCharts />,
        loader: weatherChartLoader
      },
      {
        path: '/sevenday',
        element: <WeatherChart />,
        loader: () => weatherChartLoader({ params: { days: "7" } }),
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
