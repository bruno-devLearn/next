import { create } from "zustand";
import { Theme } from "./types";

interface ShopProps {
    theme: Theme;
    searchValue?: string;
    globalId?: number;
    selectedCategs: string[];
    updateTheme: (theme: Theme) => void;
    setSearch: (newValue?: string) => void;
    setId: (newId?: number) => void;
    setCategs: (newArray: string[]) => void;
}

export const useShop = create<ShopProps>((set) => ({
    theme: "light",
    searchValue: undefined,
    globalId: undefined,
    selectedCategs: ["todas"],
    updateTheme: (theme) => set({ theme }),
    setSearch: (newValue) => set({ searchValue: newValue }),
    setId: (newId) => set({ globalId: newId }),
    setCategs: (newArr) => set({ selectedCategs: newArr }),
}));
