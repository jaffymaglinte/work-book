import React from 'react';
import StyledOutlinedInput, { OutlinedInputProps } from './elements';

const Component = ({ ...props }: OutlinedInputProps) => {
  return <StyledOutlinedInput placeholder="Please enter text" {...props} />;
};

export default Component;
