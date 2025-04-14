import type { Meta, StoryObj } from '@storybook/vue3'
import ColorPreview from '../components/ColorPreview.vue'

const meta: Meta<typeof ColorPreview> = {
    title: 'Design Tokens/Color Tokens',
    component: ColorPreview,
}

export default meta

type Story = StoryObj<typeof ColorPreview>

const tokenGroups: Record<string, { name: string, value: string }[]> = {
    'Primary Red': [
        { name: '--primary-red-full', value: 'rgb(255, 0, 0)' },
        { name: '--primary-red-default', value: 'rgb(255, 184, 184)' },
        { name: '--primary-red-interaction', value: 'rgb(255, 135, 135)' },
        { name: '--primary-red-active', value: 'rgb(255, 67, 67)' },
        { name: '--primary-red-inactive', value: 'rgb(255, 217, 217)' },
        { name: '--primary-red-text', value: 'rgb(70, 0, 0)' },
        { name: '--primary-red-text-inactive', value: 'rgb(255, 67, 67)' },
    ],
    'Secondary Red': [
        { name: '--secondary-red-full', value: 'rgb(111, 0, 60)' },
        { name: '--secondary-red-default', value: 'rgb(255, 169, 222)' },
        { name: '--secondary-red-interaction', value: 'rgb(255, 97, 193)' },
        { name: '--secondary-red-active', value: 'rgb(255, 0, 147)' },
        { name: '--secondary-red-inactive', value: 'rgb(254, 211, 238)' },
        { name: '--secondary-red-text', value: 'rgb(41, 0, 18)' },
        { name: '--secondary-red-text-inactive', value: 'rgb(255, 0, 147)' },
    ],
    'Primary Green': [
        { name: '--primary-green-full', value: 'rgb(0, 75, 91)' },
        { name: '--primary-green-default', value: 'rgb(90, 247, 255)' },
        { name: '--primary-green-interaction', value: 'rgb(0, 217, 233)' },
        { name: '--primary-green-active', value: 'rgb(0, 101, 114)' },
        { name: '--primary-green-inactive', value: 'rgb(168, 254, 255)' },
        { name: '--primary-green-text', value: 'rgb(0, 24, 35)' },
        { name: '--primary-green-text-inactive', value: 'rgb(0, 101, 114)' },
    ],
    'Secondary Green': [
        { name: '--secondary-green-full', value: 'rgb(0, 177, 156)' },
        { name: '--secondary-green-default', value: 'rgb(127, 255, 229)' },
        { name: '--secondary-green-interaction', value: 'rgb(54, 250, 218)' },
        { name: '--secondary-green-active', value: 'rgb(20, 210, 185)' },
        { name: '--secondary-green-inactive', value: 'rgb(191, 255, 242)' },
        { name: '--secondary-green-text', value: 'rgb(0, 45, 43)' },
        { name: '--secondary-green-text-inactive', value: 'rgb(20, 210, 185)' },
    ],
    'Primary Violet': [
        { name: '--primary-violet-full', value: 'rgb(129, 0, 161)' },
        { name: '--primary-violet-default', value: 'rgb(237, 173, 255)' },
        { name: '--primary-violet-interaction', value: 'rgb(230, 109, 255)' },
        { name: '--primary-violet-active', value: 'rgb(217, 23, 255)' },
        { name: '--primary-violet-inactive', value: 'rgb(247, 215, 255)' },
        { name: '--primary-violet-text', value: 'rgb(41, 0, 52)' },
        { name: '--primary-violet-text-inactive', value: 'rgb(217, 23, 255)' },
    ],
    'Secondary Violet': [
        { name: '--secondary-violet-full', value: 'rgb(214, 117, 216)' },
        { name: '--secondary-violet-default', value: 'rgb(243, 216, 246)' },
        { name: '--secondary-violet-interaction', value: 'rgb(236, 185, 238)' },
        { name: '--secondary-violet-active', value: 'rgb(225, 142, 228)' },
        { name: '--secondary-violet-inactive', value: 'rgb(250, 236, 251)' },
        { name: '--secondary-violet-text', value: 'rgb(66, 16, 64)' },
        { name: '--secondary-violet-text-inactive', value: 'rgb(225, 142, 228)' },
    ],
    'Primary Blue': [
        { name: '--primary-blue-full', value: 'rgb(46, 79, 196)' },
        { name: '--primary-blue-default', value: 'rgb(190, 205, 242)' },
        { name: '--primary-blue-interaction', value: 'rgb(145, 172, 233)' },
        { name: '--primary-blue-active', value: 'rgb(91, 129, 221)' },
        { name: '--primary-blue-inactive', value: 'rgb(217, 225, 248)' },
        { name: '--primary-blue-text', value: 'rgb(28, 30, 57)' },
        { name: '--primary-blue-text-inactive', value: 'rgb(91, 129, 221)' },
    ],
    'Secondary Blue': [
        { name: '--secondary-blue-full', value: 'rgb(212, 212, 255)' },
        { name: '--secondary-blue-default', value: 'rgb(227, 231, 255)' },
        { name: '--secondary-blue-interaction', value: 'rgb(207, 212, 255)' },
        { name: '--secondary-blue-active', value: 'rgb(179, 183, 255)' },
        { name: '--secondary-blue-inactive', value: 'rgb(241, 242, 255)' },
        { name: '--secondary-blue-text', value: 'rgb(19, 15, 146)' },
        { name: '--secondary-blue-text-inactive', value: 'rgb(179, 183, 255)' },
    ],
}

export const FunctionTokens: Story = {
    render: () => ({
        components: { ColorPreview },
        setup() {
            return { tokenGroups }
        },
        template: `
      <div>
        <div v-for="(tokens, group) in tokenGroups" :key="group" style="margin-bottom: 2rem">
          <h3>{{ group }}</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem">
            <thead>
              <tr>
                <th style="text-align: left; padding: 0.5rem">Token</th>
                <th style="text-align: left; padding: 0.5rem">Farbe</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(token, index) in tokens" :key="index" style="border-top: 1px solid #ddd">
                <td style="padding: 0.5rem">{{ token.name }}</td>
                <td style="padding: 0.5rem">
                  <ColorPreview :color="token.value" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    }),
}

const colorGroups: Record<string, { name: string, value: string }[]> = {
    'Linke Red': [
        { name: '--linke-red-50', value: 'rgb(255, 238, 238)' },
        { name: '--linke-red-100', value: 'rgb(255, 217, 217)' },
        { name: '--linke-red-200', value: 'rgb(255, 184, 184)' },
        { name: '--linke-red-300', value: 'rgb(255, 135, 135)' },
        { name: '--linke-red-400', value: 'rgb(255, 67, 67)' },
        { name: '--linke-red-500', value: 'rgb(255, 0, 0)' },
        { name: '--linke-red-600', value: 'rgb(224, 0, 0)' },
        { name: '--linke-red-700', value: 'rgb(189, 0, 0)' },
        { name: '--linke-red-800', value: 'rgb(156, 3, 3)' },
        { name: '--linke-red-900', value: 'rgb(128, 9, 9)' },
        { name: '--linke-red-950', value: 'rgb(70, 0, 0)' },
    ],
    'Dark Red': [
        { name: '--dark-red-50', value: 'rgb(254, 231, 245)' },
        { name: '--dark-red-100', value: 'rgb(254, 211, 238)' },
        { name: '--dark-red-200', value: 'rgb(255, 169, 222)' },
        { name: '--dark-red-300', value: 'rgb(255, 97, 193)' },
        { name: '--dark-red-400', value: 'rgb(255, 0, 147)' },
        { name: '--dark-red-500', value: 'rgb(111, 0, 60)' },
        { name: '--dark-red-600', value: 'rgb(87, 6, 46)' },
        { name: '--dark-red-700', value: 'rgb(75, 2, 35)' },
        { name: '--dark-red-800', value: 'rgb(62, 3, 30)' },
        { name: '--dark-red-900', value: 'rgb(52, 4, 25)' },
        { name: '--dark-red-950', value: 'rgb(41, 0, 18)' },
    ],
    'Dark Green': [
        { name: '--dark-green-50', value: 'rgb(219, 254, 255)' },
        { name: '--dark-green-100', value: 'rgb(168, 254, 255)' },
        { name: '--dark-green-200', value: 'rgb(90, 247, 255)' },
        { name: '--dark-green-300', value: 'rgb(0, 217, 233)' },
        { name: '--dark-green-400', value: 'rgb(0, 101, 114)' },
        { name: '--dark-green-500', value: 'rgb(0, 75, 91)' },
        { name: '--dark-green-600', value: 'rgb(0, 60, 77)' },
        { name: '--dark-green-700', value: 'rgb(0, 47, 61)' },
        { name: '--dark-green-800', value: 'rgb(3, 37, 49)' },
        { name: '--dark-green-900', value: 'rgb(5, 31, 42)' },
        { name: '--dark-green-950', value: 'rgb(0, 24, 35)' },
    ],
    'Cyan': [
        { name: '--cyan-50', value: 'rgb(237, 254, 251)' },
        { name: '--cyan-100', value: 'rgb(191, 255, 242)' },
        { name: '--cyan-200', value: 'rgb(127, 255, 229)' },
        { name: '--cyan-300', value: 'rgb(54, 250, 218)' },
        { name: '--cyan-400', value: 'rgb(20, 210, 185)' },
        { name: '--cyan-500', value: 'rgb(0, 177, 156)' },
        { name: '--cyan-600', value: 'rgb(0, 157, 142)' },
        { name: '--cyan-700', value: 'rgb(2, 113, 103)' },
        { name: '--cyan-800', value: 'rgb(7, 90, 84)' },
        { name: '--cyan-900', value: 'rgb(10, 74, 69)' },
        { name: '--cyan-950', value: 'rgb(0, 45, 43)' },
    ],
    'Violet': [
        { name: '--violet-50', value: 'rgb(250, 236, 255)' },
        { name: '--violet-100', value: 'rgb(247, 215, 255)' },
        { name: '--violet-200', value: 'rgb(237, 173, 255)' },
        { name: '--violet-300', value: 'rgb(230, 109, 255)' },
        { name: '--violet-400', value: 'rgb(217, 23, 255)' },
        { name: '--violet-500', value: 'rgb(129, 0, 161)' },
        { name: '--violet-600', value: 'rgb(103, 1, 138)' },
        { name: '--violet-700', value: 'rgb(88, 0, 115)' },
        { name: '--violet-800', value: 'rgb(70, 0, 90)' },
        { name: '--violet-900', value: 'rgb(62, 4, 76)' },
        { name: '--violet-950', value: 'rgb(41, 0, 52)' },
    ],
    'Rose': [
        { name: '--rose-50', value: 'rgb(253, 246, 253)' },
        { name: '--rose-100', value: 'rgb(250, 236, 251)' },
        { name: '--rose-200', value: 'rgb(243, 216, 246)' },
        { name: '--rose-300', value: 'rgb(236, 185, 238)' },
        { name: '--rose-400', value: 'rgb(225, 142, 228)' },
        { name: '--rose-500', value: 'rgb(214, 117, 216)' },
        { name: '--rose-600', value: 'rgb(182, 67, 182)' },
        { name: '--rose-700', value: 'rgb(150, 53, 147)' },
        { name: '--rose-800', value: 'rgb(123, 45, 120)' },
        { name: '--rose-900', value: 'rgb(102, 41, 99)' },
        { name: '--rose-950', value: 'rgb(66, 16, 64)' },
    ],
    'Blue': [
        { name: '--blue-50', value: 'rgb(239, 242, 252)' },
        { name: '--blue-100', value: 'rgb(217, 225, 248)' },
        { name: '--blue-200', value: 'rgb(190, 205, 242)' },
        { name: '--blue-300', value: 'rgb(145, 172, 233)' },
        { name: '--blue-400', value: 'rgb(91, 129, 221)' },
        { name: '--blue-500', value: 'rgb(46, 79, 196)' },
        { name: '--blue-600', value: 'rgb(48, 66, 167)' },
        { name: '--blue-700', value: 'rgb(48, 58, 144)' },
        { name: '--blue-800', value: 'rgb(45, 50, 118)' },
        { name: '--blue-900', value: 'rgb(40, 45, 94)' },
        { name: '--blue-950', value: 'rgb(28, 30, 57)' },
    ],
    'Light Blue': [
        { name: '--light-blue-50', value: 'rgb(248, 249, 255)' },
        { name: '--light-blue-100', value: 'rgb(241, 242, 255)' },
        { name: '--light-blue-200', value: 'rgb(227, 231, 255)' },
        { name: '--light-blue-300', value: 'rgb(207, 212, 255)' },
        { name: '--light-blue-400', value: 'rgb(179, 183, 255)' },
        { name: '--light-blue-500', value: 'rgb(212, 212, 255)' },
        { name: '--light-blue-600', value: 'rgb(161, 156, 251)' },
        { name: '--light-blue-700', value: 'rgb(126, 116, 239)' },
        { name: '--light-blue-800', value: 'rgb(78, 65, 232)' },
        { name: '--light-blue-900', value: 'rgb(44, 29, 217)' },
        { name: '--light-blue-950', value: 'rgb(19, 15, 146)' },
    ]

}

export const BaseColors: Story = {
    render: () => ({
        components: { ColorPreview },
        setup() {
            return { colorGroups }
        },
        template: `
      <div>
        <div v-for="(tokens, group) in colorGroups" :key="group" style="margin-bottom: 2rem">
          <h3>{{ group }}</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem">
            <thead>
              <tr>
                <th style="text-align: left; padding: 0.5rem">Token</th>
                <th style="text-align: left; padding: 0.5rem">Farbe</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(token, index) in tokens" :key="index" style="border-top: 1px solid #ddd">
                <td style="padding: 0.5rem">{{ token.name }}</td>
                <td style="padding: 0.5rem">
                  <ColorPreview :color="token.value" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    }),
}
