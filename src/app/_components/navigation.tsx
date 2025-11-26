"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <div className="text-xs text-text-tertiary">
          <p>Version 1.0.0</p>
        </div>
      </div>
    </nav>
  );
}

