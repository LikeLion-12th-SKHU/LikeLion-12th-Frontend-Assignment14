import React from "react";

const WeatherSelect = ({ onWeatherChange }) => {
  return (
    <div className="weather-select">
      <label htmlFor="weather">Weather select</label>
      <select id="weather" onChange={(e) => onWeatherChange(e.target.value)}>
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
        <option value="snowy">Snowy</option>
        <option value="cloudy">Cloudy</option>
        <option value="windy">Windy</option>
      </select>
    </div>
  );
};

export default WeatherSelect;
