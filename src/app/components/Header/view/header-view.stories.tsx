
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderView } from './header-view';

const meta: Meta<typeof HeaderView> = {
  title: "components/HeaderView",

  component: HeaderView,
};

export default meta;
type Story = StoryObj<typeof HeaderView>;

export const Home: Story = {
  args: {
    pathName: "Home",
    isLogin: false,
  },

  render: ({pathName}) => <HeaderView pathName={pathName} isLogin={false} />,
};
export const isLogin: Story = {
  args: {
    pathName: "Home",
    isLogin: true,
  },

  render: ({pathName}) => <HeaderView pathName={pathName} isLogin={true} />,
};
