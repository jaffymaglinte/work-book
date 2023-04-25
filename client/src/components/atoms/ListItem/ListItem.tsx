import React from 'react';
import StyledListItem, { StyledListItemProps } from './elements';

const ListItem = ({ ...props }: StyledListItemProps) => {
  return <StyledListItem {...props} />;
};

export default ListItem;
