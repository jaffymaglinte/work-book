import React from 'react';
import StyledPostItemCommentForm from './elements';
import PostItemCommentFormProps from './types';
import TextField from '@/components/atoms/TextField';

// mui icons
import FaceIcon from '@mui/icons-material/Face';

const PostItemCommentForm = (props: PostItemCommentFormProps) => {
  const { onEnter, ...rest } = props;

  return (
    <StyledPostItemCommentForm {...rest}>
      <FaceIcon fontSize="large" className="profile" />
      <TextField
        placeholder="Write a comment"
        size="small"
        className="comment_input"
        onKeyDown={onEnter}
      />
    </StyledPostItemCommentForm>
  );
};

export default PostItemCommentForm;
