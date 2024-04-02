import { UserArticleCreate } from "@/features/user/components/userArticleCreate/UserArticleCreate";

export default function Page() {
  console.log("Page: src/app/%28routes%29/%28authorized%29/user/%28routes%29/article/%28routes%29/create/page.tsx");
  return (
    <div className="container grid max-w-6xl gap-4 px-4 md:px-6">
      <UserArticleCreate />
    </div>
  );
}