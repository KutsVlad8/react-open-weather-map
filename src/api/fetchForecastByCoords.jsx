import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/forecast.json',
});
const API_KEY = 'b53de21a856b4dbb8be174612252310';

export const fetchForecastByCoords = async ({ latitude, longitude }) => {
  const { data } = await api.get('', {
    params: {
      key: API_KEY,
      q: `${latitude},${longitude}`,
      days: 7,
      lang: 'en',
    },
  });

  return { ...data };
};
