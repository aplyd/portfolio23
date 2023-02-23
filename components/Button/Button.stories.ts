import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'lg',
  },
};
