'use client';

import { useState } from "react";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Textarea } from "@/lib/components/ui/textarea";
import { ArticleMarkDownEditor } from "@/features/article/components/ArticleMarkDownEditor/article-mark-down-editor";

export function UserArticleCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="container grid px-4 md:px-6">
    <div className="ml-auto">
      <Button
        className="ml-2"
        variant="outline"
        onClick={() => {

        }}
      >
        Save
      </Button>
    </div>
    <div className="h-36">
      <>
        <Input
          type="text"
          className="w-96"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Textarea
          className="w-full rounded-md mt-2 resize-none"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </>
    </div>
    <div className='mt-2 h-[500px] pl-1 pt-1 overflow-y-auto overflow-x-auto'>
      <ArticleMarkDownEditor value={text} onChange={setText} />
    </div>
  </div>
  )
}
