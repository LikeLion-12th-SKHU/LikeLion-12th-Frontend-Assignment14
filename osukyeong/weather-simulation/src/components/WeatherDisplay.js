import React from "react";
import { motion } from "framer-motion";
import "./WeatherDisplay.css";

const weatherImages = {
  sunny: "/images/sunny.png",
  rainy: "/images/rainy.png",
  snowy: "/images/snowy.png",
  cloudy: "/images/cloudy.png",
  thunderstorm: "/images/thunderstorm.png",
  rainbow: "/images/rainbow.png",
  cherryBlossom: "/images/cherryBlossom.png",
  dust: "/images/dust.png",
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
                  top: `${Math.random() * 10}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        );
        case "rainbow":
            return (
              <div className="weather-animation">
                {[...Array(20)].map((_, index) => (
                  <motion.img
                    key={index}
                    src={imageSrc}
                    alt="rainbow"
                    className="weather-icon"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: "absolute",
                      top: `${(index % 5) * 30 - 10}%`,
                      left: `${Math.floor(index / 5) * 20 + 20}%`,
                    }}
                  />
                ))}
              </div>
            );
            case "cherryBlossom":
                return (
                  <div className="weather-animation">
                    {[...Array(20)].map((_, index) => (
                      <motion.img
                        key={index}
                        src={imageSrc}
                        alt="cherryBlossom"
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
        case "dust":
            return (
              <div className="weather-animation">
                {[...Array(10)].map((_, index) => (
                  <motion.img
                    key={index}
                    src={imageSrc}
                    alt="dust"
                    className="weather-icon"
                    animate={{ x: [0, 100, -100, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      top: `${Math.random() * 30}%`,
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
