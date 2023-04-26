import { BoxProps } from '@mui/material';

export enum Status {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PUBLIC',
}
export interface PostItemHeaderProps extends BoxProps {
  profile?: string | React.ReactNode | undefined;
  postBy?: string;
  postDate?: string;
  postStatus?: Status;
  onClickClose?: (event: React.MouseEvent<HTMLElement>) => void;
}
