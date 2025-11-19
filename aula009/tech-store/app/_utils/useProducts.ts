import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchProducts } from "./fetch";

export function useProducts(
    searchValue?: string,
    globalId?: number,
    categories: string[] = []
) {
    return useQuery({
        // incluir `categories` na queryKey para disparar refetch quando mudar
        queryKey: [
            "products",
            searchValue ?? null,
            globalId ?? null,
            categories,
        ],
        queryFn: () => fetchProducts(searchValue, globalId, categories),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
}

export function useCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: Infinity,
        gcTime: Infinity,
    });
}
