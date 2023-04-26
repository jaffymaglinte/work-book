import React from 'react';
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
      <Button onClick={onClickLike} startIcon={<ThumbUpOutlinedIcon />}>
        Like
      </Button>
      <Button
        onClick={onClickComment}
        startIcon={<ChatBubbleOutlineOutlinedIcon />}>
        Comment
      </Button>
    </StyledPostItemControls>
  );
};

export default PostItemControls;
