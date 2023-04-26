import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledCommentItem = styled(Box)`
  display: flex;
  gap: 5px;
  align-items: start;

  & .details {
    background-color: #f0f2f5;
    padding: 10px;
    border-radius: 15px;
  }
`;

export default StyledCommentItem;
