import React from 'react';
import { Box, IconButton } from '@mui/material';
import StyledPostItemControls from './elements';
import PostItemControlsProps from './types';
import { Button } from '@/components/atoms/Button';

// mui icons
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const PostItemControls = (props: PostItemControlsProps) => {
  const { onClickComment, onClickLike, ...rest } = props;
  return (
    <StyledPostItemControls {...rest}>
      <Box className="control_header">
        <Box className="control_box1">
          <IconButton className="control_icon">
            <ThumbUpOutlinedIcon />
          </IconButton>
          <Box>209</Box>
        </Box>
        <Box className="control_box">38 comments</Box>
      </Box>
      <Box className="actions">
        <Button onClick={onClickLike} startIcon={<ThumbUpOutlinedIcon />}>
          Like
        </Button>
        <Button
          onClick={onClickComment}
          startIcon={<ChatBubbleOutlineOutlinedIcon />}>
          Comment
        </Button>
      </Box>
    </StyledPostItemControls>
  );
};

export default PostItemControls;
