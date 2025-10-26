import {
  HourlyCard,
  HourLabel,
  HourIcon,
  HourTemp,
} from './HourlyForecastCard.styled';

const HourlyForecastCard = ({ hourlyForecast }) => {
  console.log(hourlyForecast);
  return (
    <>
      {hourlyForecast.map(hour => (
        <HourlyCard key={hour.time_epoch} className="hour-block">
          <HourLabel>{hour.time.slice(-5)}</HourLabel>
          <HourIcon src={hour.condition.icon} alt={hour.condition.text} />
          <HourTemp>{hour.temp_c}°C</HourTemp>
        </HourlyCard>
      ))}
    </>
  );
};

export default HourlyForecastCard;
