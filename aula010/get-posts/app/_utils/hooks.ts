import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editPost, fetchData, FetchLikes, fetchPost } from "./fetchPosts";
import { createPost, deletePost, postLike } from "./posts";
import { Post } from "./types";

export function useGetPosts(searchValue?: string, page: number) {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["products", searchValue, page],
        queryFn: () => fetchData(searchValue, page),
    });

    return { data, isError, isLoading };
}

export function useGetLikes(id: number) {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["likes", id],
        queryFn: () => FetchLikes(id),
    });

    return { data, isError, isLoading };
}

export function usePostLike() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => postLike(id),
        onSuccess: (_data, id) => {
            queryClient.invalidateQueries(["likes", id]);
        },
    });
}

export function useDeletePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
                exact: false,
            });
        },
    });
}

export function useCreatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (post: Post) => createPost(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
                exact: false,
            });
        },
    });
}

export function useGetPost(id: number) {
    return useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchPost(id),
    });
}

export function useEditPost() {
    const queryClient = useQueryClient();

    return useMutation({
        // receber um único objeto como variável
        mutationFn: ({ id, post }: { id: number; post: Post }) =>
            editPost(id, post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
                exact: false,
            });
        },
    });
}
