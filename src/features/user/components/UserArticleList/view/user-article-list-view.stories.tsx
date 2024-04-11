
import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleListView } from './user-article-list-view';
import { mockUserArticleList } from './__mock__/mockUserArticleList';



const meta: Meta<typeof UserArticleListView> = {
  title: "features/user/UserArticleList",
  component: UserArticleListView,
};

export default meta;
type Story = StoryObj<typeof UserArticleListView>;

export const Primary: Story = {
  args: {
    userArticles: mockUserArticleList,
  },

  render: (mockUserArticles) => <UserArticleListView  {...mockUserArticles} />,
};