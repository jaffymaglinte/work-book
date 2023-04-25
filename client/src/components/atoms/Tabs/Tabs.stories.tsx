import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// mui icons
import InboxIcon from '@mui/icons-material/Inbox';

import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '.';
import { Tab } from '../Tab';

// mui icons
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atom/Tabs',
  component: Tabs,
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoChildren = () => {
  return (
    <>
      <Tab icon={<HomeIcon />} /> 
      <Tab icon={<YouTubeIcon />} /> 
      <Tab icon={<StoreIcon />} /> 
      <Tab icon={<PeopleIcon />} /> 
    </>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: <DemoChildren />,
  },
};
