import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PostItemHeader from '.';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/PostItemHeader',
  component: PostItemHeader,
  argTypes: {
    onClickClose: { action: 'clicked' },
  },
} satisfies Meta<typeof PostItemHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    postBy: 'Everbank Vananaz',
    postDate: '2023/12/12',
    // @ts-ignore: Unreachable code error
    postStatus: 'PUBLIC',
  },
};
