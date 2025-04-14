import axios from "axios";
import React, { useEffect, useState } from "react";
import "./weatherForeCast.css";

const WeatherForeCast = () => {
  const [forecast, setForeCast] = useState(null);

  const fetchForecast = async () => {
    try {
      const { data } =
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=43.1367&lon=20.5122&appid=eb207edcde405e184e80a692d027226b&units=metric
`);
      console.log(data);

      setForeCast(data);
    } catch (error) {
      console.error("Error while fetching weather", error);
    }
  };

  useEffect(() => {
    fetchForecast();
  }, []);

  if (!forecast) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='forecast'>
      <h1>Today’s Weather Forecast</h1>
      <div className='weathertoday'>
        <div className='txt'>
          <h4>
            <u>{forecast.list[0].dt_txt}</u>
          </h4>
          <h4>{forecast.list[0].weather[0].description}</h4>
          <h3>{forecast.list[0].main.temp}</h3>
        </div>
        <div className='txt'>
          <h4>
            <u>{forecast.list[1].dt_txt}</u>
          </h4>
          <h4>{forecast.list[0].weather[0].description}</h4>

          <h3>{forecast.list[1].main.temp}</h3>
        </div>
        <div className='txt'>
          <h4>
            <u>{forecast.list[2].dt_txt}</u>
          </h4>
          <h4>{forecast.list[0].weather[0].description}</h4>

          <h3>{forecast.list[2].main.temp}</h3>
        </div>
        <div className='txt'>
          <h4>
            <u>{forecast.list[3].dt_txt}</u>
          </h4>
          <h4>{forecast.list[0].weather[0].description}</h4>

          <h3>{forecast.list[3].main.temp}</h3>
        </div>
        <div className='txt'>
          <h4>
            <u>{forecast.list[4].dt_txt}</u>
          </h4>
          <h4>{forecast.list[0].weather[0].description}</h4>

          <h3>{forecast.list[4].main.temp}</h3>
        </div>
        <div className='txt'>
          <h4>
            <u>{forecast.list[5].dt_txt}</u>
          </h4>
          <h4>{forecast.list[5].weather[0].description}</h4>

          <h3>{forecast.list[5].main.temp}</h3>
        </div>
        <div className='txt'>
          <h4>
            <u>{forecast.list[6].dt_txt}</u>
          </h4>
          <h4>{forecast.list[6].weather[0].description}</h4>

          <h3>{forecast.list[6].main.temp}</h3>
        </div>
        <div className='txt'>
          <h4>
            <u>{forecast.list[7].dt_txt}</u>
          </h4>
          <h4>{forecast.list[7].weather[0].description}</h4>

          <h3>{forecast.list[7].main.temp}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherForeCast;
