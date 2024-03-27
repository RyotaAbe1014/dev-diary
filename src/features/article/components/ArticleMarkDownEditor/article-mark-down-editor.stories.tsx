
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleMarkDownEditor } from './article-mark-down-editor';
import { useState } from 'react';


const meta: Meta<typeof ArticleMarkDownEditor> = {
  title: "features/article/ArticleMarkDownEditor",
  component: ArticleMarkDownEditor,
};

export default meta;
type Story = StoryObj<typeof ArticleMarkDownEditor>;

export const Primary: Story = {
  args: {
    value: "",
    onChange: (value: string) => { },
  },

  render: (args) => {
    const Wrapper = () => {
      const [value, setValue] = useState(args.value);
      return (
        <ArticleMarkDownEditor
          value={value}
          onChange={(value) => setValue(value)}
        />
      );
    }
    return <Wrapper />;
  },
};