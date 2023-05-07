import type { Meta, StoryObj } from '@storybook/react';
import Home from '.';
import { dummyPostItemListObj } from './dummyData';

// assets
import { sampleProfile, storySampleImg, storyIcon } from '@/assets/img';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Templates/Home',
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  args: {
    postProps: {
      ...dummyPostItemListObj,
      onClickClose: () => {},
      onClickLike: () => {},
      onClickComment: () => {},
      onClickCommentLike: () => {},
      onClickCommentReply: () => {},
    },
    createPost: {
      imgsrc: sampleProfile,
      label: `What's on your mind User?`,
      onClickPhotoVideo: () => {},
      onClickFeelingActivity: () => {},
    },
  },
};
