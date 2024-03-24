import Link from "next/link";

export default function Page() {
  return (
    <div className="container grid max-w-6xl gap-4 px-4 md:px-6">
      <div className="grid grid-cols-2 gap-4">
        <Link href="#">
          <div className="flex flex-col gap-4 p-4 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
            <p className="text-xl font-semibold">
              User Menu
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              User menu description or actions
            </p>
          </div>
        </Link>
        <Link href="/user/article">
          <div className="flex flex-col gap-4 p-4 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
            <p className="text-xl font-semibold" >Article Menu</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Article menu description or actions
            </p>
          </div>
        </Link>
      </div>
    </div >
  );
}