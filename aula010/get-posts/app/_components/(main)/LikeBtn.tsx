"use client";

import { useGetLikes, usePostLike } from "@/app/_utils/hooks";
import { usePosts } from "@/app/_utils/store";
import { useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import { TbLoader2 } from "react-icons/tb";

export function LikeBtn({ id }: { id: number }) {
    const { data, isError, isLoading } = useGetLikes(id);
    const { mutate, isPending } = usePostLike();
    const { setError } = usePosts();

    useEffect(() => {
        setError(isError);
    }, [isError, setError]);

    return (
        <button
            className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50"
            title="Curtir post"
            onClick={() => mutate(id)}
            disabled={isPending | isLoading}
        >
            {isLoading | isPending ? (
                <TbLoader2 className="w-4 h-4 animate-spin text-red-500" />
            ) : (
                <>
                    <span className="text-gray-700">{data?.likes}</span>
                    <BiHeart className="lucide lucide-heart w-4 h-4 text-red-500" />
                </>
            )}
        </button>
    );
}
