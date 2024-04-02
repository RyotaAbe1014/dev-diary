import { UserArticleDetailDialog } from "@/features/user/components/UserArticleDetailDialog/UserArticleDetailDialog";

export default async function Page({
  params,
}: {
  params: { articleId: string }
}) {

  // TODO: Fetch article detail
  const articleDetail = {
    id: "1",
    title: "Hello World",
    description: "This is a sample article",
    content: "# Hello World \n This is a markdown component. \n ```javascript \n console.log('Hello, World!'); \n ```",
  }

  console.log("モーダル");
  return (
    <>
    <UserArticleDetailDialog articleDetail={articleDetail} />
    </>
  );
}