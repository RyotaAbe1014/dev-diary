'use client';

import { usePathname } from "next/navigation";
import { HeaderView } from "./view/header-view";
import { cookies } from "next/headers";

export function Header() {
  const url = usePathname();
  const token = cookies().get('token')?.value;


  return (
    <HeaderView pathName={url} isLogin={!!token} />
  );
}