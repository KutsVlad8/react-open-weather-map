import WeatherCard from '../WeatherCard/WeatherCard';
import { List } from './WeatherList.styled';

const WeatherList = () => {
  return (
    <List>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </List>
  );
};

export default WeatherList;
