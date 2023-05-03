import type { Meta, StoryObj } from '@storybook/react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { SideBarItemList } from '.';
import { SideBarItem } from '@/components/molecules/SideBarItem';

// mui icons
import InboxIcon from '@mui/icons-material/Inbox';
import FaceIcon from '@mui/icons-material/Face';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Organisms/SideBarItemList',
  component: SideBarItemList,
} satisfies Meta<typeof SideBarItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: { icon: React.ReactNode; primary: string }[] = [
  {
    primary: 'Jaffy Maglinte',
    icon: <FaceIcon />,
  },
  {
    primary: 'Friends',
    icon: <GroupIcon />,
  },
  {
    primary: 'Saved',
    icon: <BookmarkIcon />,
  },
];

const DemoChildren = () => {
  return (
    <>
      {data.map((i: any) => {
        return (
          <SideBarItem>
            <ListItemButton>
              <ListItemIcon>{i.icon}</ListItemIcon>
              <ListItemText primary={i.primary} />
            </ListItemButton>
          </SideBarItem>
        );
      })}
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    children: <DemoChildren />,
  },
};
