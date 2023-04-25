import React from 'react';
import StyledStoryItem from './elements';
import { Typography, Box } from '@mui/material';
import { StoryItemProps } from './types';
// mui icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

// assets
import profileImg from '@/assets/img/feed/story_sample.jpeg';
import storyIcon from '@/assets/img/feed/story_profile_sample.jpeg';

const StoryItem = ({ ...props }: StoryItemProps) => {
  const { title } = props;
  return (
    <StyledStoryItem {...props}>
      <Box className="profile">
        <img src={storyIcon} alt="profile" />
      </Box>
      <Box className="img_con">
        <img src={profileImg} alt="man smiling" />
      </Box>
      <AddCircleIcon className="add_icon" color="primary" />
      <Typography variant="h6">{title}</Typography>
    </StyledStoryItem>
  );
};

export default StoryItem;
