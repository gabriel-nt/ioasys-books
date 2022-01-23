import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

import { Button } from '../components/Button/index';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Botão com ícones',
      },
    },
  },
  args: {
    hover: false,
    disabled: false,
  },
  argTypes: {
    hover: {
      name: 'hover',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Define se o botão terá efeito de hover',
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Define se o botão está desabilitado',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  return <Button {...args} />;
};

export const LogoutButton = Template.bind({});
LogoutButton.args = {
  children: <FiLogOut />,
};

export const PrevButton = Template.bind({});
PrevButton.args = {
  children: <MdOutlineChevronLeft />,
};

export const NextButton = Template.bind({});
NextButton.args = {
  children: <MdOutlineChevronRight />,
};
