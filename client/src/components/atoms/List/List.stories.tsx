import type { Meta, StoryObj } from '@storybook/react';

import { List } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atom/List',
  component: List,
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoChildren = () => {
  return <>Demo Children</>;
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: <DemoChildren />,
  },
};
