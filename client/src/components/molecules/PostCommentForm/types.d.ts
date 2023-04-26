import { BoxProps } from '@mui/material';

export default interface PostCommentFormProps extends BoxProps {
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
