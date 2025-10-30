import styled from '@emotion/styled';

export const WeatherLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* левый блок шире */
  gap: 20px;
  height: 100%;
  box-sizing: border-box;
`;

export const DayForecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WeekForecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
