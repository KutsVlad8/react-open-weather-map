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
  return (
    <HeaderWrapper>
      <Left>
        <City>{location.name}</City> {/* город */}
        <Region>{location.region}</Region> {/* регион */}
        <DateText>{location.localtime}</DateText> {/* дата и время */}
        <Temp>{current.temp_c}°C</Temp> {/* градусы*/}
        <FeelsText>Feels like: {current.feelslike_c}°C</FeelsText>
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
