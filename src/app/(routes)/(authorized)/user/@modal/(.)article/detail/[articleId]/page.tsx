import { UserArticleDetailDialog } from "@/features/user/components/UserArticleDetailDialog/UserArticleDetailDialog";

export default async function Page({
  params,
}: {
  params: { articleId: string }
}) {
  return (
    <>
    <UserArticleDetailDialog articleId={params.articleId} />
    </>
  );
}