import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
// import SearcCity from '../../components/SearchCity/SearchCity';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import DayWeather from '../../components/DayWeather/DayWeather';
import HourlyForecastList from '../../components/HourlyForecastList/HourlyForecastList';
import WeekWeather from '../../components/WeekWeather/WeekWeather';

import {
  WeatherLayout,
  DayForecast,
  WeekForecast,
  EnterText,
} from './Search.styled';
import { fetchForecastByCity } from '../../api/fetchForecast';

const Search = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(' ');

  const handleSearch = async query => {
    setCity(query);
  };

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      try {
        const data = await fetchForecastByCity(city);
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [city]);

  // console.log('Город:', city);
  // console.log('Погода:', weather);

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <SearchBar onSearch={handleSearch} />

      {weather ? (
        <>
          <WeatherLayout>
            <DayForecast>
              <LocationHeader forecast={weather} />
              <DayWeather forecast={weather} />
              <HourlyForecastList forecast={weather} />
            </DayForecast>
            <WeekForecast>
              <WeekWeather forecast={weather} />
            </WeekForecast>
          </WeatherLayout>
          {/* <SearcCity cityWeather={weather} /> */}
        </>
      ) : (
        <EnterText>enter city to search...</EnterText>
      )}
    </>
  );
};

export default Search;
