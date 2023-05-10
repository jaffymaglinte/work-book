import React from 'react';
import ProfileMenuProps from './types';
import StyledProfileMenuList, { StyledButton } from './elements';

// mui icons
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileMenuList = (props: ProfileMenuProps) => {
  const { onClickSettings, onClickLogout, ...rest } = props;
  return (
    <StyledProfileMenuList {...rest}>
      <StyledButton type="button" onClick={onClickSettings}>
        <SettingsIcon />
        Settings
      </StyledButton>
      <StyledButton type="button" onClick={onClickLogout}>
        <LogoutIcon />
        Logout
      </StyledButton>
    </StyledProfileMenuList>
  );
};

export default ProfileMenuList;
