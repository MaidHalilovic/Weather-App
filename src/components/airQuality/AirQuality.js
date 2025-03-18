import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "@mantine/core";

const AirQuality = () => {
  const [airQuality, setAirQuality] = useState(undefined);

  const fetchAirQuality = async () => {
    try {
      const { data } =
        await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=43.1367&lon=20.5122&appid=eb207edcde405e184e80a692d027226b
`);
      console.log(data);
      setAirQuality(data);
    } catch (error) {
      console.error("Erorr while fetching airQuality", error);
    }
  };

  useEffect(() => {
    fetchAirQuality();
  }, []);

  if (!airQuality) {
    return <Loader color='blue' />;
  }

  return (
    <div className='airquality'>
      <h1>
        Air Quality:
        {airQuality.list[0].main.aqi}
      </h1>
    </div>
  );
};

export default AirQuality;
