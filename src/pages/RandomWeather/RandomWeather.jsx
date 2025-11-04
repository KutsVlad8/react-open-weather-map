import React, { useEffect, useState } from 'react';
import cities from '../../utils/cities.json';
import { fetchRandomWeather } from '../../api/fetchForecast';
import WeatherList from '../../components/WeatherList/WeatherList';

const RandomWeather = () => {
  const [randomCityWeather, setrandomCityWeather] = useState([]);
  const [error, setError] = useState(' ');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const randomCities = cities.sort(() => 0.5 - Math.random()).slice(0, 8);
        const data = await fetchRandomWeather(randomCities);
        setrandomCityWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  console.log(randomCityWeather);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h1>Random Weather</h1>

      <WeatherList />
    </div>
  );
};
export default RandomWeather;
