import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledLeftIconWithButton = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  button {
    display: block;
    width: 100%;
    text-align: left;
    background-color: var(--comment-background);
    color: var(--secondary-text);
    border-radius: 25px;
    text-transform: capitalize;
  }
`;

export default StyledLeftIconWithButton;
