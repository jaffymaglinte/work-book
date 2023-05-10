import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ProfileMenuList from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Organisms/ProfileMenuList',
  component: ProfileMenuList,
  argTypes: {
    onClickSettings: {
      action: 'onClick',
    },
    onClickLogout: {
      action: 'onClick',
    },
  },
} satisfies Meta<typeof ProfileMenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
