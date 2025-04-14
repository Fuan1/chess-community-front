import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebarStore";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { isOpen, close } = useSidebarStore();

  return (
    <>
      {/* 모바일 오버레이 - 모바일에서만 보이고 사이드바가 열렸을 때만 표시 */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background bg-opacity-50 z-40"
          onClick={close}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 h-screen w-64 z-50 md:z-10 bg-background border-r border-border-light transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "flex flex-col py-6 px-4",
          className
        )}
      >
        {/* 모바일 닫기 버튼 */}
        <div className="md:hidden flex justify-end mb-6">
          <button
            onClick={close}
            className="text-text-normal hover:text-text-light"
            aria-label="사이드바 닫기"
          >
            <svg
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* 사이드바 내용 */}
        <nav className="flex-1 space-y-4">
          <h2 className="text-text-light font-bold text-lg mb-4">메뉴</h2>

          <div className="space-y-2">
            <Link
              href="/games"
              className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
            >
              게임
            </Link>
            <Link
              href="/community"
              className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
            >
              커뮤니티
            </Link>
            <Link
              href="/learn"
              className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
            >
              학습
            </Link>
            <Link
              href="/tournaments"
              className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
            >
              대회
            </Link>
          </div>

          <h2 className="text-text-light font-bold text-lg mt-8 mb-4">
            즐겨찾기
          </h2>
          <div className="space-y-2">
            <Link
              href="/favorites/games"
              className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
            >
              저장된 게임
            </Link>
            <Link
              href="/favorites/players"
              className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
            >
              즐겨찾는 플레이어
            </Link>
          </div>
        </nav>

        {/* 푸터 영역 */}
        <div className="mt-6 border-t border-border-light pt-4">
          <Link
            href="/settings"
            className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
          >
            설정
          </Link>
          <Link
            href="/help"
            className="block py-2 px-3 rounded-md hover:bg-border-light text-text-normal hover:text-text-light transition-colors"
          >
            도움말
          </Link>
        </div>
      </aside>
    </>
  );
};

export { Sidebar };
