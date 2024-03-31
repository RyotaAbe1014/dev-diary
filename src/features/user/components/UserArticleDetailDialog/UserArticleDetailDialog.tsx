'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
} from "@/lib/components/ui/dialog";
import { UserArticleDetail } from "@/features/article/types/UserArticleDetail";
import { UserArticleDetailDialogContent } from "../UserArticleDetailDialogContent/UserArticleDetailDialogContent";

type UserArticleDetailDialogProps = {
  articleDetail: UserArticleDetail;
};

export function UserArticleDetailDialog({ articleDetail }: UserArticleDetailDialogProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
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
        <UserArticleDetailDialogContent articleDetail={articleDetail} isEdit={isEdit} setIsEdit={setIsEdit} handleSave={handleSave} />
      </DialogContent>
    </Dialog>
  )
}
