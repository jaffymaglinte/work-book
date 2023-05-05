import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledPostItemImage = styled(Box)`
  height: 600px;
  font-size: 0;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default StyledPostItemImage;
