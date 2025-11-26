import { create } from "zustand";

interface PostsProps {
    searchValue: string | undefined;
    setSearch: (newValue: string) => void;
}

export const usePosts = create<PostsProps>((set) => ({
    searchValue: undefined,
    setSearch: (newValue) => set({ searchValue: newValue }),
}));
