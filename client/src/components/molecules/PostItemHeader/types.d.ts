import { BoxProps } from '@mui/material';

export enum Status {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PUBLIC',
}
export interface PostItemHeaderProps extends BoxProps {
  profile: React.ReactNode;
  postBy: string;
  postDate: string;
  postStatus: Status;
  onClickClose?: (event: React.MouseEvent<HTMLElement>) => void;
}
