import type { Meta, StoryObj } from '@storybook/vue3';

import SDSelect from '../components/SDSelect.vue';
import '../solid-ui.css';
import {fn} from "@storybook/test";

const meta = {
    title: 'Controls/SDSelect',
    component: SDSelect,
    tags: ['autodocs'],
    argTypes: {
        colorScheme: { control: 'select', options: ['red', 'green', 'violet', 'blue'] },
        mode: { control: 'select', options: ['primary', 'secondary'] },
        label: { control: 'text' },
    },
    args: {
        mode: 'primary',
        colorScheme: 'red',
        label: 'Select',
        options: [{label: 'Option 1', value: 'option1'}, {label: 'Option 2', value: 'option2'}],
        onOnSelect: fn()
    },
} satisfies Meta<typeof SDSelect>;

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