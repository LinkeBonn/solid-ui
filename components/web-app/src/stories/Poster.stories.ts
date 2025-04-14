import type { Meta, StoryObj } from '@storybook/vue3';

import SDPoster from '../components/SDPoster.vue';
import '../solid-ui.css';

const meta = {
    title: 'Components/SDPoster',
    component: SDPoster,
    tags: ['autodocs'],
    argTypes: {
        firstHeadline: { control: 'text' },
        secondHeadline: { control: 'text' },
        subHeadline: { control: 'text' },
        colorScheme: { control: 'select' , options: ['red', 'green', 'violet', 'blue'] },
    },
    args: {

    },
} satisfies Meta<typeof SDPoster>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
    components: { SDPoster },
    setup() {
        return { args };
    },
    template: '<SDPoster v-bind="args"/>',
});

export const Default: Story = Template.bind({})
Default.args = {
    firstHeadline: 'Bus und Bahn',
    secondHeadline: ' statt Autobahn',
    subHeadline: 'Forum für klimagerechte Verkehrswende',
    colorScheme: 'red',
}