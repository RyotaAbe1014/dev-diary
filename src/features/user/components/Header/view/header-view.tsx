'use client';

import Link from "next/link";

type Props = {
    pathName: string;
};

export function HeaderView({ pathName }: Props) {

  return (
    <header className="border-b">
      <div className="container py-4 md:py-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold tracking-tighter">{pathName}</h1>
          <Link
            className="ml-auto inline-flex h-10 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="#"
          >
            New Article
          </Link>
        </div>
      </div>
    </header>
  );
}