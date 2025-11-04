import styled from '@emotion/styled';

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: column; /* карточки идут вертикально вниз */
  gap: 10px;
  width: 100%;
  max-width: 320px;
`;

export const DayCard = styled.div`
  display: flex; /* всё внутри горизонтально */
  align-items: center;
  justify-content: space-around;
  background: #1e213a;
  border-radius: 12px;
  padding: 10px 14px;
  color: #f5f5f5;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

/* Левая часть (день и дата) */
export const DayLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: Center;
  gap: 2px;
`;

export const DayName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #e7e7e7;
`;

export const DateText = styled.span`
  font-size: 12px;
  color: #a3a3a3;
`;

/* Центр — иконка */
export const DayCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 44px;
  height: 44px;
`;

/* Правая часть — температуры */
export const DayRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const TempRange = styled.span`
  font-size: 12px;
  color: #b8b8b8;
`;

export const AvgTemp = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;
