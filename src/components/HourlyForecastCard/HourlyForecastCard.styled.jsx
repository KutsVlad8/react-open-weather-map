import styled from '@emotion/styled';

export const HourlyCard = styled.li`
  // flex: 0 0 120px; /* фиксированная ширина карточки */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  background: #f5f5f5; /* можно заменить на прозрачный или по макету */
`;

export const HourLabel = styled.span`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  color: #ffffffff;
`;

export const HourIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
`;

export const HourTemp = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #ffffffff;
`;
