
import type { Meta, StoryObj } from '@storybook/react';
import { LoginView } from "./login-view";


const meta: Meta<typeof LoginView> = {
  title: "features/auth/LoginView",
  component: LoginView,
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Primary: Story = {
  render: () => <LoginView  />,
};