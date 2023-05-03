import { BoxProps } from '@mui/material';

export default interface LeftIconWithButtonProps extends BoxProps {
  imageSrc: string;
  label: string;
  onClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
