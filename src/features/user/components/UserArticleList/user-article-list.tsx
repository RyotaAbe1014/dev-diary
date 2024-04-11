import { logout } from "@/features/auth/actions/logout";
import { createClient } from "@/lib/supabase/server";
import { UserArticleListView } from "./view/user-article-list-view";
import { UserArticle } from "@/features/article/types/UserArticle";

export async function UserArticleList() {
  const supabase = createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data.user;

  if (!user) {
    await logout();
    return;
  }

  const {data, error} = await supabase.from('articles').select('*').filter('user_id', 'eq', user.id);
  console.log(data);
  return (
    <UserArticleListView userArticles={data as UserArticle[]} />
  )
}
