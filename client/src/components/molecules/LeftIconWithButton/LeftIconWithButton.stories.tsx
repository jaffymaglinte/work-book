import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import LeftIconWithButton from '.';

// assets
import sampleProfileIcon from '@/assets/img/feed/story_profile_sample.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecule/LeftIconWithButton',
  component: LeftIconWithButton,
  argTypes: {
    onClickButton: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof LeftIconWithButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    imageSrc: sampleProfileIcon,
    label: `What's on your mind?`,
  },
};
