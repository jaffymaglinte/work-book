import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Button } from '@/components/atoms/Button';

const StyledProfileMenuList = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
`;

export const StyledButton = styled(Button)`
  justify-content: start;
  border-radius: 15px;
  color: var(--primary-text);
  padding: 14px 8px;
`;

export default StyledProfileMenuList;
