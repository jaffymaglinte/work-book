import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostItemControls = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;

  button {
    color: black;
  }
`;

export default StyledPostItemControls;
