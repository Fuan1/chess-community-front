export interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    username: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
}

export interface GetPostsResponse {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
}
