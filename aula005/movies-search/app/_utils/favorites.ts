import { create } from "zustand";

type favoriteProps = {
    favorites: string[];
    inputValue: string;
    searchValue: string;
    index: number;
    updateInput: (nevValue: string) => void;
    updateSearch: (nevValue: string) => void;
    updateFav: (newArray: string[]) => void;
    updateIndex: (newValue: number) => void;
};

export const useFav = create<favoriteProps>((set) => ({
    favorites: [],
    inputValue: "",
    searchValue: "",
    index: 1,
    updateFav: (newArray) => set({ favorites: newArray }),
    updateInput: (newValue) => set({ inputValue: newValue }),
    updateSearch: (newValue) => set({ searchValue: newValue }),
    updateIndex: (nemValue) => set({ index: nemValue }),
}));
