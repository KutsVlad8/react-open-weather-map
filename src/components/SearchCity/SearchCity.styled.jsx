import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #1e213a;
  color: #fff;
  padding: 20px 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
  max-width: 800px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const City = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Region = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 4px;
  margin-bottom: 0px;
`;

export const DateText = styled.p`
  font-size: 0.95rem;
  color: #bdbdbd;
  margin-top: 4px;
  margin-bottom: 0px;
`;

export const Temp = styled.p`
  font-size: 2.6rem;
  font-weight: 700;
  margin-top: 4px;
  margin-bottom: 0px;
`;

export const FeelsText = styled.p`
  font-size: 0.95rem;
  color: #bdbdbd;
  margin-top: 4px;
  margin-bottom: 0px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
`;

export const WeatherImg = styled.img`
  width: 150px;
  height: 150px;
`;

export const WeatherText = styled.p`
  font-size: 1.1rem;
  margin-top: 8px;
`;

export const DayInfoList = styled.ul`
  width: 750px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap; /* чтобы строки были автоматически */
  gap: 15px 10px; /* расстояние между строками и колонками */
  padding: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 90px;
  list-style: none;
`;

export const DayItem = styled.li`
  flex: 1 1 calc(25% - 10px); /* три колонки с отступами */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

export const DayItemLabel = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #bdbdbd;
  margin-bottom: 5px;
`;

export const DayItemValue = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;
