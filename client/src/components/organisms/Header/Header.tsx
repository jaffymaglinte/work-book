import React from 'react';
import { Menu, MenuItem } from '@mui/material';

import StyledHeader, {
  StyledLogoSection,
  StyledCenterSection,
  StyledSettingSection,
} from './elements';
import HeaderProps from './types';

// atoms
import TextField from '@/components/atoms/TextField';
import { Tabs } from '@/components/atoms/Tabs';
import { Tab } from '@/components/atoms/Tab';
import { Button } from '@/components/atoms/Button';

// mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MessageIcon from '@mui/icons-material/Message';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

// assets
import { sampleProfile } from '@/assets/img';

const Header = (props: HeaderProps) => {
  const { profile, ...rest } = props;

  const [value, setValue] = React.useState(0);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);

  const profileObj = {
    onClick: (event: any) => {
      setAnchorElProfile(event.currentTarget);
    },
    onClickSettings: () => {
      setAnchorElProfile(null);
      profile.onClickSettings();
    },
    onClickLogout: () => {
      setAnchorElProfile(null);
      profile.onClickLogout();
    },
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledHeader {...rest}>
      <StyledLogoSection>
        <div className="app_logo">
          <FacebookIcon color="primary" fontSize="large" />
        </div>
        <TextField placeholder="Search facebook" size="small" />
      </StyledLogoSection>
      <StyledCenterSection>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab icon={<HomeIcon />} /> 
          <Tab icon={<YouTubeIcon />} /> 
          <Tab icon={<PeopleIcon />} /> 
        </Tabs>
      </StyledCenterSection>
      <StyledSettingSection>
        <Button>
          <MessageIcon />
        </Button>
        <Button>
          <NotificationsIcon />
        </Button>

        <Button
          onClick={profileObj.onClick}
          sx={{
            overflow: 'hidden',
            width: '40px',
            padding: '0',
          }}>
          <img src={sampleProfile} alt="profile" />
        </Button>
        <Menu
          anchorEl={anchorElProfile}
          open={Boolean(anchorElProfile)}
          onClose={() => setAnchorElProfile(null)}
          PaperProps={{
            style: {
              width: '250px',
            },
          }}>
          {/* Add MenuItem components with your desired options */}
          <MenuItem onClick={profileObj.onClickSettings}>
            <SettingsIcon />
            Settings
          </MenuItem>
          <MenuItem onClick={profileObj.onClickLogout}>
            <LogoutIcon />
            Logout
          </MenuItem>
        </Menu>
      </StyledSettingSection>
    </StyledHeader>
  );
};

export default Header;
