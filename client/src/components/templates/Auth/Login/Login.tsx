import React from 'react';
import { Typography } from '@mui/material';

import StyledLogin, { HeaderWrapper } from './elements';
import LoginProps from './types';

// organisms
import LoginForm from '@/components/organisms/LoginForm';

const Login = (props: LoginProps) => {
  const { onClickSignIn, ...rest } = props;
  return (
    <StyledLogin {...rest}>
      <HeaderWrapper>
        <Typography variant="h4">Sign in to WorkBook</Typography>
        <Typography variant="subtitle1">Lorem Ipsum generator</Typography>
      </HeaderWrapper>
      <LoginForm onClickSignIn={onClickSignIn} />
    </StyledLogin>
  );
};

export default Login;
