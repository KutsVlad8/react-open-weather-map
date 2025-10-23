import React, { useEffect, useState } from 'react';
import { getUserCoordinates } from '../../utils/getUserCoordinates';
import { fetchCityByCoords } from '../../api/fetchCityByCoords';
const Location = () => {
  const [city, setCity] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const coords = await getUserCoordinates();

        const cityData = await fetchCityByCoords(coords);

        setCity({ ...cityData });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLocation();
  }, []);

  return (
    <>
      <h2>Моё местоположение</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {city ? (
        <p>
          Страна: {city.location.country}, Область: {city.location.region},
          Город:{city.location.name}
        </p>
      ) : (
        <p>Определяем местоположение...</p>
      )}
    </>
  );
};

export default Location;
