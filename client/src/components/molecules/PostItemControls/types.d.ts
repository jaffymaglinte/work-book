import { BoxProps } from '@mui/material';

export default interface PostItemControlsProps extends BoxProps {
  totalLikes: number;
  totalComments: number;
  onClickLike: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickComment: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}
