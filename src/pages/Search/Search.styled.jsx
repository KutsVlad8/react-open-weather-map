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
  justify-content: flex-start;
`;

export const WeekForecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EnterText = styled.p`
  font-size: 25px;
  margin-left: 10px;
`;
