
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleMarkDownEditor } from './article-mark-down-editor';


const meta: Meta<typeof ArticleMarkDownEditor> = {
  title: "features/article/ArticleMarkDownEditor",
  component: ArticleMarkDownEditor,
};

export default meta;
type Story = StoryObj<typeof ArticleMarkDownEditor>;

export const Primary: Story = {
  render: () => <ArticleMarkDownEditor />,
};