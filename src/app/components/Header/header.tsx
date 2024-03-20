'use client';

import { usePathname } from "next/navigation";
import { HeaderView } from "./view/header-view";

export type HeaderProps = {
  isLogin: boolean;
};

export function Header({isLogin}: HeaderProps) {
  const url = usePathname();
  return (
    <HeaderView pathName={url} isLogin={isLogin} />
  );
}