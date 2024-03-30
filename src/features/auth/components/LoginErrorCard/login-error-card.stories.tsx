import type { Meta, StoryObj } from '@storybook/react';
import { LoginErrorCard } from './login-error-card';

const meta: Meta<typeof LoginErrorCard> = {
  title: "features/auth/LoginErrorCard",

  component: LoginErrorCard,
};

export default meta;
type Story = StoryObj<typeof LoginErrorCard>;

export const Primary: Story = {
  args: {
    errors: ["エラーが発生しました1", "エラーが発生しました2"],
  },

  render: ({ errors }) => <LoginErrorCard errors={errors} />,
};