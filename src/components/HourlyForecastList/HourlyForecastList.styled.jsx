import styled from '@emotion/styled';

export const HourlyWeatherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e213a;
  color: #fff;
  padding: 20px 30px;
  margin-top: 20px;
  height: 165px;
  max-width: 750px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

export const HourlyWeatherList = styled.ul`
  width: 750px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  overflow-x: auto; /* чтобы можно было скроллить при малой ширине */
`;
