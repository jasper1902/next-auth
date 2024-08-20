"use client";

import { SVGProps, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserButton } from "./auth/user-button";
import { usePathname } from "next/navigation";
import { currentUser } from "@/lib/auth";
import { User, UserRole } from "@prisma/client";

type Props = {
  user: boolean;
};
export default function Component({ user }: Props) {
  const pathname = usePathname();

  return (
    <header className="w-full bg-background text-foreground">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-bold">Home</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {user && (
              <>
                <Link
                  href="/server"
                  className={`hover:text-primary ${
                    pathname === "/server" && "text-primary font-bold"
                  }`}
                  prefetch={false}
                >
                  Server
                </Link>
                <Link
                  href="/client"
                  className={`hover:text-primary ${
                    pathname === "/client" && "text-primary font-bold"
                  }`}
                  prefetch={false}
                >
                  Client
                </Link>
                <Link
                  href="/admin"
                  className={`hover:text-primary ${
                    pathname === "/admin" && "text-primary font-bold"
                  }`}
                  prefetch={false}
                >
                  Admin
                </Link>
                <Link
                  href="/settings"
                  className={`hover:text-primary ${
                    pathname === "/settings" && "text-primary font-bold"
                  }`}
                  prefetch={false}
                >
                  Settings
                </Link>
              </>
            )}
          </nav>
          {user && <UserButton />}
          <ThemeSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                {user && (
                  <>
                    <Link
                      href="/server"
                      className={`font-medium hover:text-primary ${
                        pathname === "/server" && "text-primary font-bold"
                      }`}
                      prefetch={false}
                    >
                      Server
                    </Link>
                    <Link
                      href="/client"
                      className={`font-medium hover:text-primary ${
                        pathname === "/client" && "text-primary font-bold"
                      }`}
                      prefetch={false}
                    >
                      Client
                    </Link>
                    <Link
                      href="/admin"
                      className={`font-medium hover:text-primary ${
                        pathname === "/admin" && "text-primary font-bold"
                      }`}
                      prefetch={false}
                    >
                      Admin
                    </Link>
                    <Link
                      href="/settings"
                      className={`font-medium hover:text-primary ${
                        pathname === "/settings" && "text-primary font-bold"
                      }`}
                      prefetch={false}
                    >
                      Settings
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
