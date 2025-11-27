import { useQuery } from "@tanstack/react-query";
import { fetchData, FetchLikes } from "./fetchPosts";

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
