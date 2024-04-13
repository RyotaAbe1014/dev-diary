import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleDetailDialogView } from './UserArticleDetailDialog';
import { mockUserArticle } from '../../UserArticleListItem/__mock__/mockUserArticle';

const meta: Meta<typeof UserArticleDetailDialogView> = {
  title: "features/user/UserArticleDetailDialog",
  parameters: {
    nextjs: {
      appDirectory: true,
    }
  },
  component: UserArticleDetailDialogView,
};

export default meta;
type Story = StoryObj<typeof UserArticleDetailDialogView>;

export const Primary: Story = {
  args: {
    article: mockUserArticle,
  },

  render: ({ article }) => <UserArticleDetailDialogView article={article} />,
};