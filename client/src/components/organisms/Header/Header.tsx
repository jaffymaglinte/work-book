import React from 'react';
import StyledHeader, {
  StyledLogoSection,
  StyledCenterSection,
  StyledSettingSection,
} from './elements';
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

// assets
import { sampleProfile } from '@/assets/img';

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledHeader>
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
          sx={{
            overflow: 'hidden',
            width: '40px',
            padding: '0',
          }}>
          <img src={sampleProfile} alt="profile" />
        </Button>
      </StyledSettingSection>
    </StyledHeader>
  );
};

export default Header;
