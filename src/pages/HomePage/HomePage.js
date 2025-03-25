import React from "react";
import "./homePage.css";
import InfoLocation from "../../components/InfoLocation/InfoLocation";
import WeatherDetalis from "../../components/weatherDetalis/WeatherDetalis";

const HomePage = () => {
  return (
    <div className='main-container'>
      <div className='firstDiv'>
        <InfoLocation />
      </div>
      <div className='secondDiv'>
        <WeatherDetalis />
      </div>
    </div>
  );
};

export default HomePage;
