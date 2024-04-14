'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
} from "@/lib/components/ui/dialog";
import { UserArticle } from "@/features/article/types/UserArticle";
import { UserArticleDetailDialogContent } from "../../UserArticleDetailDialogContent/UserArticleDetailDialogContent";
import { deleteArticle } from "@/features/article/actions";

type UserArticleDetailDialogViewProps = {
  article: UserArticle;
};

export function UserArticleDetailDialogView({ article }: UserArticleDetailDialogViewProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(false);


  const handleSave = () => {
    // TODO: Save action
    setIsEdit(false);
  };
  const handleDelete = async () => {
    const error = await deleteArticle(article.id);
    console.log(error);
    router.back();
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
        <UserArticleDetailDialogContent articleDetail={article} isEdit={isEdit} setIsEdit={setIsEdit} handleSave={handleSave} handleDelete={handleDelete} />
      </DialogContent>
    </Dialog>
  )
}
