'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from "@/lib/components/ui/dropdown-menu";
import Link from "next/link";

type Props = {
  pathName: string;
  isLogin: boolean;
};

export function HeaderView({ pathName, isLogin }: Props) {
  return (
    <header className="border-b top-0 left-0 w-full bg-white dark:bg-gray-900 dark:border-gray-800 z-100 h-20">
      <div className="container py-4 md:py-6 pt-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold tracking-tighter">{pathName}</h1>
          {isLogin ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-auto inline-flex h-10 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                Open
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              className="ml-auto inline-flex h-10 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}