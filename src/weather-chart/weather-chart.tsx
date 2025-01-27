import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchWeatherApi } from "openmeteo";

type WeatherData = { time: string; temperature: number };

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        latitude: 43.597,
        longitude: -79.6139,
        hourly: "temperature_2m",
        timezone: "America/New_York",
        forecast_days: 16,
      };
      const url = "https://api.open-meteo.com/v1/forecast";

      try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];

        const utcOffsetSeconds = response.utcOffsetSeconds();
        const hourly = response.hourly();

        const range = (start: number, stop: number, step: number): number[] =>
          Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);

        const startTime = Number(hourly?.time() ?? 0);
        const endTime = Number(hourly?.timeEnd() ?? 0);
        const interval = hourly?.interval() ?? 1;
        const utcOffsetMillis = utcOffsetSeconds * 1000;

        const time = range(startTime, endTime, interval).map(
          (timestamp) => new Date(timestamp * 1000 + utcOffsetMillis + 5 * 60 * 60 * 1000).toISOString() // Add 5 hours
        );

        const temperature2m = hourly?.variables(0)?.valuesArray() ?? [];

        const chartData = time.map((t, i) => ({
          time: t,
          temperature: parseFloat(temperature2m[i].toFixed(1)),
        }));


        setWeatherData(chartData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading weather data...</p>;

  const formatDate = (label: string): string => {
    const date = new Date(label);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',  // e.g., "Monday"
      year: 'numeric',  // e.g., "2025"
      month: 'long',    // e.g., "February"
      day: 'numeric',   // e.g., "10"
      hour: '2-digit',  // e.g., "11"
      minute: '2-digit',// e.g., "30"
      timeZoneName: 'short' // e.g., "UTC"
    };

    return date.toLocaleString('en-US', options);
  };

  const formatDayXAxis = (label: string): string => {
    const date = new Date(label);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric'
    };

    return date.toLocaleString('en-US', options);
  };


  return (
    <div>
      <h2>16 Day Temperature Forecast</h2>
      <ResponsiveContainer width="100%" height={300}>

        <LineChart
          data={weatherData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" tickFormatter={(time) => formatDayXAxis(time)} />
          <YAxis dataKey="temperature" label={{ value: "Temperature (°C)", angle: -90, position: "insideLeft" }} />
          <Tooltip labelFormatter={(label) => `Time: ${formatDate(label)}`} />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
