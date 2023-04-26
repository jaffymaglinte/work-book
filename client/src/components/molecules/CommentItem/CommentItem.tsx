import React from 'react';
import { Box, Typography } from '@mui/material';
import StyledCommentItem from './elements';
import CommentItemProps from './types';

// mui icons
import Face5Icon from '@mui/icons-material/Face5';

const CommentItem = (props: CommentItemProps) => {
  const { name, content, ...rest } = props;

  return (
    <StyledCommentItem {...rest}>
      <Box className="profile_picture">
        {/* TODO: will update after backend is implemented */}
        <Face5Icon />
      </Box>
      <Box className="details">
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="body2">{content}</Typography>
      </Box>
    </StyledCommentItem>
  );
};

export default CommentItem;
