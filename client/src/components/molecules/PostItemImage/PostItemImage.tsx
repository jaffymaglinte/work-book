import React from 'react';
import { Box } from '@mui/material';
import StyledPostItemImage from './elements';
import PostItemImageProps from './types';

const PostItemImage = (props: PostItemImageProps) => {
  const { imageSrc, children, ...rest } = props;
  return (
    <StyledPostItemImage {...rest}>
      {!!imageSrc ? <img src={imageSrc} alt="post image" /> : children}
    </StyledPostItemImage>
  );
};

export default PostItemImage;
