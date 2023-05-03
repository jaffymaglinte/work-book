import type { Meta, StoryObj } from '@storybook/react';
import PostItemCommentItemList from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Organisms/PostItemCommentItemList',
  component: PostItemCommentItemList,
  argTypes: {
    onClickLike: {
      action: 'clicked',
    },
    onClickReply: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof PostItemCommentItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    id: 1,
    name: 'Jaffy Maglinte',
    content: 'Asa ka paingun?',
  },
  {
    id: 2,
    name: 'Jaffy Maglinte',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
  },
  {
    id: 3,
    name: 'Ernesto Baring Jr.',
    content: 'Magtaban mo?',
  },
  {
    id: 4,
    name: 'Jaffy Maglinte',
    content: 'Oh!?',
  },
  {
    id: 5,
    name: 'Ernesto Baring Jr.',
    content: 'Plete ninyo o!',
  },
];
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    data,
  },
};
