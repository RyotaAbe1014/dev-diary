'use client';

import { useState } from "react";
import { UserArticleDetailDialogContent } from "../../UserArticleDetailDialogContent/UserArticleDetailDialogContent";
import { useRouter } from "next/navigation";
import { UserArticle } from "@/features/article/types/UserArticle";

type UserArticleDetailViewProps = {
  article: UserArticle;
};

export function UserArticleDetailView({ article }: UserArticleDetailViewProps) {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  const handleSave = () => {
    // TODO: Save action
    setIsEdit(false);
    router.back();
  };

  const handleDelete = () => {
    // TODO: Delete action
    router.back();
  };

  return (
    <>
    <UserArticleDetailDialogContent articleDetail={article} isEdit={isEdit} setIsEdit={setIsEdit} handleSave={handleSave} handleDelete={handleDelete} />
    </>
  )
}
