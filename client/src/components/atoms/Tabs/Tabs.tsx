import React from 'react';
import StyledTabs, { StyledTabsProps } from './elements';

const Tabs = ({ ...props }: StyledTabsProps) => {
  return <StyledTabs {...props} />;
};

export default Tabs;
