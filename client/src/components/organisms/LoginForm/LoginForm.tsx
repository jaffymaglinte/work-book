import React from 'react';
import { Formik, Form } from 'formik';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

// mui icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';

import StyledLoginForm, { HeaderWrapper, FormWrapper } from './elements';
import LoginFormProps from './types';
import TextField from '@/components/atoms/TextField';
import { Button } from '@/components/atoms/Button';

const LoginForm = (props: LoginFormProps) => {
  const { onClickSignIn } = props;
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <StyledLoginForm>
      <HeaderWrapper>
        <Typography variant="h4">Sign in to WorkBook</Typography>
        <Typography variant="subtitle1">Lorem Ipsum generator</Typography>
      </HeaderWrapper>
      <FormWrapper>
        <Formik
          initialValues={{ email: '', password: '' }}
          // validate={(values) => {
          //   const errors: { email: string } = { email: '' };

          //   if (!values.email) {
          //     errors.email = 'Required';
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = 'Invalid email address';
          //   }
          //   return errors;
          // }}
          onSubmit={async (values) => await onClickSignIn(values)}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                name="email"
                placeholder="Email"
                size="small"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <TextField
                type={!showPassword ? 'password' : 'text'}
                name="password"
                placeholder="Password"
                size="small"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <Button
                variant="contained"
                size="large"
                type="submit"
                disabled={isSubmitting}>
                Sign In
              </Button>
            </form>
          )}
        </Formik>
      </FormWrapper>
    </StyledLoginForm>
  );
};

export default LoginForm;
