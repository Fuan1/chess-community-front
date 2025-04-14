/**
 * 공통 타입 정의
 */

// 사용자 타입
export interface User {
  id: string;
  name: string;
  email: string;
}

// API 응답 타입
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// 페이지네이션 타입
export interface PaginationParams {
  page: number;
  limit: number;
}

// 페이지네이션 결과 타입
export interface PaginatedResults<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
