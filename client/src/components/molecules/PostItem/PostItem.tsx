import React from 'react';
import StyledPostItem from './elements';
import PostItemProps from './types';

// molecules
import PostItemHeader from '../PostItemHeader';
import PostItemDescription from '../PostItemDescription';
import PostItemImage from '../PostItemImage';
import PostItemControls from '../PostItemControls';

// organism
import PostItemCommentItemList from '@/components/organisms/PostItemCommentItemList';

const PostItem = (props: PostItemProps) => {
  const {
    item,
    comments,
    onClickClose,
    onClickComment,
    onClickLike,
    onClickCommentLike,
    onClickCommentReply,
    ...rest
  } = props;

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
      <PostItemCommentItemList
        data={comments}
        onClickLike={onClickCommentLike}
        onClickReply={onClickCommentReply}
      />
    </StyledPostItem>
  );
};

export default PostItem;
