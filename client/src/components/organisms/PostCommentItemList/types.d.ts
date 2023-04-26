import { BoxProps } from '@mui/material';

export default interface PostCommentItemListProps extends BoxProps {
  data: Data[];
  onClickLike: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onClickReply: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
}

type Data = {
  id: number;
  name: string;
  content: string;
};
