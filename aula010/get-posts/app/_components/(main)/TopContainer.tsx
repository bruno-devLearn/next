"use client";

import { usePosts } from "@/app/_utils/store";
import { useRouter } from "next/navigation";
import { BiPlus } from "react-icons/bi";

export function TopContainer() {
    const { page, totalPages } = usePosts();
    const router = useRouter();

    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-gray-900">Lista de Posts</h1>
                <p className="text-gray-600 mt-1">
                    Página {page} de {!totalPages ? 1 : totalPages}
                </p>
            </div>
            <button
                onClick={() => router.push("/create-post")}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
                <BiPlus className="lucide lucide-plus w-5 h-5" />
                Novo Post
            </button>
        </div>
    );
}
