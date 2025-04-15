import React, { useEffect, useState } from "react";
import "./weatherForeCast5day.css";
import axios from "axios";

const weatherForeCast5day = () => {
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

  return <div>weatherForeCast5day</div>;
};

export default weatherForeCast5day;
