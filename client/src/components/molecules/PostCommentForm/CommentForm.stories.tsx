import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PostCommentForm from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/PostCommentForm',
  component: PostCommentForm,
  argTypes: {
    onEnter: {
      action: 'onKeyDown',
    },
  },
} satisfies Meta<typeof PostCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // onEnter: (e) => console.log(e),
  },
};
