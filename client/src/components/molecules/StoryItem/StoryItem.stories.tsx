import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StoryItem } from '.';

// assets
import profileImg from '@/assets/img/feed/story_sample.jpeg';
import storyIcon from '@/assets/img/feed/story_profile_sample.jpeg';

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
    profile: profileImg,
    img: storyIcon,
  },
};

export const Primary: Story = {
  args: {
    title: 'Jaffy Maglinte',
    profile: profileImg,
    img: storyIcon,
  },
};
