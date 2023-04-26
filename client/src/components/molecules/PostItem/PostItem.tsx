import React from 'react';
import StyledPostItem from './elements';
import PostItemProps from './types';

// molecules
import PostItemHeader from '../PostItemHeader';
import PostItemDescription from '../PostItemDescription';
import PostItemImage from '../PostItemImage';
import PostItemControls from '../PostItemControls';

const PostItem = (props: PostItemProps) => {
  const { item, onClickClose, onClickComment, onClickLike, ...rest } = props;

  return (
    <StyledPostItem {...rest}>
      <PostItemHeader
        profile={item.profile}
        postBy={item.postBy}
        postDate={item.postDate}
        postStatus={item.postStatus}
        onClickClose={onClickClose}
      />
      <PostItemDescription children={item.content} />
      <PostItemImage imageSrc={item.photo} />
      <PostItemControls
        onClickComment={onClickComment}
        onClickLike={onClickLike}
      />
    </StyledPostItem>
  );
};

export default PostItem;
