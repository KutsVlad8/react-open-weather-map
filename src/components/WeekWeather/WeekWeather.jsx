import {
  WeekContainer,
  DayCard,
  DayLeft,
  DayName,
  DateText,
  DayCenter,
  Icon,
  DayRight,
  TempRange,
  AvgTemp,
} from './WeekWeather.styled';

const WeekWeather = ({ forecast }) => {
  return (
    <WeekContainer>
      {forecast.forecast.forecastday.map(day => {
        const date = new Date(day.date);
        const weekday = date.toLocaleDateString('en-EN', { weekday: 'short' });
        const avg = Math.round((day.day.maxtemp_c + day.day.mintemp_c) / 2);

        return (
          <DayCard key={day.date}>
            <DayLeft>
              <DayName>{weekday[0].toUpperCase() + weekday.slice(1)}</DayName>
              <DateText>
                {date.toLocaleDateString('en-EN', {
                  day: '2-digit',
                  month: 'short',
                })}
              </DateText>
            </DayLeft>

            <DayCenter>
              <Icon src={day.day.condition.icon} alt={day.day.condition.text} />
            </DayCenter>

            <DayRight>
              <TempRange>
                ↓{Math.round(day.day.mintemp_c)}° ↑
                {Math.round(day.day.maxtemp_c)}°
              </TempRange>
              <AvgTemp>Avg {avg}°</AvgTemp>
            </DayRight>
          </DayCard>
        );
      })}
    </WeekContainer>
  );
};

export default WeekWeather;
