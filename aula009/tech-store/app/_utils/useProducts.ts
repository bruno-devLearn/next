import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchProducts } from "./fetch";

export function useProducts(searchValue?: string, globalId?: number) {
    return useQuery({
        queryKey: ["products", searchValue ?? null, globalId ?? null],
        queryFn: () => fetchProducts(searchValue, globalId),
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
