import { UserArticleCreate } from "@/features/user/components/userArticleCreate/UserArticleCreate";

export default function Page() {
  return (
    <div className="container grid max-w-6xl gap-4 px-4 md:px-6">
      <UserArticleCreate />
    </div>
  );
}