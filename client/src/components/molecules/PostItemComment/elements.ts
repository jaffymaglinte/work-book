import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostItemComment = styled(Box)`
  display: flex;
  gap: 5px;
  align-items: start;

  & .details {
    position: relative;
    background-color: #f0f2f5;
    padding: 10px;
    border-radius: 15px;
  }

  & .actions {
    position: absolute;
    left: 10px;
    bottom: -20px;
    display: flex;
    gap: 10px;

    & a {
      color: #000;
      font-size: 12px;

      & :hover {
        cursor: pointer;
      }
    }
  }
`;

export default StyledPostItemComment;
