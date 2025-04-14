import React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fallback?: string; // 이니셜 또는 대체 텍스트
  status?: "online" | "offline" | "away" | "busy" | "none";
  border?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  alt = "",
  size = "md",
  fallback,
  status = "none",
  border = false,
  ...props
}) => {
  const [imageError, setImageError] = React.useState(!src);

  const handleImageError = () => {
    setImageError(true);
  };

  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-14 h-14 text-lg",
    xl: "w-20 h-20 text-xl",
  };

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500",
    none: "hidden",
  };

  const statusSizes = {
    xs: "w-1.5 h-1.5 right-0 bottom-0",
    sm: "w-2 h-2 right-0 bottom-0",
    md: "w-2.5 h-2.5 right-0 bottom-0",
    lg: "w-3 h-3 right-0.5 bottom-0.5",
    xl: "w-4 h-4 right-1 bottom-1",
  };

  // 이니셜 생성
  const getInitials = () => {
    if (!fallback) return "";
    return fallback
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div
      className={cn(
        "relative inline-block rounded-full overflow-hidden bg-border-light",
        sizes[size],
        border && "ring-2 ring-background",
        className
      )}
      {...props}
    >
      {!imageError && src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-text-normal bg-border-light">
          {getInitials()}
        </div>
      )}

      {status !== "none" && (
        <span
          className={cn(
            "absolute block rounded-full ring-2 ring-background",
            statusColors[status],
            statusSizes[size]
          )}
        />
      )}
    </div>
  );
};

export { Avatar };
