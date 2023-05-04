import { BoxProps } from '@mui/material';
import { Item, Comment } from '../PostItem/types';

export default interface PostItemListProps extends BoxProps {
  data: {
    item: Item;
    comments: Comment[];
    totalLikes: number;
  }[];
  onClickClose: (event: React.MouseEvent<HTMLElement>) => void;
  onClickLike: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickComment: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onClickCommentLike: (event: React.MouseEvent<HTMLElement>) => void;
  onClickCommentReply: (event: React.MouseEvent<HTMLElement>) => void;
}
