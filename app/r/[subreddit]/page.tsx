import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// UI 컴포넌트
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';

// 아이콘
import {
    ArrowUp,
    ArrowDown,
    MessageSquare,
    Share,
    Bookmark,
    MoreHorizontal,
    Flame,
    Clock,
    TrendingUp,
} from 'lucide-react';
import { Suspense } from 'react';
import PostListSkeleton from '@/components/Post/PostListSkeleton';
import PostList from '@/components/Post/PostList';
import { getPosts } from '@/lib/api/post/post';

// 페이지 메타데이터 생성
export async function generateMetadata({ params }: { params: { subreddit: string } }): Promise<Metadata> {
    const { subreddit } = await params;

    return {
        title: `r/${subreddit} - Reddit Clone`,
        description: `Posts and discussions from the ${subreddit} community`,
    };
}

async function PostListWrapper() {
    const { posts } = await getPosts();
    return <PostList posts={posts} />;
}

// 서브레딧 페이지 컴포넌트
export default async function SubredditPage({
    params,
    searchParams,
}: {
    params: { subreddit: string };
    searchParams?: { sort?: string };
}) {
    // 서버 사이드에서 URL 파라미터 가져오기
    const subredditName = params.subreddit;
    const sort = searchParams?.sort || 'hot';

    return (
        <main className="max-w-6xl mx-auto p-4">
            <div className="bg-amber-200 h-32 w-full rounded-lg"></div>
            <div className="flex relative -top-8 px-4 justify-between w-full">
                <div className="flex space-x-2 mr-2">
                    <Image
                        src={`https://fastly.picsum.photos/id/58/48/48.jpg?hmac=ud8XXIVSVC-nUer2G4LKyUrrC1enDEvNMzQ0RTaeEq8`}
                        alt={subredditName}
                        width={90}
                        height={90}
                        className="rounded-full border-4 border-black"
                    />
                </div>
                <div className="flex items-end w-full">
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-3xl font-semibold">r/{subredditName}</h1>
                        <div className="flex space-x-2">
                            <Button variant="outline">Create Post</Button>
                            <Button variant="outline">Alram</Button>
                            <Button variant="outline">Join</Button>
                            <Button variant="outline">...</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-[1fr_auto] space-x-4">
                <Suspense fallback={<PostListSkeleton />}>
                    <PostListWrapper />
                </Suspense>
                <div className="grid grid-rows-2 m-4 space-y-2">
                    <div className="w-72 bg-neutral-800 rounded-lg "></div>
                    <div className="text-xs flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            <Link href={`/`}>Cop Rules</Link>
                            <Link href={`/`}>Privacy Policy</Link>
                            <Link href={`/`}>User Agreement </Link>
                        </div>
                        <p>Cop, Inc. © 2025. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
