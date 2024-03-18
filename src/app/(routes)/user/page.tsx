import { Login } from "@/features/auth/components/Login/login";
import Link from "next/link";

export default function Page() {
  return (

    <div className="container grid max-w-6xl gap-4 px-4 md:px-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 p-4 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
          <Link className="text-xl font-semibold" href="#">
            User Menu
          </Link>
          <Link className="text-sm text-gray-500 dark:text-gray-400" href="#">
            User menu description or actions
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-4 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
          <Link className="text-xl font-semibold" href="#">
            Article Menu
          </Link>
          <Link className="text-sm text-gray-500 dark:text-gray-400" href="#">
            Article menu description or actions
          </Link>
        </div>
      </div>
    </div>
  );
}