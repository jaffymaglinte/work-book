import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PostItemControls from '.';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/PostItemControls',
  component: PostItemControls,
  argTypes: {
    onClickLike: { action: 'clicked' },
    onClickComment: { action: 'clicked' },
  },
} satisfies Meta<typeof PostItemControls>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    totalLikes: 25,
    totalComments: 32,
  },
};
