import {
  HeaderWrapper,
  Left,
  Right,
  City,
  Region,
  DateText,
  Temp,
  FeelsText,
  WeatherImg,
  WeatherText,
} from './LocationHeader.styled';

const LocationHeader = ({ forecast }) => {
  const { location, current } = forecast;
  console.log(forecast);
  const date = new Date(forecast.forecast.forecastday[0].date);
  const weekday = date.toLocaleDateString('en-EN', { weekday: 'short' });
  const dataDay = date.toLocaleDateString('en-EN', {
    day: '2-digit',
    month: 'short',
  });
  return (
    <HeaderWrapper>
      <Left>
        <City>{location.name}</City> {/* город */}
        <Region>{location.region}</Region> {/* регион */}
        <DateText>
          {dataDay}, {weekday[0].toUpperCase() + weekday.slice(1)}
        </DateText>
        {/* дата и день недели */}
        <Temp>{Math.round(current.temp_c)}°C</Temp> {/* градусы*/}
        <FeelsText>Feels like: {Math.round(current.feelslike_c)}°C</FeelsText>
        {/* ощущается как */}
      </Left>

      <Right>
        <WeatherImg
          src={forecast.current.condition.icon}
          alt={forecast.current.condition.text}
        />
        <WeatherText>{current.condition.text}</WeatherText> {/* описание */}
      </Right>
    </HeaderWrapper>
  );
};

export default LocationHeader;
