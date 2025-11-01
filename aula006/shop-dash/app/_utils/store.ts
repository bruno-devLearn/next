import { create, StateCreator } from "zustand";
import { setTheme } from "./localStorage";

interface StoreProps {
    theme: string;
    category: string;
    favorites: string[];
    isIncludes: boolean;
    updateTheme: (newValue: string) => void;
    updateCateg: (newValue: string) => void;
    updateFav: (newArray: string[]) => void;
    updateIncludes: (newValu: boolean) => void;
}

export const useShop = create<StoreProps>((set) => ({
    theme: "light",
    category: "",
    favorites: [],
    isIncludes: false,
    updateTheme: (newValue) => updateThemeFunct(newValue, set),
    updateCateg: (newValue) => set({ category: newValue }),
    updateFav: (newArray) => set({ favorites: newArray }),
    updateIncludes: (newValue) => set({ isIncludes: newValue }),
}));

function updateThemeFunct(
    newValue: string,
    set: Parameters<StateCreator<StoreProps>>[0]
) {
    setTheme(newValue);
    set({ theme: newValue });
}
