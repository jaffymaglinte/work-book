import type { Meta, StoryObj } from '@storybook/react';

import Login from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Templates/Auth/Login',
  component: Login,
  argTypes: { onClickSignIn: { action: 'clicked' } },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  args: {},
};
