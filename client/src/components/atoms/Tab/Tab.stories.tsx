import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// mui icons
import InboxIcon from '@mui/icons-material/Inbox';

import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from '.';

// mui icons
import HomeIcon from '@mui/icons-material/Home';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atom/Tab',
  component: Tab,
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    icon: <HomeIcon />,
  },
};
