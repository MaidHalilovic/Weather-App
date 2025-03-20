import React, { useEffect, useState } from "react";
import "./weatherDetalis.css";
import axios from "axios";

const WeatherDetalis = () => {
  const [weatherDetalis, setWeatherDetalis] = useState(undefined);

  const WeatherDetalis = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Novi%20Pazar&appid=eb207edcde405e184e80a692d027226b&units=metric`
      );

      setWeatherDetalis(data);
    } catch (error) {
      console.error("Error while fetching WeatherDetalis", error);
    }
  };

  useEffect(() => {
    WeatherDetalis();
  }, []);

  if (!weatherDetalis) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='container'>
      <h1>WeatherDetalis</h1>
      <div className='mainDiv'>
        <div className='temp'>
          <div className='card'>
            <h3>Feels like</h3>
            <h1>{weatherDetalis.main.feels_like}C°</h1>
          </div>
          <div className='card'>
            <h3>Wind Speed</h3>
            <h1>{weatherDetalis.wind.speed}km/h</h1>
          </div>
          <div className='card'>
            <h3>Humidity</h3>
            <h1>{weatherDetalis.main.humidity}%</h1>
          </div>
          <div className='card'>
            <h3>Pressure</h3>
            <h1>{weatherDetalis.main.pressure}hPa</h1>
          </div>
          <div className='card'>
            <h3>Clouds</h3>
            <h1>{weatherDetalis.clouds.all}</h1>
          </div>
          <div className='card'>
            <h3>Visibility</h3>
            <h1>{weatherDetalis.visibility / 1000} km</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetalis;
