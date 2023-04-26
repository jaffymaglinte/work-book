import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostItemHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .posted_by {
    font-weight: 500;
  }
  & .left_section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  & .detail_box {
    display: flex;
    align-items: center;
    color: gray;

    & .pub_pri_ico {
      margin-left: 5px;
      color: black;
    }
  }

  & .right_section button {
    color: #000;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export default StyledPostItemHeader;
