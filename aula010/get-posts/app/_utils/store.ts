import { create } from "zustand";

interface PostsProps {
    searchValue: string | undefined;
    page: number;
    totalPages: number;
    error: boolean;
    loading: boolean;
    setSearch: (newValue: string) => void;
    setPage: (newPage: number) => void;
    setTotalPages: (newTotal: number) => void;
    setError: (v: boolean) => void;
    setLoad: (v: boolean) => void;
}

export const usePosts = create<PostsProps>((set) => ({
    searchValue: undefined,
    page: 1,
    totalPages: 1,
    error: false,
    loading: false,
    setSearch: (newValue) => set({ searchValue: newValue }),
    setPage: (newPage) => set({ page: newPage }),
    setTotalPages: (newTotal) => set({ totalPages: newTotal }),
    setError: (v) => set({ error: v }),
    setLoad: (v) => set({ loading: v }),
}));
