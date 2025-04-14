import type { Meta, StoryObj } from '@storybook/vue3';

import SDBanner from '../components/SDBanner.vue';
import '../solid-ui.css';

const meta = {
    title: 'Components/SDBanner',
    component: SDBanner,
    tags: ['autodocs'],
    argTypes: {
        firstHeadline: { control: 'text' },
        secondHeadline: { control: 'text' },
        subHeadline: { control: 'text' },
        colorScheme: { control: 'select' , options: ['green', 'violet', 'blue'] },
    },
    args: {

    },
} satisfies Meta<typeof SDBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
    components: { SDBanner },
    setup() {
        return { args };
    },
    template: '<SDBanner v-bind="args"/>',
});

export const Default: Story = Template.bind({})
Default.args = {
    firstHeadline: '4-Tage-Woche',
    secondHeadline: 'für alle!',
    subHeadline: 'Weniger Arbeitszeit, gleiches Gehalt.',
    colorScheme: 'green',
}