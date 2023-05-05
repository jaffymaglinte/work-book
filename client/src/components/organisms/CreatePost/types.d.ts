import { BoxProps } from '@mui/material';

export default interface CreatePostProps extends BoxProps {
  imgsrc: string;
  label: string;
  onClickPhotoVideo: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onClickFeelingActivity: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}
