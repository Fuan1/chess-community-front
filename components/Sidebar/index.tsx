import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/sidebarStore';
import SidebarItem from './SidebarItem';
import SidebarDivider from './SidebarDivider';
import SidebarSection from './SidebarSection';
import { X } from 'lucide-react';

interface SidebarProps {
    className?: string;
}

function Sidebar({ className }: SidebarProps) {
    const { isOpen, close } = useSidebarStore();

    // 사이드바 열릴 때 body 스크롤 비활성화 (모바일에서만)
    useEffect(() => {
        if (isOpen) {
            // 모바일에서 사이드바 열릴 때 body 스크롤 방지
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            // 사이드바 닫힐 때 스크롤 다시 활성화
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* 모바일 오버레이 */}
            {isOpen && <div className="md:hidden fixed inset-0 bg-background bg-opacity-50 z-40" onClick={close} />}

            {/* 사이드바 */}
            <aside
                className={cn(
                    'fixed md:sticky top-0 left-0 h-screen w-64 z-50 md:z-10',
                    'bg-background border-r border-border-light',
                    'transform transition-transform duration-300 ease-in-out',
                    'flex flex-col',
                    isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
                    'py-4 px-4',
                    className
                )}
            >
                {/* 모바일 닫기 버튼 */}
                <div className="md:hidden flex justify-end mb-4 flex-shrink-0">
                    <button
                        onClick={close}
                        className="text-text-normal hover:text-text-light"
                        aria-label="사이드바 닫기"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* 스크롤 가능한 네비게이션 영역 */}
                <nav className=" overflow-y-auto">
                    <SidebarItem href="/game" label="Game" />
                    <SidebarItem href="/community" label="Community" />
                    <SidebarItem href="/learn" label="Learn" />
                    <SidebarItem href="/tournaments" label="Tournaments" />
                    <SidebarDivider direction="horizontal" className="my-4" />
                    <SidebarSection title="Menu">
                        <div className="space-y-2">
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                            <SidebarItem href="/game" label="Game" />
                            <SidebarItem href="/community" label="Community" />
                            <SidebarItem href="/learn" label="Learn" />
                            <SidebarItem href="/tournaments" label="Tournaments" />
                        </div>
                    </SidebarSection>

                    <SidebarDivider direction="horizontal" className="my-4" />

                    <SidebarSection title="Favorites">
                        <div className="space-y-2">
                            <SidebarItem href="/favorites/players" label="Favorites" />
                            <SidebarItem href="/favorites/games" label="Games" />
                            <SidebarItem href="/favorites/players" label="Favorites" />
                            <SidebarItem href="/favorites/games" label="Games" />
                            <SidebarItem href="/favorites/players" label="Favorites" />
                            <SidebarItem href="/favorites/games" label="Games" />
                            <SidebarItem href="/favorites/players" label="Favorites" />
                            <SidebarItem href="/favorites/games" label="Games" />
                        </div>
                    </SidebarSection>
                    <SidebarDivider direction="horizontal" className="my-4" />

                    {/* 푸터 영역 */}
                    <SidebarSection title="Resources">
                        <SidebarItem href="/help" label="Help" />
                        <SidebarItem href="/settings" label="Settings" />
                    </SidebarSection>
                </nav>
            </aside>
        </>
    );
}

export { Sidebar };
