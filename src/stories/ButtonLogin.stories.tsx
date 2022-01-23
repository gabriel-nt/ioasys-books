import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonLogin } from '../components/Button/index';

export default {
  title: 'Button Login',
  component: ButtonLogin,
  parameters: {
    docs: {
      description: {
        component: 'Botão da página de SignIn',
      },
    },
  },
  args: {
    label: 'Enviar',
    isDisabled: false,
  },
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: '',
      description: 'Define a label do botão',
    },
    isDisabled: {
      name: 'isDisabled',
      type: { name: 'boolean', required: true },
      defaultValue: '',
      description: 'Define se o botão está desabilitado',
    },
  },
} as ComponentMeta<typeof ButtonLogin>;

const Template: ComponentStory<typeof ButtonLogin> = args => {
  return <ButtonLogin {...args} onClick={action('handleSubmit')} />;
};

export const Default = Template.bind({});
