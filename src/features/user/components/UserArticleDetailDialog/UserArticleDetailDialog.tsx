import { createClient } from "@/lib/supabase/server";
import { UserArticleDetailDialogView } from "./view/UserArticleDetailDialog";
import { camelizeDeeply } from "@/utils/camelizeDeeply/camelizeDeeply";
import { UserArticle } from "@/features/article/types/UserArticle";

type UserArticleDetailDialogProps = {
  articleId: string;
};

export async function UserArticleDetailDialog({ articleId }: UserArticleDetailDialogProps) {
  const supabase = createClient();
  const { data, error } = await supabase.from('articles').select('*').eq('id', articleId);
  if (error) {
    throw error;
  }
  return (
    <UserArticleDetailDialogView article={camelizeDeeply(data[0]) as UserArticle} />
  )
}
