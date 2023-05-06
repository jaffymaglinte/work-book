import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledLoginForm = styled.div`
  width: 100%;
  max-width: 760px;
  margin: auto;
`;

export const HeaderWrapper = styled(Box)`
  text-align: center;
  margin: 0 auto 25px;
`;

export const FormWrapper = styled(Box)`
  width: 100%;
  max-width: 360px;
  margin: auto;

  & form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .MuiInputBase-root {
      width: 100%;
    }
  }
`;

export default StyledLoginForm;
