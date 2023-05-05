import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledMainLayout = styled(Box)`
  padding: 0 25px;
`;

export const MiddleContainer = styled(Box)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 240px 2fr 1fr;
  padding-top: 10px;
  width: 100%;
  max-width: 1280px;
  margin: auto;

  @media (max-width: 1030px) {
    grid-template-columns: 240px auto;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SideBarLeftWrapper = styled(Box)`
  height: 100vh;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MainWrapper = styled(Box)`
  height: 100vh;
`;

export const SideBarRightWrapper = styled(Box)`
  height: 100vh;

  @media (max-width: 1030px) {
    display: none;
  }
`;

export default StyledMainLayout;
