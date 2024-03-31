export default function Page({
  params,
}: {
  params: { articleId: string }
}) {
  return (
    <>
      <div className="container grid max-w-6xl gap-4 px-4 md:px-6">
        <h1>{params.articleId}</h1>
        {/* TODO: title and description */}

        {/* TODO: add MarkDownEditor */}

      </div >

    </>
  );
}