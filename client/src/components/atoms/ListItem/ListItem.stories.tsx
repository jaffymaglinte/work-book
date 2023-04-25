import type { Meta, StoryObj } from '@storybook/react';

import { ListItem } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atom/ListItem',
  component: ListItem,
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoChildren = () => {
  return <>Demo list item children</>;
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: <DemoChildren />,
  },
};
