import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PostItemComment from '.';

// mui icons
import Face6Icon from '@mui/icons-material/Face6';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/PostItemComment',
  component: PostItemComment,
  argTypes: {
    onClickLike: {
      action: 'clicked',
    },
    onClickReply: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof PostItemComment>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Jaffy Maglinte',
    content: 'Lorem ipsum sample',
  },
};
