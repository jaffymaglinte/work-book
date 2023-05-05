import React from 'react';
import StyledPostItem from './elements';
import PostItemProps from './types';

// molecules
import PostItemHeader from '@/components/molecules/PostItemHeader';
import PostItemDescription from '@/components/molecules/PostItemDescription';
import PostItemImage from '@/components/molecules/PostItemImage';
import PostItemControls from '@/components/molecules/PostItemControls';

// organism
import PostItemCommentItemList from '@/components/organisms/PostItemCommentItemList';

const PostItem = (props: PostItemProps) => {
  const {
    item,
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
        totalLikes={item.totalLikes}
        totalComments={item.comments.length}
        onClickComment={onClickComment}
        onClickLike={onClickLike}
      />
      <PostItemCommentItemList
        data={item.comments}
        onClickLike={onClickCommentLike}
        onClickReply={onClickCommentReply}
      />
    </StyledPostItem>
  );
};

export default PostItem;
