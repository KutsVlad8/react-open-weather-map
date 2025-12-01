import React from 'react';
import {
  HeaderWrapper,
  Left,
  City,
  Region,
  DateText,
  Temp,
  FeelsText,
  Right,
  WeatherImg,
  WeatherText,
  DayInfoList,
  DayItem,
  DayItemLabel,
  DayItemValue,
} from './SearchCity.styled';

const SearcCity = ({ cityWeather }) => {
  console.log(cityWeather);

  const date = new Date(cityWeather.forecast.forecastday[0].date);
  const weekday = date.toLocaleDateString('en-EN', { weekday: 'short' });
  const dataDay = date.toLocaleDateString('en-EN', {
    day: '2-digit',
    month: 'short',
  });

  return (
    <HeaderWrapper>
      <Left>
        <City>{cityWeather.location.name}</City> {/* город */}
        <Region>{cityWeather.location.region}</Region> {/*регион */}
        <DateText>
          {dataDay}, {weekday[0].toUpperCase() + weekday.slice(1)}
        </DateText>
        {/* дата и день недели */}
        <Temp>{Math.round(cityWeather.current.temp_c)}°C</Temp> {/* градусы */}
        <FeelsText>
          Feels like: {Math.round(cityWeather.current.feelslike_c)}°C
        </FeelsText>
        {/* ощущается как */}
      </Left>

      <Right>
        <WeatherImg
          src={cityWeather.current.condition.icon}
          alt={cityWeather.current.condition.text}
        />
        <WeatherText>{cityWeather.current.condition.text}</WeatherText>{' '}
        {/*описание */}
      </Right>

      <>
        <DayInfoList>
          <DayItem>
            <DayItemLabel>Sunrise</DayItemLabel>
            <DayItemValue>
              {cityWeather.forecast.forecastday[0].astro.sunrise}
            </DayItemValue>
          </DayItem>
          <DayItem>
            <DayItemLabel>Wind Speed</DayItemLabel>
            <DayItemValue>
              {cityWeather.forecast.forecastday[0].day.maxwind_kph} km/h
            </DayItemValue>
          </DayItem>
          <DayItem>
            <DayItemLabel>Pressure</DayItemLabel>
            <DayItemValue> {cityWeather.current.pressure_mb} hPa </DayItemValue>
          </DayItem>
          <DayItem>
            <DayItemLabel>Humidity</DayItemLabel>
            <DayItemValue>{cityWeather.current.humidity}</DayItemValue>
          </DayItem>
          <DayItem>
            <DayItemLabel>Sunset</DayItemLabel>
            <DayItemValue>
              {cityWeather.forecast.forecastday[0].astro.sunset}
            </DayItemValue>
          </DayItem>
          <DayItem>
            <DayItemLabel>Chance of Rain</DayItemLabel>
            <DayItemValue>
              {cityWeather.forecast.forecastday[0].day.daily_chance_of_rain} %
            </DayItemValue>
          </DayItem>
          <DayItem>
            <DayItemLabel>UV Index</DayItemLabel>
            <DayItemValue>
              {cityWeather.forecast.forecastday[0].day.uv}
            </DayItemValue>
          </DayItem>
          <DayItem>
            <DayItemLabel>Visibility</DayItemLabel>
            <DayItemValue>{cityWeather.current.vis_km} km</DayItemValue>
          </DayItem>
        </DayInfoList>
      </>
    </HeaderWrapper>
  );
};

export default SearcCity;
