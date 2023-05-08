import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledHeader = styled(Box)`
  padding: 0 25px;
  background-color: var(--nav-bar-background);
  position: relative;
  height: 56px;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledLogoSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 25px;
  top: 8px;
  width: auto;

  & input {
  }
`;

export const StyledCenterSection = styled(Box)``;

export const StyledSettingSection = styled(Box)`
  display: flex;
  align-items: end;
  gap: 5px;
  position: absolute;
  right: 25px;
  top: 8px;
  width: auto;

  & button {
    min-width: 40px;
    height: 40px;
    color: var(--fds-button-text);
    background-color: #e4e6eb;
    border-radius: 50%;

    svg {
      font-size: 20px;
    }
  }
`;

export default StyledHeader;
