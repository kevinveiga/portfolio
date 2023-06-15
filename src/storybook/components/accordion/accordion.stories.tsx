import { Meta, StoryObj } from '@storybook/react';

import { IAccordion } from '@/interface';

import { Accordion } from '@/components/accordion/accordion';

export default {
  args: {
    id: 'accordion-1',
    obj: [
      {
        content: 'content 1',
        id: '1',
        title: 'title 1'
      },
      {
        content: 'content 2',
        id: '2',
        title: 'title 2'
      },
      {
        content: 'content 3',
        id: '3',
        title: 'title 3'
      }
    ]
  },
  component: Accordion,
  title: 'Components/Accordion'
} as Meta<IAccordion>;

export const AccordionDefault: StoryObj<IAccordion> = {};
