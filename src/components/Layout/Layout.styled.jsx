import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e2e2e2ff;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex: 1; /* занимает всё доступное место */
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  // margin-left: 20px;
  overflow-y: auto;
`;
