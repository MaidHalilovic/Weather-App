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
        {/* <h1>{forecast.list[0].dt_txt}</h1> */}
      </div>
    </div>
  );
};

export default WeatherForeCast;
