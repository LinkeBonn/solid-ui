import { defineComponent, h } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Meta } from '@storybook/vue3';

export default {
    title: 'Design System/Icons',
    component: FontAwesomeIcon,
} as Meta;

const iconList = [
    'home',
    'search',
    'user',
    'cog',
    'edit',
    'trash',
    'save',
    'plus',
    'minus',
    'times',
    'check',
    'upload',
    'download',
    'share',
    'filter',
    'sync',
    'bars',
    'chevron-left',
    'chevron-right',
    'arrow-up',
    'arrow-down',
    'th',
    'list',
    'map-marker-alt',
    'compass',
    'envelope',
    'phone',
    'comment',
    'comments',
    'bell',
    'user-plus',
    'user-edit',
    'users',
    'lock',
    'unlock',
    'key',
    'sign-in-alt',
    'sign-out-alt',
    'chart-bar',
    'chart-line',
    'chart-pie',
    'database',
    'info-circle',
    'exclamation-circle',
    'exclamation-triangle',
    'question-circle',
    'external-link-alt',
    'paperclip',
    'image',
    'file'
];

export const AllIcons = () =>
    defineComponent({
        name: 'IconGallery',
        components: { FontAwesomeIcon },
        setup() {
            return () =>
                h('div', { style: 'display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 16px;' },
                    iconList.map(icon =>
                        h('div', { style: 'text-align: center;' }, [
                            h(FontAwesomeIcon, { icon }),
                            h('div', { style: 'font-size: 0.75rem; margin-top: 4px;' }, icon)
                        ])
                    )
                );
        },
    });
