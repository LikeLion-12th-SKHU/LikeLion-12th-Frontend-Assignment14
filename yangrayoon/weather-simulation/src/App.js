import React, { useState } from "react";
import WeatherSelect from "./components/weatherSelect";
import WeatherDisplay from "./components/weatherDisplay";
import "./App.css";

function App() {
  const [weather, setWeather] = useState("");
  return (
    <div className="App">
      <h1>날씨 시뮬레이션</h1>
      <WeatherSelect onWeatherChange={setWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
