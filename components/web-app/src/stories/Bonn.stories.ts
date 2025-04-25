import type { Meta, StoryObj } from '@storybook/vue3'
import SDBonn from '../components/SDBonn.vue'
import { fn } from '@storybook/test'

const meta = {
    title: 'Components/SDBonn',
    component: SDBonn,
    tags: ['autodocs'],
    args: {
        onOnClick: fn(),
        onOnHover: fn(),
    },
} satisfies Meta<typeof SDBonn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => ({
        components: { SDBonn },
        setup() {
            return { args }
        },
        template: `<div style="height: 500px"><SDBonn v-bind="args" @click="args.onClick" @hover="args.onHover" /></div>`,
    }),
}
