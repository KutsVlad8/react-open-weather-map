import {
  DayInfoWrapper,
  DayInfoList,
  DayItem,
  DayItemLabel,
  DayItemValue,
} from './DayInfo.styled';

const DayInfo = ({ forecast }) => {
  return (
    <DayInfoWrapper>
      <DayInfoList>
        <DayItem>
          <DayItemLabel>Восход</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].astro.sunrise}
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Скорость ветра</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].day.maxwind_kph} км/ч
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Давление</DayItemLabel>
          <DayItemValue> {forecast.current.pressure_mb} hPa </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Закат</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].astro.sunset}
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>Вероятность дождя</DayItemLabel>
          <DayItemValue>
            {forecast.forecast.forecastday[0].day.daily_chance_of_rain} %
          </DayItemValue>
        </DayItem>
        <DayItem>
          <DayItemLabel>УФ индекс</DayItemLabel>
          <DayItemValue>{forecast.forecast.forecastday[0].day.uv}</DayItemValue>
        </DayItem>
      </DayInfoList>
    </DayInfoWrapper>
  );
};

export default DayInfo;
