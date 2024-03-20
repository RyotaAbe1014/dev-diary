
import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleListView } from './user-article-list-view';



const meta: Meta<typeof UserArticleListView> = {
  title: "features/user/UserArticleList",
  component: UserArticleListView,
};

export default meta;
type Story = StoryObj<typeof UserArticleListView>;

export const Primary: Story = {
  args: {
    userArticles: [
      {
        id: "1",
        title: "Introducing Shadcn UI",
        publishedAt: "August 23, 2023",
        description: "Shadcn UI is a delightful design system for creating beautiful websites and web apps.",
      },
      {
        id: "2",
        title: "Building Accessible Web Components",
        publishedAt: "June 10, 2023",
        description: "Learn how to create web components with accessibility in mind.",
      },
      {
        id: "3",
        title: "Mastering Tailwind CSS with Shadcn",
        publishedAt: "April 5, 2023",
        description: "Discover the power of utility-first CSS and the elegance of Shadcn components.",
      },
    ]
  },

  render: (mockUserArticles) => <UserArticleListView  {...mockUserArticles} />,
};