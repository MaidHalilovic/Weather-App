import React, { useEffect, useState } from "react";
import "./infoLocation.css";
import axios from "axios";
import AirQuality from "../airQuality/AirQuality";

import { Loader } from "@mantine/core";

const InfoLocation = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Novi%20Pazar&appid=eb207edcde405e184e80a692d027226b&units=metric`
      );

      console.log(data);
      console.log(data.weather);

      setWeather(data);
    } catch (error) {
      console.error("error while fething weather", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <Loader color='blue' type='dots' />;
  }

  return (
    <div className='montserrat'>
      <div className='location'>
        <h1>{weather.name}</h1>
        <div className='weather-main'>
          <h2>{weather.main.temp}C°</h2>
          <h3>{weather.weather[0].description}</h3>
        </div>
      </div>
      <div className='weatherContainer'>
        <div className='weather'>
          <h1>{weather.weather[0].main}</h1>
          <h1>{weather.main.temp_min}C°</h1>

          <h1>{weather.main.temp_max}C°</h1>
        </div>
        <div className='airQuality'>
          <AirQuality />
        </div>
      </div>
    </div>
  );
};

export default InfoLocation;
