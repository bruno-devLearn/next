import { Datum } from "@/app/_utils/types";
import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { LikeBtn } from "./LikeBtn";

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
                    <button
                        className="cursor-pointer p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                        title="Editar post"
                    >
                        <FiEdit2 className="lucide lucide-pen w-4 h-4 text-blue-600" />
                    </button>
                    <button
                        className="cursor-pointer p-2 rounded-lg border border-gray-300 hover:bg-red-50 transition-colors disabled:opacity-50"
                        title="Deletar post"
                    >
                        <BiTrash className="lucide lucide-trash2 lucide-trash-2 w-4 h-4 text-red-600" />
                    </button>
                </div>
            </div>
        </div>
    );
}
