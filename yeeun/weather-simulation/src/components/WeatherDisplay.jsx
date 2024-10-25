import React from "react";
import { motion } from "framer-motion";
import "./WeatherDisplay.css";

const weatherImages = {
  sunny: "/images/sun.png",
  rainy: "/images/water.png",
  snowy: "/images/snowy.png",
  cloudy: "/images/free-icon-cloud-service-9696008.png",
  tornado: "/images/typhoon.png",
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
          <div className='weather-animation'>
            {[...Array(20)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt='sunny'
                className='weather-icon'
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
          <div className='weather-animation'>
            {[...Array(20)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt='rainy'
                className='weather-icon'
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
          <div className='weather-animation'>
            {[...Array(20)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt='snowy'
                className='weather-icon'
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
          <div className='weather-animation'>
            {[...Array(10)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt='cloudy'
                className='weather-icon'
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
      case "tornado":
        return (
          <div className='weather-animation'>
            {[...Array(15)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt='tornado'
                className='weather-icon'
                animate={{
                  rotate: [0, 360],
                  y: [0, -1000],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "50%",
                  transform: `translateX(${index * 15 - 100}%)`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        );

      default:
        return <div>날씨를 선택해주세요.</div>;
    }
  };

  return <div className='weather-display'>{renderWeather()}</div>;
};

export default WeatherDisplay;
