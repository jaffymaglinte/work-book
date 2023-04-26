import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PostItemImage from '.';
import PostImg from '@/assets/img/feed/post/sample_1.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/PostItemImage',
  component: PostItemImage,
} satisfies Meta<typeof PostItemImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    imageSrc: PostImg,
    children: 'test asdas d',
  },
};
