import { UserArticleList } from "@/features/user/components/UserArticleList/user-article-list";
import { GlobalSpinnerView } from "@/utils/Loader/components/GlobalSpinner/view/GlobalSpinnerView";
import { Suspense } from "react";

export default function Page() {
  return (
      <Suspense fallback={<GlobalSpinnerView />}>
        <UserArticleList />
      </Suspense>
  );
}