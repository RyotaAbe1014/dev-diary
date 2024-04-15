import { getArticleList } from "@/features/article/actions";
import { UserArticleListView } from "./view/user-article-list-view";
import { camelizeDeeply } from "@/utils/camelizeDeeply/camelizeDeeply";

export async function UserArticleList() {
  const data = await getArticleList();
  if (!data) {
    return null;
  }
  return (
    <UserArticleListView userArticles={camelizeDeeply(data)} />
  )
}
