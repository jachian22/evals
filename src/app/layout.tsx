import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/react";
import { Navigation } from "@/app/_components/navigation";
import { MainContent } from "@/app/_components/main-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF Eval Tool",
  description: "LLM evaluation tool for PDF entity extraction",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-bg-primary">
        <ClerkProvider>
          <TRPCReactProvider>
            <div className="flex min-h-screen">
              <Navigation />
              <MainContent>{children}</MainContent>
            </div>
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
