import type { Meta, StoryObj } from '@storybook/vue3';
import '../solid-ui.css';
import SDCandidate from "../components/SDCandidate.vue";

const meta = {
    title: 'Components/SDCandidate',
    component: SDCandidate,
    tags: ['autodocs'],
    argTypes: {
        imgSrc: { control: 'text' },
    },
    args: {
    },
} satisfies Meta<typeof SDCandidate>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
    components: { SDCandidate },
    setup() {
        return { args };
    },
    template: '<div style="max-width: 450px"><SDCandidate v-bind="args"/></div>',
});

export const Default: Story = Template.bind({})
Default.args = {
    imgSrc: '/images/karl_marx.png',
    text: '„Proletarier aller Länder, vereinigt euch!“'
}