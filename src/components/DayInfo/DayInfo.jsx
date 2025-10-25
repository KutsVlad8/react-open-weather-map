import { List } from './DayInfo.styled';

const DayInfo = ({ forecast }) => {
  return (
    <>
      <List>
        <li>
          <p> {forecast.forecast.forecastday[0].astro.sunrise} </p>
        </li>
        <li>
          <p> {forecast.forecast.forecastday[0].astro.sunset} </p>
        </li>
        <li>
          <p>moon phase {forecast.forecast.forecastday[0].astro.moon_phase} </p>
        </li>
        <li>
          <p> {forecast.forecast.forecastday[0].day.avghumidity} </p>
        </li>
        <li>
          <p> {forecast.forecast.forecastday[0].day.maxwind_kph} </p>
        </li>
        <li>
          <p> {forecast.current.wind_dir} </p>
        </li>
        <li>
          <p> {forecast.current.pressure_mb} </p>
        </li>
        <li>
          <p> {forecast.forecast.forecastday[0].astro.moon_phase} </p>
        </li>
        <li>
          <p> {forecast.forecast.forecastday[0].day.daily_chance_of_rain} </p>
        </li>
        <li>
          <p> {forecast.forecast.forecastday[0].day.totalprecip_mm} mm</p>
        </li>
      </List>
    </>
  );
};

export default DayInfo;
