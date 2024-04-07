'use client';

import { usePathname } from "next/navigation";
import { HeaderView } from "./view/header-view";

export type HeaderProps = {
  isLogin: boolean;
  email?: string;
};

export function Header({isLogin, email}: HeaderProps) {
  const url = usePathname();
  return (
    <HeaderView pathName={url} isLogin={isLogin} email={email} />
  );
}