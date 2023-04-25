import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StoryItem } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/StoryItem',
  component: StoryItem,
} satisfies Meta<typeof StoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    default: true,
    title: 'Create story',
  },
};

export const Primary: Story = {
  args: {
    title: 'Jaffy Maglinte',
  },
};
