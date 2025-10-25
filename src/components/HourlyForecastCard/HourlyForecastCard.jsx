// import { } from './HourlyForecastCard.styled';

const HourlyForecastCard = ({ hourlyForecast }) => {
  console.log(hourlyForecast);
  return (
    <>
      {hourlyForecast.map(hour => (
        <li key={hour.time_epoch} className="hour-block">
          <p>{hour.time.slice(-5)}</p>
          <img src={hour.condition.icon} alt={hour.condition.text} />
          <p>{hour.temp_c}°C</p>
          <p>{hour.chance_of_rain}%</p>
        </li>
      ))}
    </>
  );
};

export default HourlyForecastCard;
