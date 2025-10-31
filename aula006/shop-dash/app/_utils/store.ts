import { create, StateCreator } from "zustand";
import { setTheme } from "./localStorage";

interface StoreProps {
    theme: string;
    category: string;
    favorites: string[];
    updateTheme: (newValue: string) => void;
    updateCateg: (newValue: string) => void;
    updateFav: (newArray: string[]) => void;
}

export const useShop = create<StoreProps>((set) => ({
    theme: "light",
    category: "",
    favorites: [],
    updateTheme: (newValue) => updateThemeFunct(newValue, set),
    updateCateg: (newValue) => set({ category: newValue }),
    updateFav: (newArray) => set({ favorites: newArray }),
}));

function updateThemeFunct(
    newValue: string,
    set: Parameters<StateCreator<StoreProps>>[0]
) {
    setTheme(newValue);
    set({ theme: newValue });
}
