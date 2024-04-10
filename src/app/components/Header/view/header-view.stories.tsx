
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
    isLogin: false,
  },
};
export const IsLogin: Story = {
  args: {
    isLogin: true,
  },
};
