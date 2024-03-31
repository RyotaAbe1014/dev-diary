'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
} from "@/lib/components/ui/dialog";
import { ArticleMarkDownEditor } from "@/features/article/components/ArticleMarkDownEditor/article-mark-down-editor";
import { UserArticleDetail } from "@/features/article/types/UserArticleDetail";
import { MarkDown } from "@/lib/react-markdown/components/MarkDown/MarkDown";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Textarea } from "@/lib/components/ui/textarea";

type UserArticleDetailDialogProps = {
  articleDetail: UserArticleDetail;
};

export function UserArticleDetailDialog({ articleDetail }: UserArticleDetailDialogProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState(articleDetail.title);
  const [description, setDescription] = useState(articleDetail.description);
  const [text, setText] = useState(articleDetail.content);
  const [isEdit, setIsEdit] = useState(false);


  const handleSave = () => {
    // TODO: Save action
    setIsEdit(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
        router.back();
      }}
    >
      <DialogContent className="min-w-full">
        <div className="container grid px-4 md:px-6">
          <div className="ml-auto">
            <Button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              {isEdit ? "Cancel" : "Edit"}
            </Button>
            {isEdit && (
              <Button
                className="ml-2"
                variant="outline"
                onClick={() => {
                  handleSave();
                }}
              >
                Save
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
              <MarkDown value={text} className="p-4 h-full rounded-lg border border-slate-200 dark:border-slate-800 overflow-y-auto overflow-x-auto" />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}