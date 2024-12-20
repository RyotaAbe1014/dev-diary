'use client';

import { useState } from "react";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Textarea } from "@/lib/components/ui/textarea";
import { ArticleMarkDownEditor } from "@/features/article/components/ArticleMarkDownEditor/article-mark-down-editor";
import { useRouter } from "next/navigation";
import { createArticle } from "@/features/article/actions";

export function UserArticleCreate() {
  const { back } = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState<string[]>([]);

  return (
    <div className="container grid px-4 md:px-6">
      {error &&
        <div className="text-red-500">
          {error.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      }
      <div className="flex justify-end">
        <Button
          variant="link"
          onClick={() => {
            back();
          }}
        >
          Cancel
        </Button>
        <Button
          className="ml-2"
          variant="outline"
          onClick={async () => {
            const error = await createArticle({ title, description, text });
            if (error) {
              setError(error);
            }
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
