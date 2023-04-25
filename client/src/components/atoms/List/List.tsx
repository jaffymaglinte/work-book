import React from 'react';
import StyledList, { StyledListProps } from './elements';

const List = ({ ...props }: StyledListProps) => {
  return <StyledList {...props} />;
};

export default List;
