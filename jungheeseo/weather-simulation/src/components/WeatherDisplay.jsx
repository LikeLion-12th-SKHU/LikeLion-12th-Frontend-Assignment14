import React from "react";
import { motion } from "framer-motion";
import "./WeatherDisplay.css";

const weatherImages = {
  sunny: "/images/sunny.png",
  rainy: "/images/rainy.png",
  snowy: "/images/snowy.png",
  cloudy: "/images/cloudy.png",
  gale: "/images/gale.png",
};

const WeatherDisplay = ({ weather }) => {
  const imageSrc = weatherImages[weather];

  const renderWeather = () => {
    if (!imageSrc) {
      return <div>날씨를 선택해주세요.</div>;
    }

    switch (weather) {
      case "sunny":
        return (
          <div className="weather-animation">
            {[...Array(20)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt="sunny"
                className="weather-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: `${(index % 5) * 20 + 10}%`,
                  left: `${Math.floor(index / 5) * 20 + 10}%`,
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
                src={imageSrc}
                alt="rainy"
                className="weather-icon"
                animate={{ y: [0, 1000] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: `${Math.random() * -10}%`,
                  left: `${Math.random() * 90}%`,
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
                src={imageSrc}
                alt="snowy"
                className="weather-icon"
                animate={{ rotate: 360, y: [0, 800] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: `${Math.random() * -10}%`,
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
                src={imageSrc}
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
      case "gale": // 바람이 강하게 부는 날씨
        return (
          <div className="weather-animation">
            {[...Array(10)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt="gale"
                className="weather-icon"
                animate={{
                  x: [-100, 100, -100],
                  rotate: [0, 20, -20, 0],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: `${Math.random() * 70}%`,
                  left: `${Math.random() * 100}%`,
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
