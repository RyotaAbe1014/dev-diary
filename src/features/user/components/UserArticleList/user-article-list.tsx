import { getArticleList } from "@/features/article/actions";
import { UserArticleListView } from "./view/user-article-list-view";
import { camelizeDeeply } from "@/utils/camelizeDeeply/camelizeDeeply";
import { unstable_cache } from "next/cache";


const cachedUserArticleList = unstable_cache(getArticleList, ['userArticleList'], { tags: ['userArticleList'], revalidate: 1});

export async function UserArticleList() {
  const data = await cachedUserArticleList();
  if (!data) {
    return null;
  }
  return (
    <UserArticleListView userArticles={camelizeDeeply(data)} />
  )
}
