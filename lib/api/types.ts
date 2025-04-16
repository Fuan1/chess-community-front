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
  commentCount: number;
}

export interface GetPostsResponse {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
}

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    username: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: number;
}

export interface PostDetail extends Omit<Post, "commentCount"> {
  comments: Comment[];
}
