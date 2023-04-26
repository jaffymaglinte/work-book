import { BoxProps } from '@mui/material';

export default interface CommentItemProps extends BoxProps {
  name: string;
  content: string;
}
