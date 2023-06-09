import { BoxProps } from '@mui/material';

export default interface PostItemProps extends BoxProps {
  item: Item;
  onClickClose: (event: React.MouseEvent<HTMLElement>) => void;
  onClickLike: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickComment: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onClickCommentLike: (event: React.MouseEvent<HTMLElement>) => void;
  onClickCommentReply: (event: React.MouseEvent<HTMLElement>) => void;
}

export enum Status {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PUBLIC',
}

export type Item = {
  profile: React.ReactNode;
  postBy: string;
  postDate: string;
  postStatus: Status;
  content: string;
  photo: string;
  comments: Comment[];
  totalLikes: number;
};

export type Comment = {
  id: number;
  name: string;
  content: string;
};
