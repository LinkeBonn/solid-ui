import type { Meta, StoryObj } from '@storybook/vue3';

import SDButton from '../components/SDButton.vue';
import '../style.css';

const meta = {
  title: 'Controls/SDButton',
  component: SDButton,
  tags: ['autodocs'],
  argTypes: {
    colorScheme: { control: 'select', options: ['red', 'green', 'violet', 'blue'] },
    mode: { control: 'select', options: ['primary', 'secondary'] },
    label: { control: 'text' },
    href: { control: 'text' },
  },
  args: {
    mode: 'primary',
    colorScheme: 'red',
    label: 'Button',
    href: '#',
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
