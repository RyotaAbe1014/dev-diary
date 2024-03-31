'use client';

import { useState } from "react";
import { UserArticleDetail  as  UserArticleDetailType} from "@/features/article/types/UserArticleDetail";
import { UserArticleDetailDialogContent } from "../UserArticleDetailDialogContent/UserArticleDetailDialogContent";
import { useRouter } from "next/navigation";

type UserArticleDetailProps = {
  articleDetail: UserArticleDetailType;
};

export function UserArticleDetail({ articleDetail }: UserArticleDetailProps) {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  const handleSave = () => {
    // TODO: Save action
    setIsEdit(false);
    router.back();
  };

  return (
    <>
    <UserArticleDetailDialogContent articleDetail={articleDetail} isEdit={isEdit} setIsEdit={setIsEdit} handleSave={handleSave} />
    </>
  )
}
