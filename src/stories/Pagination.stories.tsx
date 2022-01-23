import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../components/Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Componente de páginação',
      },
    },
  },
  args: {
    totalPages: 10,
    currentPage: 1,
    handlePagination: () => {
      action('handlePagination');
    },
  },
  argTypes: {
    totalPages: {
      name: 'totalPages',
      type: { name: 'number', required: true },
    },
    currentPage: {
      name: 'currentPage',
      type: { name: 'number', required: true },
    },
    handlePagination: {
      name: 'handlePagination',
      type: { name: 'function', required: true },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => {
  return <Pagination {...args} />;
};

export const Default = Template.bind({});
