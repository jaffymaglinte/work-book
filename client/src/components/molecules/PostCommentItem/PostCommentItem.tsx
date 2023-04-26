import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import StyledCommentItem from './elements';
import PostCommentItemProps from './types';

// mui icons
import Face5Icon from '@mui/icons-material/Face5';

const PostCommentItem = (props: PostCommentItemProps) => {
  const { name, content, onClickReply, onClickLike, ...rest } = props;

  return (
    <StyledCommentItem {...rest}>
      <Box className="profile_picture">
        {/* TODO: will update after backend is implemented */}
        <Face5Icon />
      </Box>
      <Box className="details">
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="body2">{content}</Typography>
        <Box className="actions">
          <Link href="#" underline="hover" onClick={onClickLike}>
            Like
          </Link>
          <Link href="#" underline="hover" onClick={onClickReply}>
            Reply
          </Link>
        </Box>
      </Box>
    </StyledCommentItem>
  );
};

export default PostCommentItem;