import { BoxProps } from '@mui/material';

export default interface CreatePostProps extends BoxProps {
  imgSrc: string;
  label: string;
  onClickPhotoVideo: () => void;
  onClickFeelingActivity: () => void;
}
