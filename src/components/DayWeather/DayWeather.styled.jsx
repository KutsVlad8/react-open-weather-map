import styled from '@emotion/styled';

export const DayInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e213a;

  padding: 20px 30px;
  margin-top: 20px;
  max-width: 750px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
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
  flex: 1 1 calc(33.333% - 10px); /* три колонки с отступами */
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
