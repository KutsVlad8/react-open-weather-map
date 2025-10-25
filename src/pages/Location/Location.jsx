import React, { useEffect, useState } from 'react';
import { getUserCoordinates } from '../../utils/getUserCoordinates';
import { fetchForecastByCoords } from '../../api/fetchForecastByCoords';

import LocationHeader from '../../components/LocationHeader/LocationHeader';
import DayInfo from '../../components/DayInfo/DayInfo';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';

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
        <>
          <LocationHeader forecast={city} />
          <DayInfo forecast={city} />
          <HourlyForecast forecast={city} />
        </>
      ) : (
        <p>Определяем местоположение...</p>
      )}
    </>
  );
};

export default Location;
