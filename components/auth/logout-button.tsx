"use client";

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const LogoutButton = ({ children }: Props) => {
  const router = useRouter();
  const onClick = async () => {
    await logout();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
