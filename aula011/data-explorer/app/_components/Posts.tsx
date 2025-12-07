import { FiFileText, FiMessageCircle } from "react-icons/fi";
import { TransformedPostProps, UserDetailsResponse } from "../_utils/types";
import { UserInfo } from "./UserInfo";

export function PostsPage({ data }: { data: UserDetailsResponse }) {
    return (
        <>
            <UserInfo user={data.user} totalPosts={data.totalPosts} />
            <Posts data={data} />
        </>
    );
}

function Posts({ data }: { data: UserDetailsResponse }) {
    return (
        <div>
            <h2 className="text-gray-900 mb-4">
                Posts do Usuário ({data.totalPosts})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

function PostCard({ post }: { post: TransformedPostProps }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiFileText className="text-blue-600" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{post.body}</p>
                </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                    <FiMessageCircle size={16} />
                    <span>{post.commentsCount} comentários</span>
                </div>
                <span className="text-gray-400">Post #{post.id}</span>
            </div>
        </div>
    );
}
