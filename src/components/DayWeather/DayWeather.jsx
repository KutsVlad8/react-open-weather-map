import {
  DayInfoWrapper,
  DayInfoList,
  DayItem,
  DayItemLabel,
  DayItemValue,
} from './DayWeather.styled';

const DayWeather = ({ forecast }) => {
  return (
    <DayInfoWrapper>
      <DayInfoList>
        <DayItem>
          <DayItemLabel>Sunrise</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].astro.sunrise}
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Wind Speed</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].day.maxwind_kph} км/ч
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Pressure</DayItemLabel>
          <DayItemValue> {forecast.current.pressure_mb} hPa </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Sunset</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].astro.sunset}
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Chance of Rain</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].day.daily_chance_of_rain} %
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>UV Index</DayItemLabel>
          <DayItemValue>{forecast.forecast.forecastday[0].day.uv}</DayItemValue>
        </DayItem>
      </DayInfoList>
    </DayInfoWrapper>
  );
};

export default DayWeather;
