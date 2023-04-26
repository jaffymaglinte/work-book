import { BoxProps } from '@mui/material';

export default interface PostCommentItemProps extends BoxProps {
  name: string;
  content: string;
  onClickLike: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onClickReply: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
}
