import React, { useEffect, useState } from "react";
import "./weatherForeCast5day.css";
import axios from "axios";

const WeatherForeCast5day = () => {
  const [foreCast5day, setForeCast5day] = useState(null);

  const fetchForecast5day = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=43.1367&lon=20.5122&appid=eb207edcde405e184e80a692d027226b&units=metric`
      );

      setForeCast5day(data);
    } catch (error) {
      console.error("Error while fetchin weather", error);
    }
  };

  useEffect(() => {
    fetchForecast5day();
  }, []);

  const getDayName = (string) => {
    const date = new Date(string);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  if (!foreCast5day) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='foreCast5day'>
      <h1>5-day weather forecast</h1>
      <div className='weatherForeCast'>
        <div className='fiveDaysTemp'>
          <div className='fiveDays'>
            <h4>{getDayName(foreCast5day.list[5].dt_txt)}</h4>
            <h4>{getDayName(foreCast5day.list[13].dt_txt)}</h4>
            <h4>{getDayName(foreCast5day.list[21].dt_txt)}</h4>
            <h4>{getDayName(foreCast5day.list[29].dt_txt)}</h4>
            <h4>{getDayName(foreCast5day.list[37].dt_txt)}</h4>
          </div>
        </div>
        <div className='tempFor5days'>
          <h4>{foreCast5day.list[0].main.temp}C°</h4>
          <h4>{foreCast5day.list[13].main.temp}C°</h4>
          <h4>{foreCast5day.list[21].main.temp}C°</h4>
          <h4>{foreCast5day.list[29].main.temp}C°</h4>
          <h4>{foreCast5day.list[37].main.temp}C°</h4>
        </div>
        <div className='weatherForeCast5days'>
          <h4>{foreCast5day.list[5].weather[0].main}</h4>
          <h4>{foreCast5day.list[13].weather[0].main}</h4>
          <h4>{foreCast5day.list[21].weather[0].main}</h4>
          <h4>{foreCast5day.list[29].weather[0].main}</h4>
          <h4>{foreCast5day.list[37].weather[0].main}</h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherForeCast5day;
