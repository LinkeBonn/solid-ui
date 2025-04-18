import type { Meta, StoryObj } from '@storybook/vue3';

import SdTextInput from '../components/SDTextInput.vue';
import '../solid-ui.css';
import {fn} from "@storybook/test";

const meta = {
    title: 'Controls/SDTextInput',
    component: SdTextInput,
    tags: ['autodocs'],
    argTypes: {
        colorScheme: { control: 'select', options: ['red', 'green', 'violet', 'blue'] },
        mode: { control: 'select', options: ['primary', 'secondary'] },
        label: { control: 'text' },
    },
    args: {
        mode: 'primary',
        colorScheme: 'red',
        label: 'Input',
        onOnChange: fn()
    },
} satisfies Meta<typeof SdTextInput>;

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