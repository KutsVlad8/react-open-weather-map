import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e213a;
  color: #fff;
  padding: 20px 30px;
  margin-top: 20px;
  height: 200px;
  max-width: 750px;
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
  margin-bottom: 0px;
`;

export const DateText = styled.p`
  font-size: 0.95rem;
  color: #bdbdbd;
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
