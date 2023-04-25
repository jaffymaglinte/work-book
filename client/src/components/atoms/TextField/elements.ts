import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import styled from '@emotion/styled';

const StyledOutlinedInput = styled(OutlinedInput)`
  border-radius: 25px;
  background-color: #f0f2f5;
  & fieldset {
    border: none;
  }
`;

export { type OutlinedInputProps };
export default StyledOutlinedInput;
