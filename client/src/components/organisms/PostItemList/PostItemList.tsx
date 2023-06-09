import React from 'react';
import StyledPostItemList from './elements';
import PostItemListProps from './types';

// organisms
import PostItem, { PostItemProps, Item } from '../PostItem';

const PostItemList = (props: PostItemListProps) => {
  const {
    data,
    onClickClose,
    onClickLike,
    onClickComment,
    onClickCommentReply,
    onClickCommentLike,
  } = props;

  return (
    <StyledPostItemList>
      {data.map((item: Item, index: number) => {
        const postItemObj: PostItemProps = {
          item: item,
          onClickClose: () => {},
          onClickLike,
          onClickComment,
          onClickCommentLike,
          onClickCommentReply,
        };

        return <PostItem {...postItemObj} key={index} />;
      })}
    </StyledPostItemList>
  );
};

export default PostItemList;
