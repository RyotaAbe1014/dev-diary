'use client';

import { useState } from "react";
import { UserArticleDetailDialogContent } from "../../UserArticleDetailDialogContent/UserArticleDetailDialogContent";
import { useRouter } from "next/navigation";
import { UserArticle } from "@/features/article/types/UserArticle";
import { deleteArticle, updateArticle, updatePublishStatus } from "@/features/article/actions";

type UserArticleDetailViewProps = {
  article: UserArticle;
};

export function UserArticleDetailView({ article }: UserArticleDetailViewProps) {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

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
    <>
      <UserArticleDetailDialogContent articleDetail={article} isEdit={isEdit} setIsEdit={setIsEdit} handleSave={handleSave} handleDelete={handleDelete} changePublishStatus={changePublishStatus} />
    </>
  )
}
