import React from 'react';
import StyledButton, { ButtonProps } from './elements';

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
