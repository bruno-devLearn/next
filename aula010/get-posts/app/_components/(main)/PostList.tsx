"use client";

import { useGetPosts } from "@/app/_utils/hooks";
import { usePosts } from "@/app/_utils/store";
import { PostsBySearch, PostsProps } from "@/app/_utils/types";
import { Post } from "./Post";

export function PostList() {
    const { searchValue } = usePosts();
    const { data } = useGetPosts();

    const dtMap = !searchValue
        ? (data as PostsProps).data
        : (data as PostsBySearch).results;

    return (
        <div className="space-y-4">
            {dtMap.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
