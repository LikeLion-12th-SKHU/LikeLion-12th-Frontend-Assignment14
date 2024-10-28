import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WeatherDisplay.css";

const weatherImages = {
  sunny: "./images/sunny.png",
  rainy: "./images/rainy.png",
  snowy: "./images/snowy.png",
  cloudy: "./images/cloudy.png",
  thunderstorm: "./images/thunder.png",
  windy: "./images/windy.png", // 바람 이미지 추가
  heatwave: "./images/heatwave.png", // 폭염 이미지 추가
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
      case "thunderstorm": // 번개 상태 추가
        return (
          <div className="weather-animation">
            {[...Array(10)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt="thunderstorm"
                className="weather-icon"
                animate={{
                  scale: [1, 1.5, 1], // 크기가 커졌다 작아지는 번개 효과
                  opacity: [1, 0.2, 1], // 깜빡이는 효과
                }}
                transition={{
                  duration: 0.8,
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

      case "windy": // 바람 상태 추가
        return (
          <div className="weather-animation">
            {[...Array(10)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt="windy"
                className="weather-icon"
                animate={{ x: [-50, 50, -50] }} // 좌우로 흔들리는 애니메이션
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2, // 아이콘이 순차적으로 흔들리도록 딜레이 추가
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

      case "heatwave": // 폭염 상태 추가
        return (
          <div className="weather-animation">
            {[...Array(5)].map((_, index) => (
              <motion.img
                key={index}
                src={imageSrc}
                alt="heatwave"
                className="weather-icon"
                animate={{
                  scale: [1, 1.05, 1], // 크기가 작게 커졌다 줄어드는 애니메이션
                  y: [-5, 5, -5], // 위아래로 흔들림
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3, // 각 이미지에 약간의 지연 추가
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

      default:
        return <div>날씨를 선택해주세요.</div>;
    }
  };

  return <div className="weather-display">{renderWeather()}</div>;
};

export default WeatherDisplay;
