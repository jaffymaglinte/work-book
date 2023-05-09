import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormControl, Box } from '@mui/material';

import Select from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atom/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const dataSource = [
  {
    id: 'test-id1',
    part_name: 'ax201',
    part_status: 'active',
  },
  {
    id: 'test-id2',
    part_name: 'ax202',
    part_status: 'active',
  },
  {
    id: 'test-id3',
    part_name: 'ax203ASDASDASDASDASD ASD ASD ADASDASD',
    part_status: 'active',
  },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    dataSource,
    dataTextField: 'part_name',
    dataValueField: 'id',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',

    // input: <TextField label="Age" />,
  },
};
