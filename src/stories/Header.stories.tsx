import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Cabeçalho',
      },
    },
  },
  args: {
    mode: 'dark',
  },
  argTypes: {
    mode: {
      name: 'mode',
      type: { name: 'string', required: false },
      defaultValue: 'light',
      description: 'Define o tema do header',
      control: {
        type: 'select',
        options: {
          Light: 'light',
          Dark: 'dark',
        },
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
