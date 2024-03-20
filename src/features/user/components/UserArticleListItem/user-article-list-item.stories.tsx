
import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleListItem } from './user-article-list-item';


const meta: Meta<typeof UserArticleListItem> = {
  title: "features/user/UserArticleListItem",
  component: UserArticleListItem,
};

export default meta;
type Story = StoryObj<typeof UserArticleListItem>;

export const Primary: Story = {
  args: {
    userArticle:
      {
        id: "1",
        title: "Introducing Shadcn UI",
        publishedAt: "August 23, 2023",
        description: "Shadcn UI is a delightful design system for creating beautiful websites and web apps.",
      }
  },

  render: (mockUserArticle) => <UserArticleListItem  {...mockUserArticle} />,
};