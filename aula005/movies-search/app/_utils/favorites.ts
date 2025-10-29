import { create } from "zustand";

type favoriteProps = {
    favorites: string[];
    inputValue: string;
    updateInput: (nevValue: string) => void;
    updateFav: (newArray: string[]) => void;
};

export const useFav = create<favoriteProps>((set) => ({
    favorites: [],
    inputValue: "",
    updateFav: (newArray) => set({ favorites: newArray }),
    updateInput: (newValue) => set({ inputValue: newValue }),
}));
