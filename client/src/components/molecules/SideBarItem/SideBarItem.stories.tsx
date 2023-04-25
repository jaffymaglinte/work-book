import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// mui icons
import InboxIcon from '@mui/icons-material/Inbox';

import type { Meta, StoryObj } from '@storybook/react';

import { SideBarItem } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/SideBarItem',
  component: SideBarItem,
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof SideBarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoChildren = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: <DemoChildren />,
  },
};
