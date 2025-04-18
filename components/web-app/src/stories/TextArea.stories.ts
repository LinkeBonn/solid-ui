import type { Meta, StoryObj } from '@storybook/vue3';

import SdTextArea from '../components/SDTextArea.vue';
import '../solid-ui.css';
import {fn} from "@storybook/test";

const meta = {
    title: 'Controls/SDTextArea',
    component: SdTextArea,
    tags: ['autodocs'],
    argTypes: {
        colorScheme: { control: 'select', options: ['red', 'green', 'violet', 'blue'] },
        mode: { control: 'select', options: ['primary', 'secondary'] },
        label: { control: 'text' },
    },
    args: {
        mode: 'primary',
        colorScheme: 'red',
        label: 'Area',
        onOnChange: fn()
    },
} satisfies Meta<typeof SdTextArea>;

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