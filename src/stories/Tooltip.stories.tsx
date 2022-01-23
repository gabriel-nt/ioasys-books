import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from '../components/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Componente para exibir mensagens de erro',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#333' }],
    },
  },
  args: {
    isVisible: true,
    label: 'Email inválido',
  },
  argTypes: {
    isVisible: {
      name: 'isVisible',
      type: { name: 'boolean', required: true },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => {
  return (
    <div style={{ position: 'relative' }}>
      <Tooltip {...args} />
    </div>
  );
};

export const Default = Template.bind({});
