import React from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground ">
          <Header />
          <div className="flex-1 overflow-y-auto">
            <div className="grid md:grid-cols-[auto_1fr] h-full w-full">
              <Sidebar />
              <div className="flex-1 overflow-y-auto">
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
