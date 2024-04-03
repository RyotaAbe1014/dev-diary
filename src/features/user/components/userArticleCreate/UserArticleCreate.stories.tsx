import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleCreate } from './UserArticleCreate';

const meta: Meta<typeof UserArticleCreate> = {
  title: "features/user/UserArticleCreate",
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
  component: UserArticleCreate,
};

export default meta;
type Story = StoryObj<typeof UserArticleCreate>;

export const Primary: Story = {
  render: () => <UserArticleCreate  />,
};