import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebarStore";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useSidebarStore();

  return (
    <header
      className={cn(
        "w-full py-2 px-4 md:px-6 border-b flex items-center justify-between",
        "border-border-light bg-background",
        className
      )}
    >
      {/* 모바일 메뉴 버튼 */}
      <div className="md:hidden">
        <button
          className="text-text-normal hover:text-text-light"
          aria-label={isSidebarOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={toggleSidebar}
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
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* 로고 섹션 */}
      <div className="flex items-center">
        <Link href="/" className="text-text-light font-bold text-xl">
          체스 커뮤니티
        </Link>
      </div>
      <div className="hidden md:block min-w-lg">
        <Input placeholder="Search..." />
      </div>

      {/* 사용자 액션 영역 */}
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="secondary">로그인</Button>
        <Button variant="primary">회원가입</Button>
      </div>
    </header>
  );
};

export { Header };
