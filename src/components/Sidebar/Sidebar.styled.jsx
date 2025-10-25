import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 90px;
  height: 76vh;
  background: linear-gradient(to bottom, #2c2c2c, #1e1e1e);
  border-radius: 10px;
  padding: 20px;
  margin-left: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NavigationItem = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;

  &.active {
    background-color: #333333;
  }

  &:hover {
    background-color: #2a2a2a;
  }
`;
