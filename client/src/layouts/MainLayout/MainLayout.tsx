import React from 'react';
import { Outlet } from 'react-router-dom';
import StyledMainLayout, {
  MainWrapper,
  MiddleContainer,
  SideBarLeftWrapper,
  SideBarRightWrapper,
} from './elements';

// organism
import { Header } from '@/components/organisms/Header';

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Header />
      <MiddleContainer>
        <SideBarLeftWrapper className="sidebar-wrapper-left">
          SIDEBAR LEFT
        </SideBarLeftWrapper>

        <MainWrapper>
          <Outlet />
        </MainWrapper>

        <SideBarRightWrapper className="sidebar-wrapper-left">
          SIDEBAR RIGHT
        </SideBarRightWrapper>
      </MiddleContainer>
    </StyledMainLayout>
  );
};

export default MainLayout;
