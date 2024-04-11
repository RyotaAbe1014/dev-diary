import { Suspense } from "react";
import { UserArticleDetail } from "@/features/user/components/UserArticleDetail/UserArticleDetail";
import { GlobalSpinnerView } from "@/utils/Loader/components/GlobalSpinner/view/GlobalSpinnerView";

export default function Page({
  params,
}: {
  params: { articleId: string }
}) {

  return (
    <Suspense fallback={<GlobalSpinnerView />}>
      <UserArticleDetail articleId={params.articleId} />
    </Suspense>
  );
}