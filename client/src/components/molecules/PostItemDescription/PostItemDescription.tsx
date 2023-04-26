import React from 'react';
import StyledPostItemDescription from './elements';
import PostItemDescriptionProps from './types';

const PostItemDescription = (props: PostItemDescriptionProps) => {
  const { ...rest } = props;
  return <StyledPostItemDescription {...rest} />;
};

export default PostItemDescription;
