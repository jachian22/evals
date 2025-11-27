"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

const navItems = [
  { href: "/", label: "Dashboard", icon: "📊" },
  { href: "/documents", label: "Documents", icon: "📄" },
  { href: "/datasets", label: "Datasets", icon: "📁" },
  { href: "/prompts", label: "Prompts", icon: "✏️" },
  { href: "/models", label: "Models", icon: "🤖" },
  { href: "/evals", label: "Evaluations", icon: "🧪" },
  { href: "/review", label: "Review Queue", icon: "👁️" },
];

export function Navigation() {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  // Hide navigation on auth pages
  const isAuthPage = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
  if (isAuthPage) {
    return null;
  }

  // Check if user is admin - matches server-side logic
  const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",").map((e) => e.trim().toLowerCase()) ?? [];
  
  // Check all user emails against the whitelist
  const userEmails = user?.emailAddresses.map(e => e.emailAddress.toLowerCase()) ?? [];
  const isAdmin = userEmails.some(email => adminEmails.includes(email));

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-bg-secondary border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-text-primary">PDF Eval Tool</h1>
        <p className="text-xs text-text-tertiary mt-1">
          LLM Entity Extraction Testing
        </p>
      </div>

      <div className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4 border-t border-border">
        {isLoaded && user ? (
          <div className="flex items-center gap-3">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                },
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">
                {user.firstName ?? user.emailAddresses[0]?.emailAddress?.split("@")[0]}
              </p>
              <div className="flex items-center gap-1.5">
                {isAdmin ? (
                  <span className="inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded bg-accent/20 text-accent">
                    Admin
                  </span>
                ) : (
                  <span className="inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded bg-bg-tertiary text-text-tertiary">
                    Viewer
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-xs text-text-tertiary">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </nav>
  );
}
