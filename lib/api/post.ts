// lib/api/post.ts
import { GetPostsResponse, Post } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 목업 데이터
const mockPosts: Post[] = Array.from({ length: 20 }, (_, i) => ({
  id: `post-${i + 1}`,
  title: `체스 전략 가이드 ${i + 1}`,
  content: `체스 전략에 대한 상세 내용입니다. 이 글은 초보자부터 전문가까지 모두가 참고할 수 있는 내용을 담고 있습니다.`,
  author: {
    id: `user-${(i % 5) + 1}`,
    username: `체스마스터${(i % 5) + 1}`,
    avatar: `/images/avatars/user-${(i % 5) + 1}.png`,
  },
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
  updatedAt: new Date(Date.now() - i * 43200000).toISOString(),
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 30),
  revalidate: 60,
}));

// 목업 데이터 반환 함수
export function getMockPosts(page = 1, limit = 10): GetPostsResponse {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = mockPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    total: mockPosts.length,
    page,
    limit,
  };
}

// 목업 데이터에서 특정 포스트 반환 함수
export function getMockPostById(id: string): Post | undefined {
  return mockPosts.find((post) => post.id === id);
}

// 목업 데이터 생성 함수
function generateMockPosts(count: number): Post[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `post-${i + 1}`,
    title: `테스트 게시글 ${i + 1}`,
    content: `이것은 테스트 게시글 ${
      i + 1
    }의 내용입니다. 실제 API가 준비되면 이 부분은 실제 데이터로 대체될 예정입니다.`,
    author: {
      id: `user-${i + 1}`,
      username: `사용자${i + 1}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 1}`,
    },
    createdAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString(),
    updatedAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString(),
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));
}

// 인위적인 지연을 위한 함수
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPosts(
  page = 1,
  limit = 10
): Promise<GetPostsResponse> {
  // 2초 지연
  await delay(500);

  // 실제 API 호출 대신 목업 데이터 사용
  const posts = generateMockPosts(limit);

  return {
    posts,
    total: 100,
    page,
    limit,
  };
}

export async function getPostById(id: string) {
  // 2초 지연
  await delay(2000);

  // 실제 API 호출 대신 목업 데이터 사용
  const posts = generateMockPosts(1);
  return posts[0];
}
