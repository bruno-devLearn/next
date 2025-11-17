import { create } from "zustand";
import { Theme } from "./types";

interface ShopProps {
    theme: Theme;
    searchValue?: string;
    globalId?: number;
    updateTheme: (theme: Theme) => void;
    setSearch: (newValue?: string) => void;
    setId: (newId?: number) => void;
}

export const useShop = create<ShopProps>((set) => ({
    theme: "light",
    searchValue: undefined,
    globalId: undefined,
    updateTheme: (theme) => set({ theme }),
    setSearch: (newValue) => set({ searchValue: newValue }),
    setId: (newId) => set({ globalId: newId }),
}));
