import React from 'react';
import StyledPostCommentItemList from './elements';
import PostCommentItemListProps from './types';

import PostCommentItem from '@/components/molecules/PostCommentItem';

const PostCommentItemList = (props: PostCommentItemListProps) => {
  const { data, onClickLike, onClickReply, ...rest } = props;

  return (
    <StyledPostCommentItemList {...rest}>
      {data.map((i: any) => {
        return (
          <PostCommentItem
            name={i.name}
            content={i.content}
            onClickLike={onClickLike}
            onClickReply={onClickReply}
            className="comment_item"
          />
        );
      })}
    </StyledPostCommentItemList>
  );
};

export default PostCommentItemList;
