import React, { useEffect, useState } from 'react';
import { getUserCoordinates } from '../../utils/getUserCoordinates';
import { fetchForecastByCoords } from '../../api/fetchForecast';

import { WeatherLayout, DayForecast, WeekForecast } from './Location.styled';

import LocationHeader from '../../components/LocationHeader/LocationHeader';
import DayWeather from '../../components/DayWeather/DayWeather';
import HourlyForecastList from '../../components/HourlyForecastList/HourlyForecastList';
import WeekWeather from '../../components/WeekWeather/WeekWeather';

const Location = () => {
  const [city, setCity] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const coords = await getUserCoordinates();

        const cityData = await fetchForecastByCoords(coords);

        setCity({ ...cityData });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLocation();
  }, []);

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {city ? (
        <WeatherLayout>
          <DayForecast>
            <LocationHeader forecast={city} />
            <DayWeather forecast={city} />
            <HourlyForecastList forecast={city} />
          </DayForecast>
          <WeekForecast>
            <WeekWeather forecast={city} />
          </WeekForecast>
        </WeatherLayout>
      ) : (
        <p>Определяем местоположение...</p>
      )}
    </>
  );
};

export default Location;
