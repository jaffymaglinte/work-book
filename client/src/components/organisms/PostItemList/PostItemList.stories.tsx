import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PostItemList from '.';
import { Item, Comment } from '../PostItem/types';

// mui icons
import FaceIcon from '@mui/icons-material/Face';

// assets
import PostImg from '@/assets/img/feed/post/sample_1.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Organisms/PostItemList',
  component: PostItemList,
  argTypes: {
    onClickClose: {
      action: 'clicked',
    },
    onClickLike: {
      action: 'clicked',
    },
    onClickComment: {
      action: 'clicked',
    },
    onClickCommentLike: {
      action: 'clicked',
    },
    onClickCommentReply: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof PostItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

const comments: Comment[] = [
  { id: 1, name: 'Jaffy Maglinte', content: 'Lorem ipsum' },
  { id: 2, name: 'Jaffy Maglinte', content: 'Lorem ipsum 2' },
  { id: 3, name: 'Jaffy Maglinte', content: 'Lorem ipsum 3' },
];
const totalLikes: number = 5;

let data: Item[] = [];
for (let i = 0; i <= 10; i++) {
  data = [
    // @ts-ignore: Unreachable code error
    ...data,
    {
      profile: <FaceIcon />,
      postBy: `Jaffy Maglinte ${i + 1}`,
      postDate: '2023/10/21',
      content: `In ReactJS with TypeScript, ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean. It is defined in the react module and can be used to specify the type of a variable that can hold any of these types.`,
      // @ts-ignore: Unreachable code error
      postStatus: 'PUBLIC',
      photo: PostImg,
      comments,
      totalLikes,
    },
  ];
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data,
  },
};
