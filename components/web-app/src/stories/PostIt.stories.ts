import type { Meta, StoryObj } from '@storybook/vue3';

import SDPostIt from '../components/SDPostIt.vue';
import '../solid-ui.css';
import {fn} from "@storybook/test";

const meta = {
    title: 'Components/SDPostIt',
    component: SDPostIt,
    tags: ['autodocs'],
    argTypes: {
        colorScheme: { control: 'select' , options: ['red', 'green', 'violet', 'blue'] },
        textLabel: { control: 'text' },
        authorLabel: { control: 'text' },
        buttonLabel: { control: 'text' },
        isEditable: { control: 'boolean' },
    },
    args: {
        textLabel: 'Text',
        authorLabel: 'Name',
        buttonLabel: 'Posten',
        isEditable: true,
        onOnSubmit: fn()
    },
} satisfies Meta<typeof SDPostIt>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
    components: { SDPostIt },
    setup() {
        return { args };
    },
    template: '<div style="max-width: 550px"><SDPostIt v-bind="args"/></div>',
});

export const Default: Story = Template.bind({})
Default.args = {

}