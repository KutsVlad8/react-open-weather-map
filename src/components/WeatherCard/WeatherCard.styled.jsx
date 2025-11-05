import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e213a;
  color: #fff;
  padding: 20px;
  border-radius: 16px;
  width: 220px;
  height: 200px;
    transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    background-color: #232643;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const City = styled.h3`
  margin-top: 0px;
  font-size: 22px;
  font-weight: 600;
`;

export const Country = styled.p`
  margin-top: 0px;
  font-size: 14px;
`;

export const Temp = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const FeelsLike = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 13px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

export const Condition = styled.p`
  text-align: center;
  margin-top: 0px;
  font-size: 14px;
  margin-top: 6px;
`;
