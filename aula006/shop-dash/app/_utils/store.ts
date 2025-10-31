import { create, StateCreator } from "zustand";
import { setTheme } from "./localStorage";

interface StoreProps {
    theme: string;
    updateTheme: (newValue: string) => void;
}

export const useShop = create<StoreProps>((set) => ({
    theme: "light",
    updateTheme: (newValue) => updateThemeFunct(newValue, set),
}));

function updateThemeFunct(
    newValue: string,
    set: Parameters<StateCreator<StoreProps>>[0]
) {
    setTheme(newValue);
    set({ theme: newValue });
}
