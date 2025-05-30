import React from "react";
import "./homePage.css";
import InfoLocation from "../../components/InfoLocation/InfoLocation";
import WeatherDetalis from "../../components/weatherDetalis/WeatherDetalis";
import WeatherForeCast from "../../components/weatherForeCast/WeatherForeCast";
import WeatherForeCast5day from "../../components/weatherForeCast5day/WeatherForeCast5day";

const HomePage = () => {
  return (
    <div className='main-container'>
      <div className='firstDiv'>
        <InfoLocation />
      </div>
      <div className='secondDiv'>
        <div className='thirdDiv'>
          <WeatherDetalis />
          <WeatherForeCast5day />
        </div>
        <WeatherForeCast />
      </div>
    </div>
  );
};

export default HomePage;
