import { UserArticleDetail } from "@/features/user/components/UserArticleDetail/UserArticleDetail";
export default function Page({
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
  return (
    <div>
      <UserArticleDetail articleDetail={articleDetail} />
    </div>
  );
}