import React, { useState } from "react";
import WeatherSelect from "./components/WeatherSelect";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState("");

  return (
    <div className="App">
      <h1>Weather Simulation</h1>
      <WeatherSelect onWeatherChange={setWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
