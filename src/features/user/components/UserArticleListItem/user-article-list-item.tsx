/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KXsgI3U1vsI
 */
import { UserArticle } from "@/features/article/types/UserArticle";
import Link from "next/link";

export type UserArticleListItemProps = {
  userArticle: UserArticle;
};
export function UserArticleListItem({ userArticle }: UserArticleListItemProps) {

  return (
    <Link
      key={userArticle.id}
      href={`/user/article/${userArticle.id}`}
      className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-slate-800"
    >
      <div className="grid items-start gap-1">
        <h2 className="text-xl font-semibold">{userArticle.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Published on {userArticle.publishedAt}</p>
        <p className="text-sm">{userArticle.description}</p>
      </div>
    </Link>
  )
}
