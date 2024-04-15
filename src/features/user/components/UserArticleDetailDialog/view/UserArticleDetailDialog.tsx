'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
} from "@/lib/components/ui/dialog";
import { UserArticle } from "@/features/article/types/UserArticle";
import { UserArticleDetailDialogContent } from "../../UserArticleDetailDialogContent/UserArticleDetailDialogContent";
import { deleteArticle, updateArticle, updatePublishStatus } from "@/features/article/actions";

type UserArticleDetailDialogViewProps = {
  article: UserArticle;
};

export function UserArticleDetailDialogView({ article }: UserArticleDetailDialogViewProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const handleSave = async (title: string, description: string, text: string) => {
    const error = await updateArticle(title, description, text);
    setIsEdit(false);
  };
  const handleDelete = async () => {
    const error = await deleteArticle(article.id);
    console.log(error);
    router.back();
  };

  const changePublishStatus = async () => {
    const error = await updatePublishStatus(article.id, !article.isPublic);
    console.log(error);
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
        router.back();
      }}
    >
      <DialogContent className="min-w-full">
        <UserArticleDetailDialogContent articleDetail={article} isEdit={isEdit} setIsEdit={setIsEdit} handleSave={handleSave} handleDelete={handleDelete} changePublishStatus={changePublishStatus} />
      </DialogContent>
    </Dialog>
  )
}
