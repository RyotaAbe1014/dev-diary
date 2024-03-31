import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleDetailDialog } from './UserArticleDetailDialog';

const meta: Meta<typeof UserArticleDetailDialog> = {
  title: "features/user/UserArticleDetailDialog",
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
  component: UserArticleDetailDialog,
};

export default meta;
type Story = StoryObj<typeof UserArticleDetailDialog>;

export const Primary: Story = {
  args: {
    articleDetail: {
      id: "1",
      title: "title",
      publishedAt: "2021-01-01",
      description: "description",
      content: "# content",
    },
  },

  render: ({articleDetail}) => <UserArticleDetailDialog  articleDetail={articleDetail} />,
};