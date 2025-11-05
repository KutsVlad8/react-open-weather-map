import React, { useEffect, useState } from 'react';
import cities from '../../utils/cities.json';
import { fetchRandomWeather } from '../../api/fetchForecast';
import { Title } from './RandomWeather.styled';
import WeatherList from '../../components/WeatherList/WeatherList';

const RandomWeather = () => {
  const [randomCityWeather, setrandomCityWeather] = useState(null);
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
  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {randomCityWeather ? (
        <>
          <Title>Random Weather</Title>
          <WeatherList cityWeather={randomCityWeather} />
        </>
      ) : (
        <p>загружаем города...</p>
      )}
    </>
  );
};
export default RandomWeather;
