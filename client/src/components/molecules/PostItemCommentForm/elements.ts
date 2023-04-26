import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostItemCommentForm = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 5px;

  & .MuiInputBase-root {
    width: 100%;
  }
`;

export default StyledPostItemCommentForm;
