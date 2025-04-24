import type { Meta, StoryObj } from '@storybook/vue3'
import SDBonn from '../components/SDBonn.vue'
import { fn } from '@storybook/test'

const meta = {
    title: 'Components/SDBonn',
    component: SDBonn,
    tags: ['autodocs'],
    args: {
        bezirkList: {
            '1': { url: '/wahlbezirk/1', text: 'Bonn-Zentrum' },
            '2': { url: '/wahlbezirk/2', text: 'Bonn-Castell/Rheindorf-Süd' },
            '3': { url: '/wahlbezirk/3', text: 'Innere Nordstadt' },
            '4': { url: '/wahlbezirk/4', text: 'Baumschulviertel/Südstadt' },
            '5': { url: '/wahlbezirk/5', text: 'Neu-Tannenbusch/Buschdorf' },
            '6': { url: '/wahlbezirk/6', text: 'Auerberg/Graurheindorf' },
            '7': { url: '/wahlbezirk/7', text: 'Tannenbusch' },
            '8': { url: '/wahlbezirk/8', text: 'Dransdorf/Lessenich/Meßdorf' },
            '9': { url: '/wahlbezirk/9', text: 'Endenich I' },
            '10': { url: '/wahlbezirk/10', text: 'Poppelsdorf' },
            '11': { url: '/wahlbezirk/11', text: 'Kessenich' },
            '12': { url: '/wahlbezirk/12', text: 'Dottendorf/Gronau' },
            '13': { url: '/wahlbezirk/13', text: 'Äußere Nordstadt' },
            '14': { url: '/wahlbezirk/14', text: 'Endenich II' },
            '15': { url: '/wahlbezirk/15', text: 'Venusberg/Ippendorf' },
            '16': { url: '/wahlbezirk/16', text: 'Röttgen/Ückesdorf' },
            '21': { url: '/wahlbezirk/21', text: 'Friesdorf' },
            '22': { url: '/wahlbezirk/22', text: 'Villenviertel/Rüngsdorf' },
            '23': { url: '/wahlbezirk/23', text: 'Plittersdorf/Hochkreuz' },
            '24': { url: '/wahlbezirk/24', text: 'Bad Godesberg-Mitte' },
            '25': { url: '/wahlbezirk/25', text: 'Heiderhof/Muffendorf' },
            '26': { url: '/wahlbezirk/26', text: 'Pennenfeld/Lannesdorf' },
            '27': { url: '/wahlbezirk/27', text: 'Mehlem' },
            '31': { url: '/wahlbezirk/31', text: 'Beuel-Zentrum' },
            '32': { url: '/wahlbezirk/32', text: 'Schwarzrheindorf/Vilich-Rheindorf/Combahn' },
            '33': { url: '/wahlbezirk/33', text: 'Pützchen/Bechlinghoven/Holtorf/Ungarten' },
            '34': { url: '/wahlbezirk/34', text: 'Beuel-Süd/Limperich' },
            '35': { url: '/wahlbezirk/35', text: 'Holzlar/Hoholz' },
            '36': { url: '/wahlbezirk/36', text: 'Küdinghoven/Ramersdorf/Oberkassel' },
            '37': { url: '/wahlbezirk/37', text: 'Vilich/Geislar/Vilich-Müldorf' },
            '41': { url: '/wahlbezirk/41', text: 'Lengsdorf/Brüser Berg' },
            '42': { url: '/wahlbezirk/42', text: 'Duisdorf/Finkenhof/Lengsdorf' },
            '43': { url: '/wahlbezirk/43', text: 'Duisdorf/Medinghoven' }
        },
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
