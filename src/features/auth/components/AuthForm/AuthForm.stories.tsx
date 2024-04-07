
import type { Meta, StoryObj } from '@storybook/react';
import { AuthForm } from './AuthForm';


const meta: Meta<typeof AuthForm> = {
  title: "features/auth/AuthForm",
  component: AuthForm,
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const IsLogin: Story = {
  args: {
    isLoginPage: true,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    isPending: false,
    errors: [],
  },

  render: (args) => <AuthForm  {...args} />,
};


export const IsSignUp: Story = {
  args: {
    isLoginPage: false,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    isPending: false,
    errors: [],
  },

  render: (args) => <AuthForm  {...args} />,
};
