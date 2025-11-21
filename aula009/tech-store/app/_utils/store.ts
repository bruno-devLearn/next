import { create } from "zustand";
import { Theme } from "./types";

interface ShopProps {
    theme: Theme;
    searchValue?: string;
    globalId?: number;
    selectedCategs: string[];
    indexPage: number;
    updateTheme: (theme: Theme) => void;
    setSearch: (newValue?: string) => void;
    setId: (newId?: number) => void;
    setCategs: (newArray: string[]) => void;
    setIndex: (newIndex: number) => void;
}

export const useShop = create<ShopProps>((set) => ({
    theme: "light",
    searchValue: undefined,
    globalId: undefined,
    selectedCategs: ["todas"],
    indexPage: 0,
    updateTheme: (theme) => set({ theme }),
    setSearch: (newValue) => set({ searchValue: newValue }),
    setId: (newId) => set({ globalId: newId }),
    setCategs: (newArr) => set({ selectedCategs: newArr }),
    setIndex: (newIndex) => set({ indexPage: newIndex }),
}));
