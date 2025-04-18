import type { Meta, StoryObj } from '@storybook/vue3';

import SDCitation from '../components/SDCitation.vue';
import '../solid-ui.css';

const meta = {
    title: 'Components/SDCitation',
    component: SDCitation,
    tags: ['autodocs'],
    argTypes: {
        citation: { control: 'text' },
        author: { control: 'text' },
        colorScheme: { control: 'select' , options: ['green', 'violet', 'blue'] },
    },
    args: {

    },
} satisfies Meta<typeof SDCitation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
    components: { SDCitation },
    setup() {
        return { args };
    },
    template: '<div style="max-width: 550px"><SDCitation v-bind="args"/></div>',
});

export const Default: Story = Template.bind({})
Default.args = {
    citation: 'Ein Praktikum darf keine Ausrede für unbezahlte Arbeit sein!',
    author: 'Susanne Ferschl',
    colorScheme: 'blue',
}