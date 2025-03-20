import React from "react";
import "./homePage.css";
import InfoLocation from "../../components/InfoLocation/InfoLocation";
import WeatherDetalis from "../../components/weatherDetalis/WeatherDetalis";

const HomePage = () => {
  return (
    <div>
      <InfoLocation />
      <WeatherDetalis />
    </div>
  );
};

export default HomePage;
