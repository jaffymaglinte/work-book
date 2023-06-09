import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PostItemCommentItem from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/PostItemCommentItem',
  component: PostItemCommentItem,
  argTypes: {
    onClickLike: {
      action: 'clicked',
    },
    onClickReply: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof PostItemCommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Jaffy Maglinte',
    content: 'Lorem ipsum sample',
  },
};
