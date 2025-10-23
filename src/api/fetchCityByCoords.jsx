import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/current.json',
});
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCityByCoords = async ({ latitude, longitude }) => {
  const { data } = await api.get('', {
    params: { key: API_KEY, q: `${latitude},${longitude}`, lang: 'ru' },
  });

  return { ...data };
};
