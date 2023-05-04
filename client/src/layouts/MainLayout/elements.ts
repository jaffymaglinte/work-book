import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledMainLayout = styled(Box)``;

export const MiddleContainer = styled(Box)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 240px 2fr 1fr;
  padding-top: 10px;
`;

export const SideBarLeftWrapper = styled(Box)`
  height: 100vh;
`;

export const MainWrapper = styled(Box)`
  height: 100vh;
`;

export const SideBarRightWrapper = styled(Box)`
  height: 100vh;
`;

export default StyledMainLayout;
