import './App.css'
import SimpleAreaChart from "./area-chart/area-chart"
import SimpleBarChart from "./bar-chart/bar-chart"
import StackedAreaChart from "./stacked-area-chart/stacked-area-chart"
import WeatherChart from "./weather-chart/weather-chart"

function App() {

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <WeatherChart></WeatherChart>
        </div>
        <div className="grid-item">
          <SimpleAreaChart></SimpleAreaChart>
        </div>
        <div className="grid-item">
          <SimpleBarChart></SimpleBarChart>
        </div>
        <div className="grid-item">
          <StackedAreaChart></StackedAreaChart>
        </div>
      </div>
    </>
  )
}

export default App
