import { create } from "zustand";
import { Theme } from "./types";

interface ShopProps {
    theme: Theme;
    updateTheme: (theme: Theme) => void;
}

export const useShop = create<ShopProps>((set) => ({
    theme: "theme",
    updateTheme: (theme) => set({ theme: theme }),
}));
