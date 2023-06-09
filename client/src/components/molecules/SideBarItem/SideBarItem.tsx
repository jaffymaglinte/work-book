import React from 'react';
import { ListItemProps as SidebarItemProps } from '@mui/material';

// project imports
import StyledSideBarItem from './element';

const SideBarItem = ({ disablePadding = true, ...props }: SidebarItemProps) => {
  return <StyledSideBarItem disablePadding {...props}></StyledSideBarItem>;
};

export default SideBarItem;
