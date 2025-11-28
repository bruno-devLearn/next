import { Datum } from "@/app/_utils/types";
import { LikeBtn } from "./LikeBtn";
import { EditBtn } from "./EditBtn";
import { DeleteBtn } from "./DeleteBtn";

export function Post({ post }: { post: Datum }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{post.body}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <LikeBtn id={post.id} />
                    <EditBtn id={post.id} />
                    <DeleteBtn id={post.id} />
                </div>
            </div>
        </div>
    );
}
