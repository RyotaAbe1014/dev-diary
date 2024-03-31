
import type { Meta, StoryObj } from '@storybook/react';
import { UserArticleDetailDialogContent } from './UserArticleDetailDialogContent';


const meta: Meta<typeof UserArticleDetailDialogContent> = {
  title: "features/user/UserArticleDetailDialogContent",
  component: UserArticleDetailDialogContent,
};

export default meta;
type Story = StoryObj<typeof UserArticleDetailDialogContent>;

export const Preview: Story = {
  args: {
    articleDetail: {
      id: "1",
      title: "Hello World",
      description: "This is a sample article",
      content: "# Hello World \n This is a markdown component. \n ```javascript \n console.log('Hello, World!'); \n ```",
    },
    isEdit: false,
    setIsEdit: () => {},
    handleSave: () => {},
    handleDelete: () => {},
  },

  render: (args) => <UserArticleDetailDialogContent  {...args} />,
};

export const Edit: Story = {
  args: {
    articleDetail: {
      id: "1",
      title: "Hello World",
      description: "This is a sample article",
      content: "# Hello World \n This is a markdown component. \n ```javascript \n console.log('Hello, World!'); \n ```",
    },
    isEdit: true,
    setIsEdit: () => {},
    handleSave: () => {},
    handleDelete: () => {},
  },

  render: (args) => <UserArticleDetailDialogContent  {...args} />,
};