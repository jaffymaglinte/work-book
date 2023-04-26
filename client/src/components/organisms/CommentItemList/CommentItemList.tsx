import React from 'react';
import StyledCommentItemList from './elements';
import CommentItemListProps from './types';

import CommentItem from '@/components/molecules/CommentItem';

const CommentItemList = (props: CommentItemListProps) => {
  const { data, onClickLike, onClickReply, ...rest } = props;

  return (
    <StyledCommentItemList {...rest}>
      {data.map((i: any) => {
        return (
          <CommentItem
            name={i.name}
            content={i.content}
            onClickLike={onClickLike}
            onClickReply={onClickReply}
            className="comment_item"
          />
        );
      })}
    </StyledCommentItemList>
  );
};

export default CommentItemList;
