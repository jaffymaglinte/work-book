import React from 'react';
import StyledOutlinedInput, { OutlinedInputProps } from './elements';

const Component = (props: OutlinedInputProps) => {
  const { ...rest } = props;
  return <StyledOutlinedInput {...rest} />;
};

export default Component;
