
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderView } from './header-view';

const meta: Meta<typeof HeaderView> = {
  title: "features/auth/HeaderView",

  component: HeaderView,
};

export default meta;
type Story = StoryObj<typeof HeaderView>;

export const Home: Story = {
  args: {
    pathName: "user"
  },

  render: ({pathName}) => <HeaderView pathName='pathName'/>,
};
