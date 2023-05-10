import { BoxProps } from '@mui/material';

export default interface HeaderProps extends HeaderProps {
  profile: Profile;
}

type Profile = {
  onClickSettings: () => void;
  onClickLogout: () => void;
};
