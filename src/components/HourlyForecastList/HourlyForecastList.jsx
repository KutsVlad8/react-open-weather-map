import { List } from './HourlyForecastList.styled';

import HourlyForecastCard from '../HourlyForecastCard/HourlyForecastCard';

const HourlyForecastList = ({ forecast }) => {
  const hourlyForecast = forecast.forecast.forecastday[0].hour.filter(
    (_, index) => index % 4 === 0
  );

  return (
    <List>
      <HourlyForecastCard hourlyForecast={hourlyForecast} />
    </List>
  );
};

export default HourlyForecastList;
