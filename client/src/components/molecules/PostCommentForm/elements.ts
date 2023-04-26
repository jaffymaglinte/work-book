import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostCommentForm = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 5px;

  & .MuiInputBase-root {
    width: 100%;
  }
`;

export default StyledPostCommentForm;
