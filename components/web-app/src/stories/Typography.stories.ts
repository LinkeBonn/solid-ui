import type { Meta, StoryObj } from '@storybook/vue3';
import '../solid-ui.css';

const meta: Meta = {
    title: 'Design System/Typography',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const HeadlineExample: Story = {
    render: () => ({
        template: `
      <div>
        <h1>
          <span class="heading-font-black">Bus und Bahn</span>
          <span class="heading-font-light"> statt Autobahn</span>
        </h1>
        <h3 class="heading-font-light">
          Forum für klimagerechte Verkehrswende
        </h3>
      </div>
    `,
    }),
    name: 'Headline mit Black und Light',
};

export const HeadlineExample2: Story = {
    render: () => ({
        template: `
      <div>
        <h2 class="heading-font-black">
          4-Tage-Woche
        </h2>
        <h1>
        für alle!
</h1>
        <h4 class="heading-font-regular">
          Weniger Arbeitszeit, gleiches Gehalt.
        </h4>
      </div>
    `,
    }),
    name: 'Headline mit Black und Regular',
};
