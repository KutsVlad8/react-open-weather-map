import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

import { LayoutContainer, ContentWrapper, MainContent } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
