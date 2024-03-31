import { UserArticleDetailDialog } from "@/features/user/components/UserArticleDetailDialog/UserArticleDetailDialog";


export default function Page({
  params,
}: {
  params: { articleId: string }
}) {
  return (
    <>
    <UserArticleDetailDialog />
    </>
  );
}