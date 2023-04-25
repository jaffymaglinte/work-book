import React from 'react';
import StyledStoryItem from './elements';
import { Typography, Box } from '@mui/material';
import { StoryItemProps } from './types';
// mui icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

const StoryItem = ({ ...props }: StoryItemProps) => {
  const { title, img, profile } = props;
  return (
    <StyledStoryItem {...props}>
      <Box className="profile">
        <img src={img} alt="profile" />
      </Box>
      <Box className="img_con">
        <img src={profile} alt="man smiling" />
      </Box>
      <AddCircleIcon className="add_icon" color="primary" />
      <Typography variant="h6">{title}</Typography>
    </StyledStoryItem>
  );
};

export default StoryItem;
