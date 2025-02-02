import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from "./AppLayout";
import { lazy } from "react";

const AllCharts = lazy(() => import("./all-charts/all-charts"));
const WeatherChart = lazy(() => import("./weather-chart/weather-chart"));

const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: '/',
        element: <AllCharts />,
      },
      {
        path: '/sevenday',
        element: <WeatherChart days={7}></WeatherChart>,
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
