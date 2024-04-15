
import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleDetailDialogContent } from './UserArticleDetailDialogContent';
import { mockUserArticle } from '../UserArticleListItem/__mock__/mockUserArticle';


const meta: Meta<typeof UserArticleDetailDialogContent> = {
  title: "features/user/UserArticleDetailDialogContent",
  component: UserArticleDetailDialogContent,
};

export default meta;
type Story = StoryObj<typeof UserArticleDetailDialogContent>;

export const Preview: Story = {
  args: {
    articleDetail: mockUserArticle,
    isEdit: false,
    setIsEdit: () => { },
    handleSave: () => { },
    handleDelete: () => { },
    changePublishStatus: () => { },
  },

  render: (args) => <UserArticleDetailDialogContent  {...args} />,
};

export const Edit: Story = {
  args: {
    articleDetail: mockUserArticle,
    isEdit: true,
    setIsEdit: () => { },
    handleSave: () => { },
    handleDelete: () => { },
    changePublishStatus: () => { },
  },

  render: (args) => <UserArticleDetailDialogContent  {...args} />,
};