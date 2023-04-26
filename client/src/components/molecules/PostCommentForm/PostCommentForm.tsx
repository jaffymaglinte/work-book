import React from 'react';
import StyledPostCommentForm from './elements';
import PostCommentFormProps from './types';
import TextField from '@/components/atoms/TextField';

// mui icons
import FaceIcon from '@mui/icons-material/Face';

const CommentForm = (props: PostCommentFormProps) => {
  const { onEnter, ...rest } = props;

  return (
    <StyledPostCommentForm {...rest}>
      <FaceIcon fontSize="large" className="profile" />
      <TextField
        placeholder="Write a comment"
        size="small"
        className="comment_input"
        onKeyDown={onEnter}
      />
    </StyledPostCommentForm>
  );
};

export default CommentForm;
