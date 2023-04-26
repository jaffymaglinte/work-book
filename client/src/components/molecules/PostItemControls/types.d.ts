import { BoxProps } from '@mui/material';

export default interface PostItemControlsProps extends BoxProps {
  onClickLike: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickComment: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}
