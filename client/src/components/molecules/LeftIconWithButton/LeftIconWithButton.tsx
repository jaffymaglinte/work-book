import React from 'react';
import { Box } from '@mui/material';
import StyledLeftIconWithButton from './elements';
import LeftIconWithButtonProps from './types';

import { Button } from '@/components/atoms/Button';

const LeftIconWithButton = (props: LeftIconWithButtonProps) => {
  const { imageSrc, label, onClickButton, ...rest } = props;

  return (
    <StyledLeftIconWithButton {...rest}>
      <img src={imageSrc} alt="profile icon" />
      <Button onClick={onClickButton}>{label}</Button>
    </StyledLeftIconWithButton>
  );
};

export default LeftIconWithButton;
