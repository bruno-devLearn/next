"use client";

import { useGetPosts } from "@/app/_utils/hooks";
import { usePosts } from "@/app/_utils/store";
import { PostsBySearch, PostsProps } from "@/app/_utils/types";
import { Post } from "./Post";

export function PostList() {
    const { searchValue, page } = usePosts();
    const { data } = useGetPosts(searchValue, page);

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
