'use client';

import { usePathname } from "next/navigation";
import { HeaderView } from "./view/header-view";

export function Header() {
  const url = usePathname();
  return (
    <HeaderView pathName={url} />
  );
}