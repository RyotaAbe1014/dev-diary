'use client';

import { useState } from "react";
import { ArticleMarkDownEditor } from "@/features/article/components/ArticleMarkDownEditor/article-mark-down-editor";
import { MarkDown } from "@/lib/react-markdown/components/MarkDown/MarkDown";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Textarea } from "@/lib/components/ui/textarea";
import { UserArticle } from "@/features/article/types/UserArticle";
import { Checkbox } from "@/lib/components/ui/checkbox";
import { CheckboxWithLabel } from "@/lib/components/ui/CheckboxWithLabel/CheckboxWithLabel";

type UserArticleDetailDialogProps = {
  articleDetail: UserArticle;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  handleSave: (title: string, description: string, text: string) => void;
  handleDelete: () => void;
  changePublishStatus: () => void;
};

export function UserArticleDetailDialogContent({ articleDetail, isEdit, setIsEdit, handleSave, handleDelete, changePublishStatus }: UserArticleDetailDialogProps) {
  const [title, setTitle] = useState(articleDetail.title);
  const [description, setDescription] = useState(articleDetail.description || '');
  const [text, setText] = useState(articleDetail.body || '');
  const [isPublish, setIsPublish] = useState(articleDetail.isPublic || false);

  const handlePublish = () => {
    changePublishStatus();
    setIsPublish(!isPublish);
  }

  return (
    <div className="container grid px-4 md:px-6">
      <div className="ml-auto flex items-center">
        <CheckboxWithLabel value={isPublish} label={isPublish ? "Unpublish" : "Publish"} onClick={handlePublish} />
        <Button
          className="ml-2"
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          {isEdit ? "Cancel" : "Edit"}
        </Button>
        {isEdit ? (
          <Button
            className="ml-2"
            variant="outline"
            onClick={() => {
              handleSave(title, description, text);
            }}
          >
            Save
          </Button>
        ) : (
          <Button
            className="ml-2"
            variant="destructive"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        )}
      </div>
      <div className="h-36">
        {isEdit ? (
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
        ) : (
          <>
            <h1 className="text-3xl font-bold ">{articleDetail.title}</h1>
            <p className="mt-4 text-lg text-gray-500">{articleDetail.description}</p>
          </>
        )}
      </div>
      <div className='mt-2 h-[500px] pl-1 pt-1 overflow-y-auto overflow-x-auto'>
        {isEdit ? (
          <ArticleMarkDownEditor value={text} onChange={setText} />
        ) : (
          <MarkDown value={articleDetail.body} className="p-4 h-full rounded-lg border border-slate-200 dark:border-slate-800 overflow-y-auto overflow-x-auto" />
        )}
      </div>
    </div>
  )
}
