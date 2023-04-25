import React from 'react';
import StyledHeader, {
  StyledLogoSection,
  StyledCenterSection,
  StyledSettingSection,
} from './Elements';
import { TextField } from '@/components/atoms/TextField';
import Tabs from '@/components/atoms/Tabs/Tabs';
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
          <Tab icon={<StoreIcon />} /> 
          <Tab icon={<PeopleIcon />} /> 
        </Tabs>
      </StyledCenterSection>
      <StyledSettingSection>
        <Button>
          <WidgetsIcon />
        </Button>
        <Button>
          <MessageIcon />
        </Button>
        <Button>
          <WidgetsIcon />
        </Button>
      </StyledSettingSection>
    </StyledHeader>
  );
};

export default Header;
