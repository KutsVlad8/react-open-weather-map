import WeatherCard from '../WeatherCard/WeatherCard';
import { List } from './WeatherList.styled';

const WeatherList = ({ cityWeather }) => {
  return (
    <List>
      <WeatherCard cityWeather={cityWeather} />
    </List>
  );
};

export default WeatherList;
