import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

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

  console.log('Город:', city);
  console.log('Погода:', weather);

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <SearchBar onSearch={handleSearch} />
      {weather ? (
        <>
          <h1>{weather.location.name}</h1>
          <h2>{weather.location.country}</h2>
        </>
      ) : (
        <p>загружаем города...</p>
      )}
    </>
  );
};

export default Search;
