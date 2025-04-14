import type { Meta, StoryObj } from '@storybook/vue3';

import SDButton from '../components/SDButton.vue';
import '../solid-ui.css';
import {fn} from "@storybook/test";

const meta = {
  title: 'Controls/SDButton',
  component: SDButton,
  tags: ['autodocs'],
  argTypes: {
    colorScheme: { control: 'select', options: ['red', 'green', 'violet', 'blue'] },
    mode: { control: 'select', options: ['primary', 'secondary'] },
    label: { control: 'text' },
  },
  args: {
    mode: 'primary',
    colorScheme: 'red',
    label: 'Button',
    onOnClick: fn(),
  },
} satisfies Meta<typeof SDButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
  },
};
