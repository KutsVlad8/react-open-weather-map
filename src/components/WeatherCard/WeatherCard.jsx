import {
  Card,
  Left,
  City,
  Country,
  Temp,
  FeelsLike,
  Right,
  Icon,
  Condition,
} from './WeatherCard.styled';

// import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

const WeatherCard = ({ cityWeather }) => {
  return (
    <>
      {cityWeather.map(city => (
        <Card key={city.location.name}>
          <Left>
            <City>{city.location.name}</City>
            <Country>{city.location.country}</Country>
            <Temp>{city.current.temp_c}°C</Temp>
            <FeelsLike>Feels like:{city.current.feelslike_c}°C</FeelsLike>
          </Left>

          <Right>
            <Icon
              src={city.current.condition.icon}
              alt={city.current.condition.text}
            />
            <Condition>{city.current.condition.text}</Condition>
          </Right>
        </Card>
      ))}
    </>
  );
};

export default WeatherCard;
