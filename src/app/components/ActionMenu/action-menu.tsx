'use client';

import { logout } from "@/features/auth/actions/logout";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from "@/lib/components/ui/dropdown-menu";
import Link from "next/link";

export function ActionMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-auto inline-flex h-10 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
        Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/user/detail/">
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        <Link href="/user/article/create/">
          <DropdownMenuItem>New Article</DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={() => {
          logout();
        }}>
            logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
  );
}