import styled from 'styled-components';

export const WeatherLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* левый блок шире */
  gap: 20px;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
`;

export const CurrentWeather = styled.div`
  background: #1e2533;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WeekForecast = styled.div`
  background: #1e2533;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
