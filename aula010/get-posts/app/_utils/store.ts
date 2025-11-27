import { create } from "zustand";

interface PostsProps {
    searchValue: string | undefined;
    error: boolean;
    setSearch: (newValue: string) => void;
    setError: (v: boolean) => void;
}

export const usePosts = create<PostsProps>((set) => ({
    searchValue: undefined,
    error: false,
    setSearch: (newValue) => set({ searchValue: newValue }),
    setError: (v) => set({ error: v }),
}));
