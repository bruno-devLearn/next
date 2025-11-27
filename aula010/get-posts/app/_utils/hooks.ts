import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData, FetchLikes } from "./fetchPosts";
import { deletePost, postLike } from "./posts";

export function useGetPosts(searchValue?: string, page: number = 1) {
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
