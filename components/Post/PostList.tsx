import { Post } from "@/lib/api/types";
import PostBox from "./PostBox";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="">
      {posts.map((post) => (
        <PostBox key={post.id} post={post} />
      ))}
    </div>
  );
}
