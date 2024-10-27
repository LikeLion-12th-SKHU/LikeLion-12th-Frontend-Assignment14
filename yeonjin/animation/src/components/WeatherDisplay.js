import React from "react";
import { motion } from "framer-motion";
import "./WeatherDisplay.css";

const weatherImages = {
    sunny: "/images/sunny.png",
    rainy: "/images/rainy.png",
    snowy: "/images/snowy.png",
    cloudy: "/images/cloudy.png",
    thunder: "/images/thunder.png", 
};

const WeatherDisplay = ({ weather }) => {
  const imgSrc = weatherImages[weather];

  const renderWeather = () => {
    if (!imgSrc) {
      return <div>날씨를 선택해주세요.</div>;
    }

    switch (weather) {
      case "sunny":
        return (
          <div className="weather-animation">
            {[...Array(20)].map((_, index) => (
              <motion.img
                key={index}
                src={imgSrc}
                alt="weather-icon"
                className="weather-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  left: `${(index % 5) * 20 + 10}%`,
                  top: `${Math.floor(index / 5) * 20 + 10}%`,
                }}
              />
            ))}
          </div>
        );
      case "rainy":
        return (
          <div className="weather-animation">
            {[...Array(20)].map((_, index) => (
              <motion.img
                key={index}
                src={imgSrc}
                alt="rainy"
                className="weather-icon"
                animate={{ y: [0, 100] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 40}%`,
                }}
              />
            ))}
          </div>
        );
      case "snowy":
        return (
          <div className="weather-animation">
            {[...Array(20)].map((_, index) => (
              <motion.img
                key={index}
                src={imgSrc}
                alt="snowy"
                className="weather-icon"
                animate={{ rotate: 360, y: [0, 800] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: `${Math.random() * 10}%`,
                  left: `${Math.random() * 90}%`,
                }}
              />
            ))}
          </div>
        );
      case "cloudy":
        return (
          <div className="weather-animation">
            {[...Array(10)].map((_, index) => (
              <motion.img
                key={index}
                src={imgSrc}
                alt="cloudy"
                className="weather-icon"
                animate={{ x: [0, 100, -100, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 90}%`,
                }}
              />
            ))}
          </div>
        );
      case "thunder":
        return (
          <div className="weather-animation">
            {[...Array(10)].map((_, index) => (
              <motion.img
                key={index}
                src={imgSrc}
                alt="thunder"
                className="weather-icon"
                animate={{ 
                  x: [-40, 40, -40, 40], 
                  y: [0, 600] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  position: "absolute",
                  left: `${index * 10}%`,
                  top: `-50px`,
                }}
              />
            ))}
          </div>
        );
      default:
        return <div>날씨를 선택해주세요.</div>;
    }
  };

  return <div className="weather-display">{renderWeather()}</div>;
};

export default WeatherDisplay;
