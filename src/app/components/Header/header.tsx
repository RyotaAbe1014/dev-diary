'use client';

import { HeaderView } from "./view/header-view";

export type HeaderProps = {
  isLogin: boolean;
  email?: string;
};

export function Header({isLogin, email}: HeaderProps) {
  return (
    <HeaderView isLogin={isLogin} email={email} />
  );
}