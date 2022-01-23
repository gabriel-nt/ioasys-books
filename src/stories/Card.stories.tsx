import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Cards dos livros',
      },
    },
  },
  args: {
    book: {
      id: '61c9c28fcc498b5c08845dd0',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg',
      pageCount: 1538,
      published: 2010,
      publisher: 'Nogueira - Barros',
      title: 'A veniam sint',
      authors: ['Gabriel'],
    },
  },
  argTypes: {
    book: {
      name: 'book',
      type: { name: 'object', value: {}, required: true },
      defaultValue: null,
      description: 'Define os dados do livro',
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => {
  return <Card {...args} onClick={action('showModal')} />;
};

export const Default = Template.bind({});
