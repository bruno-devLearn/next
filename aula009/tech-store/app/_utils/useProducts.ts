import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./fetchData";

export function useProducts(searchValue?: string, globalId?: number) {
    return useQuery({
        queryKey: ["products", searchValue ?? null, globalId ?? null],
        queryFn: () => fetchData(searchValue, globalId),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
}
