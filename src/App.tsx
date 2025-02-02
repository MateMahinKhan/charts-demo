import AllCharts from "./all-charts/all-charts";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WeatherChart from "./weather-chart/weather-chart";

import AppLayout from "./AppLayout";

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
