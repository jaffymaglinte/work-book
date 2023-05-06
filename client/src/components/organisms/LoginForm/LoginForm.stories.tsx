import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  argTypes: {
    onClickSignIn: {
      action: 'Clicked',
    },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {},
};
