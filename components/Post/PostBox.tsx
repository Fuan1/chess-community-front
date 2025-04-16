import { Post } from '@/lib/api/post/types';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import Link from 'next/link';

interface PostProps {
    post: Post;
}

export default function PostBox({ post }: PostProps) {
    return (
        <div className="border-b border-border-light pb-1.5 pt-1.5">
            <Link
                href={`/r/${post.id}/comments`}
                className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
                {/* avatar channel time - join expend */}
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                        {post.author.avatar && (
                            <img
                                src={post.author.avatar}
                                alt={post.author.username}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div className="text-xs font-semibold">u/{post.author.username}</div>
                    <div className="text-xs text-gray-500">
                        {formatDistanceToNow(new Date(post.createdAt), {
                            addSuffix: true,
                            locale: ko,
                        })}
                    </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>

                <p className="text-gray-600 line-clamp-2 text-sm mb-4">{post.content}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        <span>{post.commentCount}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
