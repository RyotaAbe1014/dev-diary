export default function Page({
  params,
}: {
  params: { id: string }
}) {
  return (
    <>
      <div className="container grid max-w-6xl gap-4 px-4 md:px-6">
        <h1>{params.id}</h1>
        {/* TODO: title and description */}

        {/* TODO: add MarkDownEditor */}

      </div >

    </>
  );
}