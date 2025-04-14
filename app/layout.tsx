'use client';

import React from 'react';
import './globals.css';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ko">
            <body>
                <div className="h-screen overflow-hidden bg-background text-foreground flex flex-col">
                    <Header />

                    <div className="flex flex-1 relative">
                        <Sidebar />

                        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
