import { create } from "zustand";

interface PostsProps {
    searchValue: string | undefined;
    error: boolean;
    loading: boolean;
    setSearch: (newValue: string) => void;
    setError: (v: boolean) => void;
    setLoad: (v: boolean) => void;
}

export const usePosts = create<PostsProps>((set) => ({
    searchValue: undefined,
    error: false,
    loading: false,
    setSearch: (newValue) => set({ searchValue: newValue }),
    setError: (v) => set({ error: v }),
    setLoad: (v) => set({ loading: v }),
}));
