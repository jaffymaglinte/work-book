import type { Meta, StoryObj } from '@storybook/react';
import StoryItemList from '.';

import { StoryItem } from '@/components/molecules/StoryItem';
import { Story as _Story } from './types';

// assets
import profileImg from '@/assets/img/feed/story_sample.jpeg';
import storyIcon from '@/assets/img/feed/story_profile_sample.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Organisms/StoryItemList',
  component: StoryItemList,
} satisfies Meta<typeof StoryItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: _Story[] = [
  {
    id: 1,
    img: storyIcon,
    profile: profileImg,
    title: 'Rector Dinoy',
  },
  {
    id: 2,
    img: storyIcon,
    profile: storyIcon,
    title: 'Rector Dinoy',
  },
  {
    id: 3,
    img: storyIcon,
    profile: profileImg,
    title: 'Rector Dinoy',
  },
  {
    id: 4,
    img: storyIcon,
    profile: profileImg,
    title: 'Rector Dinoy',
  },
  {
    id: 5,
    img: storyIcon,
    profile: profileImg,
    title: 'Rector Dinoy',
  },
];

const DemoComponent = () => {
  return (
    <StoryItemList>
      {data.map((story) => {
        const { id, title, profile, img } = story;
        return <StoryItem title={title} profile={profile} img={img} key={id} />;
      })}
    </StoryItemList>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: <DemoComponent />,
  },
};
