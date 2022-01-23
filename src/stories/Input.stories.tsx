import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../components/Input';

export default {
  title: 'Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input',
      },
    },
    backgrounds: {
      default: 'light',
      values: [{ name: 'dark', value: '#F8F8F8' }],
    },
  },
  args: {
    name: 'email',
    label: 'Email',
  },
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: true },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: true },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  return <Input {...args} onChange={action('handleChange')} />;
};

export const Default = Template.bind({});
