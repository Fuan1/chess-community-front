import { Suspense } from "react";
import { getPostById } from "@/lib/api/post";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import CommentList from "@/components/Comment/CommentList";
import CommentListSkeleton from "@/components/Comment/CommentListSkeleton";

interface PostCommentsPageProps {
  params: {
    r: string;
  };
}

async function PostDetailWrapper({ postId }: { postId: string }) {
  const post = await getPostById(postId);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 게시글 내용 */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.username}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="text-sm font-semibold">u/{post.author.username}</div>
          <div className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
              locale: ko,
            })}
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{post.content}</p>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>{post.comments.length} 댓글</span>
          </div>
        </div>
      </div>

      {/* 댓글 목록 */}
      <Suspense fallback={<CommentListSkeleton />}>
        <CommentList comments={post.comments} />
      </Suspense>
    </div>
  );
}

export default function PostCommentsPage({ params }: PostCommentsPageProps) {
  return (
    <div className="container mx-auto max-w-5xl py-6">
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetailWrapper postId={params.r} />
      </Suspense>
    </div>
  );
}
