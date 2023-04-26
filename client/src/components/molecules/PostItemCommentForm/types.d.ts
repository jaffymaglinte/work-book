import { BoxProps } from '@mui/material';

export default interface PostItemCommentFormProps extends BoxProps {
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
