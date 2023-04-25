import React from 'react';
import { ListProps as SideBarItemListProps } from '@mui/material';
import StyledList from './elements';

const SideBarItemList = ({ ...props }: SideBarItemListProps) => {
  return <StyledList {...props} />;
};

export default SideBarItemList;
