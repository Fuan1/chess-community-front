import { Suspense } from "react";
import PostList from "@/components/Post/PostList";
import PostListSkeleton from "@/components/Post/PostListSkeleton";
import { getPosts } from "@/lib/api/post";
import Link from "next/link";

// 데이터를 가져오는 컴포넌트
async function PostListWrapper() {
  const { posts } = await getPosts();
  return <PostList posts={posts} />;
}

export default function CommunityPage() {
  return (
    <div className="container mx-auto max-w-5xl">
      {/* sort area */}
      <div className="h-12 bg-amber-100"></div>

      <div className="grid md:grid-cols-[1fr_auto] space-x-4">
        <Suspense fallback={<PostListSkeleton />}>
          <PostListWrapper />
        </Suspense>
        <div className="grid grid-rows-2 m-4 space-y-2">
          <div className="w-72 bg-neutral-800 rounded-lg "></div>
          <div className="text-xs flex flex-col space-y-2">
            <div className="flex space-x-2">
              <Link href={`/community`}>Cop Rules</Link>
              <Link href={`/community`}>Privacy Policy</Link>
              <Link href={`/community`}>User Agreement </Link>
            </div>
            <p>Cop, Inc. © 2025. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
