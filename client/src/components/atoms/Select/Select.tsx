import React from 'react';
import { MenuItem, FormControl } from '@mui/material';
import StyledSelect from './elements';
import SelectProps from './types';

const Select = (props: SelectProps) => {
  const { dataSource, dataTextField, dataValueField, ...rest } = props;
  return (
    <StyledSelect {...rest}>
      {dataSource.map((i: any) => {
        return (
          <MenuItem value={i[dataValueField]}>{i[dataTextField]}</MenuItem>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
