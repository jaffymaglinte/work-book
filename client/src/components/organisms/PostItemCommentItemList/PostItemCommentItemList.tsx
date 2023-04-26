import React from 'react';
import StyledPostItemCommentItemList from './elements';
import PostItemCommentItemListProps from './types';

import PostItemCommentItem from '@/components/molecules/PostItemCommentItem';

const PostItemCommentItemList = (props: PostItemCommentItemListProps) => {
  const { data, onClickLike, onClickReply, ...rest } = props;

  return (
    <StyledPostItemCommentItemList {...rest}>
      {data.map((i: any) => {
        return (
          <PostItemCommentItem
            name={i.name}
            content={i.content}
            onClickLike={onClickLike}
            onClickReply={onClickReply}
            className="comment_item"
          />
        );
      })}
    </StyledPostItemCommentItemList>
  );
};

export default PostItemCommentItemList;
