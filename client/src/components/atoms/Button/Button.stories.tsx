import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atom/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Test Button',
    color: 'primary',
    size: 'small',
    variant: 'contained',
  },
};
