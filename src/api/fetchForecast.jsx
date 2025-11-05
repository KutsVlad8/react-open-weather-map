import axios from 'axios';

const apiForecast = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/forecast.json',
});

const apiRandomForecast = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/current.json',
});

const API_KEY = 'b53de21a856b4dbb8be174612252310';

// != Запрос на погоду по коорданатам

export const fetchForecastByCoords = async ({ latitude, longitude }) => {
  const { data } = await apiForecast.get('', {
    params: {
      key: API_KEY,
      q: `${latitude},${longitude}`,
      days: 7,
      lang: 'en',
    },
  });

  return { ...data };
};

// !!! Запрос на погоду рандомных городов

export const fetchRandomWeather = async cityArray => {
  try {
    const requests = cityArray.map(city =>
      apiRandomForecast.get('', {
        params: { key: API_KEY, q: city, lang: 'en' },
      })
    );

    const responses = await Promise.all(requests);
    return responses.map(res => res.data);
  } catch (error) {
    console.error('Error fetching random weather:', error);
    return null;
  }
};
