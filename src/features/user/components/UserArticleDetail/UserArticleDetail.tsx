
import { createClient } from "@/lib/supabase/server";
import { UserArticleDetailView } from "./view/UserArticleDetailView";
import { UserArticle } from "@/features/article/types/UserArticle";
import { camelizeDeeply } from "@/utils/camelizeDeeply/camelizeDeeply";

type UserArticleDetailProps = {
  articleId: string;
};

export async function UserArticleDetail({ articleId }: UserArticleDetailProps) {
  const supabase = createClient();
  const { data, error } = await supabase.from('articles').select('*').eq('id', articleId);
  if (error) {
    throw error;
  }
  return (
    <UserArticleDetailView article={camelizeDeeply(data[0]) as UserArticle} />
  )
}
