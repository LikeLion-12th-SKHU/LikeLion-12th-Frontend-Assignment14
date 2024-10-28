import React from "react";

const WeatherSelect = ({ onWeatherChange }) => {
  return (
    <div className="weather-select">
      <label htmlFor="weather">날씨 선택:</label>
      <select id="weather" onChange={(e) => onWeatherChange(e.target.value)}>
        <option value={"sunny"}>맑음</option>
        <option value={"rainy"}>비</option>
        <option value={"snowy"}>눈</option>
        <option value={"cloudy"}>구름</option>
        <option value={"windy"}>바람</option>
        <option value={"heatwave"}>폭염</option>
      </select>
    </div>
  );
};

export default WeatherSelect;
