
import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleListItem } from './user-article-list-item';
import { mockUserArticle } from './__mock__/mockUserArticle';


const meta: Meta<typeof UserArticleListItem> = {
  title: "features/user/UserArticleListItem",
  component: UserArticleListItem,
};

export default meta;
type Story = StoryObj<typeof UserArticleListItem>;

export const Primary: Story = {
  args: {
    userArticle: mockUserArticle,
  },

  render: (mockUserArticle) => <UserArticleListItem  {...mockUserArticle} />,
};