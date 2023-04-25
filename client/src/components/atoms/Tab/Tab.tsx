import React from 'react';
import StyledTab, { StyledTabProps } from './elements';

const Tab = ({ ...props }: StyledTabProps) => {
  return <StyledTab {...props} />;
};

export default Tab;
