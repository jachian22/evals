"use client";

import { usePathname } from "next/navigation";

export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  return (
    <main className={isAuthPage ? "flex-1" : "flex-1 ml-64"}>
      {children}
    </main>
  );
}

