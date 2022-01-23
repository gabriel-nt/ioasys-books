import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from '../components/Loader';

export default {
  title: 'Loader',
  component: Loader,
  parameters: {
    docs: {
      description: {
        component: 'Loader',
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => {
  return <Loader />;
};

export const Default = Template.bind({});
