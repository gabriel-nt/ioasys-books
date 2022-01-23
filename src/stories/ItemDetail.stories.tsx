import { ComponentStory, ComponentMeta } from '@storybook/react';

import ItemDetail from '../components/ItemDetail';

export default {
  title: 'Item Detail',
  component: ItemDetail,
  parameters: {
    docs: {
      description: {
        component: 'Detalhes dos itens, utilizado na modal',
      },
    },
  },
  args: {
    title: 'Páginas',
    label: '304 páginas',
  },
  argTypes: {
    name: {
      name: 'title',
      type: { name: 'string', required: true },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: true },
    },
  },
} as ComponentMeta<typeof ItemDetail>;

const Template: ComponentStory<typeof ItemDetail> = args => {
  return (
    <div style={{ width: 200 }}>
      <ItemDetail {...args} />
    </div>
  );
};

export const Default = Template.bind({});
