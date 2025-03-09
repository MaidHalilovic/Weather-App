import React, { useEffect, useState } from "react";
import "./homePage.css";
import axios from "axios";

const HomePage = () => {
  const [weather, setWeather] = useState([]);

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

  return <div>HomePage</div>;
};

export default HomePage;
