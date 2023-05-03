import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledCreatePost = styled(Box)`
  padding: 12px 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

export const ActionWrapper = styled(Box)`
  padding: 20px 0 0 0;
  display: flex;
  gap: 5px;
  justify-content: center;

  & button {
    /* width: 100%; */
  }
`;

export default StyledCreatePost;
