import React from 'react';
import StyledPostItemCommentList from './elements';
import PostItemCommentListProps from './types';

import PostItemComment from '@/components/molecules/PostItemComment';

const PostCommentItemList = (props: PostItemCommentListProps) => {
  const { data, onClickLike, onClickReply, ...rest } = props;

  return (
    <StyledPostItemCommentList {...rest}>
      {data.map((i: any) => {
        return (
          <PostItemComment
            name={i.name}
            content={i.content}
            onClickLike={onClickLike}
            onClickReply={onClickReply}
            className="comment_item"
          />
        );
      })}
    </StyledPostItemCommentList>
  );
};

export default PostCommentItemList;
