import type { Meta, StoryObj } from '@storybook/react';

import CreatePost from '.';

// assets
import sampleProfileIcon from '@/assets/img/feed/story_profile_sample.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Organisms/Create Post',
  component: CreatePost,
  argTypes: {
    onClickPhotoVideo: {
      action: 'clicked',
    },
    onClickFeelingActivity: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof CreatePost>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    imgSrc: sampleProfileIcon,
    label: `What's on your mind Jaffy?`,
  },
};
