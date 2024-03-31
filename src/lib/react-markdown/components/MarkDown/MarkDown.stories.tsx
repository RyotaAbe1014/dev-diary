import type { Meta, StoryObj } from '@storybook/react';
import { MarkDown } from './MarkDown';

const meta: Meta<typeof MarkDown> = {
  title: "lib/react-markdown/MarkDown",

  component: MarkDown,
};

export default meta;
type Story = StoryObj<typeof MarkDown>;

export const Primary: Story = {
  args: {
    className: "p-4 rounded-lg border border-slate-200 dark:border-slate-800 overflow-y-auto overflow-x-auto",
    value: "# Hello World \n This is a markdown component. \n ```javascript \n console.log('Hello, World!'); \n ```"
  },

  render: ({ className, value }) => <MarkDown className={className} value={value} />,
};