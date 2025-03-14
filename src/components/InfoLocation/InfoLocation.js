import React, { useEffect, useState } from "react";
import "./infoLocation.css";
import axios from "axios";

const InfoLocation = () => {
  const [weather, setWeather] = useState(undefined);

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Novi%20Pazar&appid=eb207edcde405e184e80a692d027226b&units=metric`
      );

      console.log(data.weather);
      console.log(data.main);

      setWeather(data.weather);
    } catch (error) {
      console.error("error while fething weather", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className='main-container'>
      <div className='weather'>
        <h1>{weather.main.temp}</h1>
      </div>
    </div>
  );
};

export default InfoLocation;
